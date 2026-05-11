const API_BASE_URL = 'https://videosafe-api.1963789086.workers.dev';
const ACCESS_PASSWORD = 'wufuxi@163.com';

type PagesContext = {
  request: Request;
};

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });

const proxyConfigManage = async ({ request }: PagesContext) => {
  if (request.headers.get('X-VideoSafe-Setting-Password') !== ACCESS_PASSWORD) {
    return jsonResponse({ success: false, error: 'Unauthorized' }, 401);
  }

  const upstream = await fetch(`${API_BASE_URL}/config/manage`, {
    method: request.method,
    headers: {
      'Content-Type': request.headers.get('Content-Type') || 'application/json',
    },
    body: request.method === 'GET' ? undefined : await request.text(),
  });

  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      'Content-Type': upstream.headers.get('Content-Type') || 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
};

export const onRequestGet = proxyConfigManage;
export const onRequestPut = proxyConfigManage;
