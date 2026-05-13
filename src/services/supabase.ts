import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://pqpkrmzmxzicyzxwpthm.supabase.co/";

const supabaseKey =
  "Ssb_publishable_a3VWvkn_K9U9MCZw43-5VQ_eBoYJpsO";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);