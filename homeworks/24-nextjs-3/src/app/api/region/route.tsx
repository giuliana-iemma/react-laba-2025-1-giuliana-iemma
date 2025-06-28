// app/api/region/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const region = searchParams.get('region');

  if (!region) {
    return Response.json({ error: 'Region parameter is required' }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/region/${region}?fields=name,flags,region`
    );

    if (!res.ok) {
      const text = await res.text();
      return Response.json({ error: `REST API error: ${text}` }, { status: res.status });
    }

    const data = await res.json();

    return Response.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to fetch countries' }, { status: 500 });
  }
}
