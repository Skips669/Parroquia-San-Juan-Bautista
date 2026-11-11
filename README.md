# Parroquia San Juan Bautista - Zárate (MVP local)

## Requisitos

- Node.js 20.19+ o 22.12+
- npm

## Iniciar localmente

En una terminal, instala e inicia la API:

```powershell
cd backend
npm install
npm run dev
```

En otra terminal, inicia el sitio:

```powershell
cd frontend
npm install
npm run dev
```

Vite muestra la dirección local del frontend (por defecto `http://localhost:5173`). La API escucha en `http://localhost:3001`.

## API

- `GET /api/health`: estado del servicio.
- `GET /api/inventory`: productos disponibles.
- `PATCH /api/inventory/:id`: actualiza el stock con `{ "stock": 12 }`.
- `POST /api/donations`: registra una donación con `name`, `contact`, `product`, `quantity` y `deliveryDate`.

El inventario y los registros son volátiles: se guardan en memoria y se reinician al apagar el servidor. No hay un endpoint público para consultar datos personales de donantes.

## Datos de demostración

Fechas de jornadas, horarios, reportes y cronograma del taller son contenido ilustrativo para el MVP; deben ser confirmados y reemplazados por información parroquial verificada antes de publicar.
