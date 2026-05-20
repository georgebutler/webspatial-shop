import { useMemo, useState } from "react";
import { Link } from "react-router";
import { ShoppingCartIcon } from "lucide-react";

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

  const links = [
    { label: "New In", href: "#products" },
    { label: "Best Sellers", href: "#products" },
    { label: "Collections", href: "#categories" },
  ];

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <header className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link to="/" className="text-2xl font-semibold tracking-tight text-foreground">
              Shop
            </Link>
            <nav className="flex flex-wrap items-center gap-2" aria-label="Primary">
              {links.map((link) => (
                <Button key={link.label} asChild variant="ghost" size="sm">
                  <a href={link.href}>{link.label}</a>
                </Button>
              ))}
            </nav>
          </div>

          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            <ShoppingCartIcon data-icon="inline-start" />
            Cart
            <Badge variant="secondary">2</Badge>
          </Button>
        </div>

        <Separator />
      </header>

      <main className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start">
        <aside id="categories" className="order-1">
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
              <CardDescription>Shop by department.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
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
                    className="w-full justify-between"
                    onClick={() => setSelectedCategory(category)}
                  >
                    <span>{category}</span>
                    <Badge variant="outline">{count}</Badge>
                  </Button>
                );
              })}
            </CardContent>
          </Card>
        </aside>

        <section id="products" className="order-2 flex flex-col gap-4" aria-label="Trending items">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">Trending items</h1>
              <p className="text-sm text-muted-foreground">
                {selectedCategory === "All products"
                  ? "Browse popular picks across every department."
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
      </main>
    </div>
  );
}
