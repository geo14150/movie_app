import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export const updateSearchCount = async (searchTerm, movie) => {
  try {
    const { data } = await supabase
      .from('movies')
      .select('*')
      .eq('searchTerm', searchTerm)
      .single()

    if (data) {
      await supabase
        .from('movies')
        .update({ count: data.count + 1 })
        .eq('searchTerm', searchTerm)
    } else {
      await supabase.from('movies').insert({
        searchTerm,
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export const getTrendingMovies = async () => {
  try {
    const { data } = await supabase
      .from('movies')
      .select('*')
      .order('count', { ascending: false })
      .limit(5)

    return data || []
  } catch (error) {
    console.log(error)
    return []
  }
}