import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const requestConfigPath =
  process.env.NEXT_INTL_REQUEST_CONFIG ?? './src/i18n/request.ts';
const withNextIntl = createNextIntlPlugin(requestConfigPath);

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
	turbopack: {
		root: projectRoot,
	},
};

export default withNextIntl(nextConfig);
