import { Link } from "react-router";
import { ArrowRightIcon, StarIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Model3D from "./Model3D";
import { Product } from "../data/products";

export type ProductCardProps = { product: Product; }
export function ProductCard({ product }: ProductCardProps) {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <Card className="h-full gap-4 bg-background transition-shadow hover:shadow-md">
      <Link to={`/product/${product.id}`} className="block px-4" aria-label={`View ${product.name}`}>
        <div className="overflow-hidden rounded-lg border bg-muted/40">
          <Model3D
            className="h-52 w-full [--xr-depth:140px]"
            src={product.model}
            imgSrc={product.image}
            alt={product.name}
          />
        </div>
      </Link>
      <CardHeader>
        <CardTitle>
          <Link to={`/product/${product.id}`} className="hover:underline">
            {product.name}
          </Link>
        </CardTitle>
        <CardAction>
          <Badge variant="outline">{product.category}</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1 font-medium text-foreground">
            <StarIcon data-icon="inline-start" />
            {product.rating.toFixed(1)}
          </span>
          <span>({product.reviews.toLocaleString()})</span>
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.shortDescription}</p>
        <div className="mt-auto flex items-center justify-between gap-3">
          <p className="text-xl font-bold text-foreground">{price}</p>
          {product.badge ? <Badge variant="secondary" className="whitespace-nowrap">{product.badge}</Badge> : null}
        </div>
        <p className="text-xs font-medium text-muted-foreground">{product.availability}</p>
      </CardContent>
      <CardFooter className="mt-auto gap-2 border-t">
        <Button className="flex-1">Add to cart</Button>
        <Button asChild variant="outline">
          <Link to={`/product/${product.id}`}>
            Details
            <ArrowRightIcon data-icon="inline-end" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
