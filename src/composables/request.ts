import { createFetch } from "@vueuse/core"

export const useEnvdFetch = createFetch({
  baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1`,
})
