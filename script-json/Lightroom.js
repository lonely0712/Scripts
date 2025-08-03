let body = $response.body.replace(/while.{7}\n/, "");
let obj = JSON.parse(body);

obj.entitlement = {
  status: "subscriber",
  current_subs: {
    product_id: "lightroom",
    store: "adobe",
    purchase_date: "2025-08-03T21:27:09.887016Z"
  },
  storage: {
    used: 0,
    limit: 112742891520,
    display_limit: 107374182400,
    warn: 85899345920
  }
};

body = JSON.stringify(obj);
$done({ body });