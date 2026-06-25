import type { LeaderRow } from '~/utils/leaderboard'

/** Fetches the per-specialization leaderboard via the get_leaderboard RPC. */
export function useLeaderboard() {
  const supabase = useSupabaseClient()

  async function fetchLeaderboard(spec: string): Promise<LeaderRow[]> {
    const { data, error } = await supabase.rpc('get_leaderboard', { p_spec: spec })
    if (error) throw error
    return (data ?? []) as LeaderRow[]
  }

  return { fetchLeaderboard }
}
