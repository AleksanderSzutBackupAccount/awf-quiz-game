/** Stable per-device identifier kept in localStorage. */
export function getDeviceId(): string {
  if (!import.meta.client) return ''
  const KEY = 'awf:device_id'
  let id = localStorage.getItem(KEY)
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem(KEY, id)
  }
  return id
}
