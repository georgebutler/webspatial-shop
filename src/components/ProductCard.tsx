import { Link } from "react-router";
import { ArrowRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
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
    <Link to={`/product/${product.id}`} className="group block h-full" aria-label={`View ${product.name}`}>
      <Card className="h-full gap-4 transition-shadow group-hover:shadow-md">
        <div className="px-6 group-data-[size=sm]/card:px-4">
          <div className="overflow-hidden rounded-lg bg-muted">
            <Model3D
              className="h-56 w-full [--xr-depth:140px]"
              src={product.model}
              imgSrc={product.image}
              alt={product.name}
            />
          </div>
        </div>
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <CardTitle>{product.name}</CardTitle>
            <Badge variant="outline">{product.category}</Badge>
          </div>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-3">
          <p className="text-sm text-muted-foreground">{product.shortDescription}</p>
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-foreground">{price}</p>
              <p className="text-xs text-muted-foreground">{product.availability}</p>
            </div>
            {product.badge ? <Badge variant="secondary">{product.badge}</Badge> : null}
          </div>
        </CardContent>
        <CardFooter className="mt-auto border-t">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            View details
            <ArrowRightIcon />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
