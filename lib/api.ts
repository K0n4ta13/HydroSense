// Función genérica para hacer peticiones a la API
export async function fetchData<T>(endpoint: string): Promise<T> {
  const response = await fetch(endpoint)

  if (!response.ok) {
    throw new Error(`Error fetching data from ${endpoint}: ${response.statusText}`)
  }

  return response.json()
}

