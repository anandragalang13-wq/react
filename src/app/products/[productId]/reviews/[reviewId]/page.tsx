// src/app/products/[productId]/reviews/[reviewId]/page.tsx
type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export default function ReviewDetails({ params }: Props) {
  return (
    <div>
      <h1>Review {params.reviewId} for Product {params.productId}</h1>
    </div>
  );
}