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
  const STRAPI_APP_BASE_URL = process.env.STRAPI_APP_BASE_URL || 'failed';
  const title = collectionId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return (
    <>
      <Cards collectionId={title} STRAPI_APP_BASE_URL={STRAPI_APP_BASE_URL} />
    </>
  );
}
