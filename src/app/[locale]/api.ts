export const getUser = async (data: { name: string; password: string }) => {
  const response = await fetch(process.env.NEXT_PUBLIC_URL + "/api/user", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const res = await response.json();
  return res;
};

export const getNews = async (lang: string) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_URL + `/api/news?lang=${lang}`
  );
  const res = await response.json();
  return res.news;
};

export const getVacancies = async (lang: string) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_URL + `/api/vacancies?lang=${lang}`
  );
  const res = await response.json();
  return res.vacancies;
};

export const createNews = async (data: {
  title: string;
  body: string;
  lang: string;
}) => {
  const response = await fetch(process.env.NEXT_PUBLIC_URL + "/api/news", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const res = await response.json();
  return res;
};

export const createVacancy = async (data: {
  title: string;
  body: string;
  lang: string;
}) => {
  const response = await fetch(process.env.NEXT_PUBLIC_URL + "/api/vacancies", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const res = await response.json();
  return res;
};

export const deleteNews = async (id: string) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_URL + `/api/news?id=${id}`,
    {
      method: "DELETE",
    }
  );
  const res = await response.json();
  return res;
};

export const deleteVacancy = async (id: string) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_URL + `/api/vacancies?id=${id}`,
    {
      method: "DELETE",
    }
  );
  const res = await response.json();
  return res;
};
