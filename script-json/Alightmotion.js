var objc = JSON.parse($response.body);

objc = {
"result" : {
"result" : "success",
"msTime" : 1753352503435,
"accountCreatedMillis" : 1753352468000,
"licenses" : [
{
"productId" : "alightcreative.motion.1w_t10_7d",
"label" : null,
"benefits" : [
"RemoveWatermark",
"MemberEffects",
"ProjectPackageSharing",
"FutureMemberFeatures",
"AdvancedEasing",
"CameraObjects",
"LayerParenting",
"CloudStorageLowTier"
],
"period" : "1w",
"valid" : true,
"expires" : 1793820571000,
"details" : null,
"type" : "subscription",
"autoRenewing" : true,
"orderNumber" : "600002099147345",
"linkStatus" : "linked-current",
"store" : "apple_app_store"
}
],
"warnings" : [

]
}
}


$done({ body: JSON.stringify(objc) });