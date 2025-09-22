var body = $response.body;
var obj = JSON.parse(body);

obj = {
"subscriber": {
"entitlements": {
"unlimited": {
"expires_date": "2029-09-21T19:46:33Z",
"grace_period_expires_date": null,
"product_identifier": "trial_yearly",
"purchase_date": "2025-09-18T19:46:33Z"
}
},
"first_seen": "2025-08-16T23:55:51Z",
"last_seen": "2025-09-18T19:46:15Z",
"management_url": "https://apps.apple.com/account/subscriptions",
"non_subscriptions": {},
"original_app_user_id": "9A4AD76F-B9ED-4DF0-B422-00BF46905B6A",
"original_application_version": "4",
"original_purchase_date": "2024-06-05T07:32:39Z",
"other_purchases": {},
"subscriptions": {
"trial_yearly": {
"auto_resume_date": null,
"billing_issues_detected_at": null,
"display_name": "Trial-Yearly",
"expires_date": "2029-09-21T19:46:33Z",
"grace_period_expires_date": null,
"is_sandbox": false,
"management_url": "https://apps.apple.com/account/subscriptions",
"original_purchase_date": "2025-09-18T19:46:35Z",
"ownership_type": "PURCHASED",
"period_type": "trial",
"price": {
"amount": 0,
"currency": "SEK"
},
"purchase_date": "2025-09-18T19:46:33Z",
"refunded_at": null,
"store": "app_store",
"store_transaction_id": "600002166897579",
"unsubscribe_detected_at": null
}
}
}
}

body = JSON.stringify(obj);
$done({body});