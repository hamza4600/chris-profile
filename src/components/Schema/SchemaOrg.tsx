'use client'

import { WithContext } from 'schema-dts'

interface SchemaOrgProps {
  schemas: Array<WithContext<any>>
}

export default function SchemaOrg({ schemas }: SchemaOrgProps) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}