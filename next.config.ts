import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          ...(Array.isArray(config.watchOptions?.ignored)
            ? config.watchOptions.ignored
            : config.watchOptions?.ignored
            ? [config.watchOptions.ignored]
            : []),
          '**/DumpStack.log.tmp',
          '**/pagefile.sys',
          '**/swapfile.sys',
          '**/hiberfil.sys',
          '**/System Volume Information/**',
          /[\\/]DumpStack\.log\.tmp$/,
          /[\\/]pagefile\.sys$/,
          /[\\/]swapfile\.sys$/,
        ],
      };
    }
    return config;
  },
};

export default nextConfig;

