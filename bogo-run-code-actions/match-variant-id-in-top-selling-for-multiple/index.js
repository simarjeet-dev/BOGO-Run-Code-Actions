
export default function main({order}) {
  const bogoItems = [
    {variantId : 'gid://shopify/ProductVariant/32837058691118', flowVariantId: 'gid://shopify/ProductVariant/41122291777582'},
    {variantId : 'gid://shopify/ProductVariant/39774118445102', flowVariantId: 'gid://shopify/ProductVariant/40094880727086'},
    {variantId : 'gid://shopify/ProductVariant/40260805263406', flowVariantId: 'gid://shopify/ProductVariant/40559408676910'},
    {variantId : 'gid://shopify/ProductVariant/40414720098350', flowVariantId: 'gid://shopify/ProductVariant/40601294045230'},
    {variantId : 'gid://shopify/ProductVariant/41059130769454', flowVariantId: 'gid://shopify/ProductVariant/40603852505134'},
    {variantId : 'gid://shopify/ProductVariant/41059132506158', flowVariantId: 'gid://shopify/ProductVariant/40603853127726'},
    {variantId : 'gid://shopify/ProductVariant/40241925685294', flowVariantId: 'gid://shopify/ProductVariant/40315976745006'},
    {variantId : 'gid://shopify/ProductVariant/39773996154926', flowVariantId: 'gid://shopify/ProductVariant/40603850702894'},
    {variantId : 'gid://shopify/ProductVariant/41059131326510', flowVariantId: 'gid://shopify/ProductVariant/40601059950638'},
    {variantId : 'gid://shopify/ProductVariant/40120822136878', flowVariantId: 'gid://shopify/ProductVariant/40499532595246'},
    {variantId : 'gid://shopify/ProductVariant/39773988880430', flowVariantId: 'gid://shopify/ProductVariant/40603856470062'},
    {variantId : 'gid://shopify/ProductVariant/39490162163758', flowVariantId: 'gid://shopify/ProductVariant/40888222777390'},
    {variantId : 'gid://shopify/ProductVariant/40461725106222', flowVariantId: 'gid://shopify/ProductVariant/40601295224878'},
    {variantId : 'gid://shopify/ProductVariant/39470014922798', flowVariantId: 'gid://shopify/ProductVariant/40499541671982'},
    {variantId : 'gid://shopify/ProductVariant/40093177118766', flowVariantId: 'gid://shopify/ProductVariant/40133919670318'},
    {variantId : 'gid://shopify/ProductVariant/39749894373422', flowVariantId: 'gid://shopify/ProductVariant/40499543932974'},
    {variantId : 'gid://shopify/ProductVariant/39749894373422', flowVariantId: 'gid://shopify/ProductVariant/40499543932974'},
    {variantId : 'gid://shopify/ProductVariant/32495731048494', flowVariantId: 'gid://shopify/ProductVariant/40499547897902'},
    {variantId : 'gid://shopify/ProductVariant/32557252345902', flowVariantId: 'gid://shopify/ProductVariant/40499524173870'},
    {variantId : 'gid://shopify/ProductVariant/32815856123950', flowVariantId: 'gid://shopify/ProductVariant/40559416279086'},
    {variantId : 'gid://shopify/ProductVariant/40483065561134', flowVariantId: 'gid://shopify/ProductVariant/40584324710446'},
    {variantId : 'gid://shopify/ProductVariant/40790479044654', flowVariantId: 'gid://shopify/ProductVariant/40865491124270'},
    {variantId : 'gid://shopify/ProductVariant/40632830230574', flowVariantId: 'gid://shopify/ProductVariant/40865489354798'},
    {variantId : 'gid://shopify/ProductVariant/32106874535982', flowVariantId: 'gid://shopify/ProductVariant/40877713260590'},
    {variantId : 'gid://shopify/ProductVariant/40943596404782', flowVariantId: 'gid://shopify/ProductVariant/41118531813422'},
    {variantId : 'gid://shopify/ProductVariant/17523481280558', flowVariantId: 'gid://shopify/ProductVariant/39981591199790'},
    {variantId : 'gid://shopify/ProductVariant/39525799755822', flowVariantId: 'gid://shopify/ProductVariant/40601300795438'},
    {variantId : 'gid://shopify/ProductVariant/32406523871278', flowVariantId: 'gid://shopify/ProductVariant/40865474150446'},
    {variantId : 'gid://shopify/ProductVariant/32729391071278', flowVariantId: 'gid://shopify/ProductVariant/41123723837486'},
    {variantId : 'gid://shopify/ProductVariant/17523480231982', flowVariantId: 'gid://shopify/ProductVariant/41120193151022'},
    {variantId : 'gid://shopify/ProductVariant/41067624103982', flowVariantId: 'gid://shopify/ProductVariant/41118543052846'},
    {variantId : 'gid://shopify/ProductVariant/17523483377710', flowVariantId: 'gid://shopify/ProductVariant/39981591003182'},
    {variantId : 'gid://shopify/ProductVariant/41067594219566', flowVariantId: 'gid://shopify/ProductVariant/41122330476590'},
    {variantId : 'gid://shopify/ProductVariant/39707616935982', flowVariantId: 'gid://shopify/ProductVariant/41118541709358'},
    {variantId : 'gid://shopify/ProductVariant/30325184888878', flowVariantId: 'gid://shopify/ProductVariant/41122290073646'},
    {variantId : 'gid://shopify/ProductVariant/40932099457070', flowVariantId: 'gid://shopify/ProductVariant/41119911411758'},
    {variantId : 'gid://shopify/ProductVariant/41063547568174', flowVariantId: 'gid://shopify/ProductVariant/41118541578286'},
    {variantId : 'gid://shopify/ProductVariant/40932099555374', flowVariantId: 'gid://shopify/ProductVariant/41119911673902'},
    {variantId : 'gid://shopify/ProductVariant/40932099489838', flowVariantId: 'gid://shopify/ProductVariant/41119911706670'},
    {variantId : 'gid://shopify/ProductVariant/40932099424302', flowVariantId: 'gid://shopify/ProductVariant/41119911542830'},
    {variantId : 'gid://shopify/ProductVariant/40896615645230', flowVariantId: 'gid://shopify/ProductVariant/41054342676526'},
    {variantId : 'gid://shopify/ProductVariant/41117349052462', flowVariantId: 'gid://shopify/ProductVariant/41054352637998'},
    {variantId : 'gid://shopify/ProductVariant/41063482982446', flowVariantId: 'gid://shopify/ProductVariant/41132016336942'},
    {variantId : 'gid://shopify/ProductVariant/40562783649838', flowVariantId: 'gid://shopify/ProductVariant/40877858324526'},
    {variantId : 'gid://shopify/ProductVariant/40542005002286', flowVariantId: 'gid://shopify/ProductVariant/40877868187694'},
    {variantId : 'gid://shopify/ProductVariant/41063438745646', flowVariantId: 'gid://shopify/ProductVariant/41132016861230'},
    {variantId : 'gid://shopify/ProductVariant/41063482785838', flowVariantId: 'gid://shopify/ProductVariant/41132017385518'},
    {variantId : 'gid://shopify/ProductVariant/40433235787822', flowVariantId: 'gid://shopify/ProductVariant/40914625396782'},
    {variantId : 'gid://shopify/ProductVariant/40386502033454', flowVariantId: 'gid://shopify/ProductVariant/40865489190958'},
    {variantId : 'gid://shopify/ProductVariant/40436741570606', flowVariantId: 'gid://shopify/ProductVariant/40914631458862'},
    {variantId : 'gid://shopify/ProductVariant/40260861952046', flowVariantId: 'gid://shopify/ProductVariant/40584337260590'}
  ];

  const bogoTag = "bogo-diwali";
  let matchedFlowVariantId = 123;
  let matchedBogo = false;

  let lowest_price;
  let lowest_price_variant_id;

  order.lineItems.forEach(lineItem => {
    lineItem.variant.product.tags.forEach(tag => {
      if(tag.includes(bogoTag)) {
        let line_item_price = lineItem.variant.price;
        if (lowest_price === undefined || line_item_price < lowest_price) {
          lowest_price = line_item_price;
          lowest_price_variant_id  = lineItem.variant.id;
        }
        
        if (lowest_price_variant_id) {
          bogoItems.forEach(item => {
            if (lowest_price_variant_id === item.variantId) {
             matchedFlowVariantId = item.flowVariantId;
             matchedBogo = true;
            }
          });
        }
      }
    });  
  });

  if (matchedFlowVariantId === 123) {
    matchedFlowVariantId = '123'
  }

  return {
    matchedFlowVariantId: matchedFlowVariantId,
    matchedBogo: matchedBogo
  }
}
