/** Shared open/dismissed state for the display-name modal (header + layout). */
export function useNameModal() {
  const open = useState<boolean>('awf:nameModalOpen', () => false)
  const dismissed = useState<boolean>('awf:nameModalDismissed', () => false)
  return { open, dismissed }
}
