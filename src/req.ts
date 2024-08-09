export const req = (url: string) =>
  fetch(`/api${url}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.code === 200) return res.data;
      throw res.reason;
    });
