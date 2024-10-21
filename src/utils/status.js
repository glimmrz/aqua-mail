export async function getSiteStatus() {
  const res = await fetch(
    process.env.VERIFY_STATUS_URL + process.env.CLIENT_ID
  );

  const resData = await res.json();
  if (!res.ok) {
    return {
      error: true,
      response: resData,
    };
  }

  return {
    error: false,
    response: resData,
  };
}
