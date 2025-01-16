export async function getCatFacts(type) {
  let fetchOptions = {};
  if (type === "dynamic") {
    fetchOptions = {
      cache: "no-store",
    };
  }
  const res = await fetch("https://catfact.ninja/fact", fetchOptions);
  return res.json();
}
