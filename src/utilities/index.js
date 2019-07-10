export const API_BASE_URL = 'http://localhost:4000'

export const buildUrl = (path = ''): string => `${ API_BASE_URL }/${ path }`