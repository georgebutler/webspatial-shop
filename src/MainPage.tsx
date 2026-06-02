import { useMemo, useState } from "react";
import { Link } from "react-router";
import { SearchIcon, ShieldCheckIcon, ShoppingCartIcon, TruckIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { products } from "./data/products";
import { ProductCard } from "./components/ProductCard";

export default function MainPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All products");

  const categories = useMemo(
    () => ["All products", ...new Set(products.map((product) => product.category))],
    []
  );

  const filteredProducts = useMemo(
    () =>
      selectedCategory === "All products"
        ? products
        : products.filter((product) => product.category === selectedCategory),
    [selectedCategory]
  );

  const links = ["New Arrivals", "Best Sellers", "Home", "Tools", "Garden"];

  return (
    <div className="min-h-screen bg-muted/30 text-foreground">
      <div className="bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground">
        Free shipping on orders over $50 · 30-day returns · Interactive 3D previews
      </div>

      <header className="border-b bg-background">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Link to="/" className="text-3xl font-bold tracking-tight text-foreground">
              Shop
            </Link>

            <div className="flex min-h-11 flex-1 items-center gap-3 rounded-md border bg-background px-3 md:max-w-xl">
              <SearchIcon data-icon="inline-start" />
              <span className="text-sm text-muted-foreground">Search products and departments</span>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button asChild variant="outline" className="justify-center md:w-auto">
                <Link to="/tutorial">WebSpatial tutorial</Link>
              </Button>
              <Button variant="outline" className="justify-center md:w-auto">
                <ShoppingCartIcon data-icon="inline-start" />
                Cart
                <Badge variant="secondary">2</Badge>
              </Button>
            </div>
          </div>

          <Separator />

          <nav className="flex flex-wrap items-center gap-2" aria-label="Primary">
            {links.map((label) => (
              <Button key={label} asChild variant="ghost" size="sm">
                <a href="#products">{label}</a>
              </Button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <section className="grid gap-4 rounded-lg border bg-background p-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex flex-col gap-3">
            <Badge className="w-fit">Today’s picks</Badge>
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">Shop everyday products in 3D.</h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                Browse a simple online store with clear prices, practical details, and interactive 3D previews.
              </p>
            </div>
          </div>
          <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 md:min-w-72 md:grid-cols-1">
            <div className="flex items-center gap-2">
              <TruckIcon data-icon="inline-start" />
              Fast shipping over $50
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheckIcon data-icon="inline-start" />
              Secure checkout and returns
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start">
          <aside id="categories" className="order-1">
            <Card className="gap-4">
              <CardHeader>
                <CardTitle>Departments</CardTitle>
                <CardDescription>Filter the catalog.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-1">
                {categories.map((category) => {
                  const count =
                    category === "All products"
                      ? products.length
                      : products.filter((product) => product.category === category).length;

                  return (
                    <Button
                      key={category}
                      type="button"
                      variant={selectedCategory === category ? "secondary" : "ghost"}
                      className="w-full justify-between rounded-md"
                      onClick={() => setSelectedCategory(category)}
                    >
                      <span className="min-w-0 flex-1 whitespace-normal text-left leading-snug">{category}</span>
                      <Badge variant="outline" className="shrink-0">{count}</Badge>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>
          </aside>

          <section id="products" className="order-2 flex flex-col gap-4" aria-label="Trending items">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">Featured collection</p>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Trending items</h2>
                <p className="text-sm text-muted-foreground">
                  {selectedCategory === "All products"
                    ? "Every item includes clear pricing, practical details, and an interactive 3D preview."
                    : `Browsing ${selectedCategory.toLowerCase()} products.`}
                </p>
              </div>
              <Badge variant="secondary">{filteredProducts.length} items</Badge>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
