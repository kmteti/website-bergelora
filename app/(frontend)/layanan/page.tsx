import Layanan from '@/modules/layanan/Layanan'
import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'

const page = async () => {
  const payload = await getPayload({ config })
  const { docs: layananDocs } = await payload.find({
    collection: 'layanan',
    limit: 100,
    sort: 'order',
  })

  return <Layanan initialLayanan={layananDocs} />
}

export default page
