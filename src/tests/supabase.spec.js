import { it, expect } from 'vitest'
import { supabase } from '../lib/supabaseClient.js'

async function getInstruments() {


  const { data, error: fetchError } = await supabase.from('instruments').select()

  if (fetchError) {
    error.value = fetchError.message
    return
  }

  return data
}

it('adds numbers', async () => {
  const instruments = await getInstruments()
  expect(instruments).toEqual([{'id': 1, name: 'violin'}, {'id': 2, name: 'viola'}, {'id': 3, name: 'cello'}])
})
