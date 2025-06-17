import React, { useState, useEffect } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts"; // Example API

const PAGE_SIZE = 10;

const ApiData = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setFiltered(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFiltered(data);
    } else {
      setFiltered(
        data.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      );
      setPage(1);
    }
  }, [search, data]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 border rounded w-full"
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paginated.map((item) => (
              <li key={item.id} className="p-4 border rounded shadow">
                <h3 className="font-bold">{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ApiData;