import React from 'react';
import { Cards } from "@/components";

export default function CollectionDetails({
  params,
}: {
  params: {
    collectionId: string;
  };
}) {
  const { collectionId } = params;
  const title = collectionId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return (
    <>
      <Cards collectionId={title} />
    </>
  );
}
