import '@payloadcms/next/css'
import type { Metadata } from 'next'
import { importMap } from './admin/importMap'
import config from '@payload-config'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import React from 'react'

const serverFunction = async function (args: any) {
  'use server'
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

export const metadata: Metadata = {
  title: 'KMTETI Payload Admin',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>{children}</RootLayout>
}

export default Layout
