export async function testBackend() {
  try {
    const res = await fetch("http://localhost/backend/test.php");
    const data = await res.json();
    console.log("Backend response:", data);
  } catch (err) {
    console.error("Ошибка при запросе к backend:", err);
  }
}