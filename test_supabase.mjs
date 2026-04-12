import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testQuery() {
  console.log("Querying Supabase...");
  const { data, error } = await supabase
    .from('projects')
    .select(`
      id,
      title,
      category,
      client,
      year,
      cover_image,
      description,
      testimonial_quote,
      testimonial_author,
      testimonial_role,
      project_images (
        url,
        caption
      )
    `);

  if (error) {
    console.error("SUPABASE ERROR:", error);
  } else {
    console.log("DATA LENGTH:", data?.length);
    console.log("DATA (FIRST ITEM):", JSON.stringify(data?.[0], null, 2));
  }
}

testQuery();
