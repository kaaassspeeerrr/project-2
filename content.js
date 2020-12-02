  var html = document.querySelector('html');
  var walker = document.createTreeWalker(html,NodeFilter.SHOW_TEXT);

  var node;
  while (node = walker.nextNode()) {
//1
    node.nodeValue = node.nodeValue.replace(/Nvidia Shield TV/gi, `Nvidia Shield TV *privacy not included`);
    node.nodeValue = node.nodeValue.replace(/Shield TV/gi, `Shield TV *privacy not included`)
    node.nodeValue = node.nodeValue.replace(/Shield TV Pro/gi, `Shield TV Pro*privacy not included`)
//2
    node.nodeValue = node.nodeValue.replace(/Livescribe Smartpen/gi, `Livescribe Smartpen *privacy not included`);
    node.nodeValue = node.nodeValue.replace(/Livescribe Symphony/gi, `Livescribe Symphony *privacy not included`);
    node.nodeValue = node.nodeValue.replace(/Livescribe Echo/gi, `Livescribe Echo *privacy not included`);
//3
    node.nodeValue = node.nodeValue.replace(/Dyson Pure Cool/gi, `Dyson Pure Cool *privacy not included`);
//4
    node.nodeValue = node.nodeValue.replace(/Kobo eReaders/gi, `Kobo eReaders *privacy not included`);
    node.nodeValue = node.nodeValue.replace(/Kobo Forma/gi, `Kobo Forma *privacy not included`);
    node.nodeValue = node.nodeValue.replace(/Kobo Libra H2O/gi, `Kobo Libra H2O *privacy not included`);
    node.nodeValue = node.nodeValue.replace(/Kobo Clara HD/gi, `Kobo Clara HD *privacy not included`);
    node.nodeValue = node.nodeValue.replace(/Kobo Nia/gi, `Kobo Nia *privacy not included`);
    node.nodeValue = node.nodeValue.replace(/Kobo Aura/gi, `Kobo Aura *privacy not included`);
//5
    node.nodeValue = node.nodeValue.replace(/Roku/gi, `Roku *privacy not included`);
//6
    node.nodeValue = node.nodeValue.replace(/Tonal/gi, `Tonal *privacy not included`);
//7
    node.nodeValue = node.nodeValue.replace(/Artie 3000 Coding Robot/gi, `Artie 3000 Coding Robot *privacy not included`);
//8
    node.nodeValue = node.nodeValue.replace(/Schlage Sense Smart Deadbolt/gi, `Schlage Sense Smart Deadbolt *privacy not included`);
//9
    node.nodeValue = node.nodeValue.replace(/Hamilton Beach Smart Coffee Maker/gi, `Hamilton Beach Smart Coffee Maker *privacy not included`);
//9
    node.nodeValue = node.nodeValue.replace(/Levoit Core 200s/gi, `Levoit Smart True Purifiers`);
//10
    node.nodeValue = node.nodeValue.replace(/Greater Goods WiFi Smart Body Scale/gi, `Greater Goods WiFi Smart Body Scale *privacy not included`);
//11
    node.nodeValue = node.nodeValue.replace(/Wickedbone Interactive Gaming Toy For Dogs/gi, `Wickedbone Interactive Gaming Toy For Dogs *privacy not included`);
//12
    node.nodeValue = node.nodeValue.replace(/Huawei Honor Band 5/gi, `Huawei Honor Band 5 *privacy not included`);
//13
    node.nodeValue = node.nodeValue.replace(/Huawei Smart Watch ES/gi, `Huawei Smart Watch ES *privacy not included`);
//14
    node.nodeValue = node.nodeValue.replace(/Ring Video Doorbell/gi, `Ring Video Doorbell *privacy not included`);
//15
    node.nodeValue = node.nodeValue.replace(/DJI Mavic Mini/gi, `DJI Mavic Mini *privacy not included`);
//16
    node.nodeValue = node.nodeValue.replace(/Mi Band 5/gi, `Mi Band 5 *privacy not included`);
//17
    node.nodeValue = node.nodeValue.replace(/Coway Airmega 300S/gi, `Coway Airmega 300S *privacy not included`);
//18
    node.nodeValue = node.nodeValue.replace(/Coway Airmega 400S/gi, `Coway Airmega 400S *privacy not included`);
//19
    node.nodeValue = node.nodeValue.replace(/Simplisafe Security Camera/gi, `Simplisafe Security Camera *privacy not included`);
//20
    node.nodeValue = node.nodeValue.replace(/Schlage Encode Smart WiFi Deadbolt/gi, `Schlage Encode Smart WiFi Deadbolt *privacy not included`);
//21
    node.nodeValue = node.nodeValue.replace(/SpotOn Fence/gi, `SpotOn Fence *privacy not included`);
//22
    node.nodeValue = node.nodeValue.replace(/Ring Security Camera/gi, `Ring Security Camera *privacy not included`);
//23
    node.nodeValue = node.nodeValue.replace(/Amazfit Band 5/gi, `Amazfit Band 5 *privacy not included`);
//25
    node.nodeValue = node.nodeValue.replace(/Ubtech/gi, `Ubtech *privacy not included`);
//26
    node.nodeValue = node.nodeValue.replace(/Atomi Smart Coffee Maker/gi, `Atomi Smart Coffee Maker *privacy not included`);
//27
    node.nodeValue = node.nodeValue.replace(/Facebook Portal/gi, `Facebook Portal *privacy not included`);
//28
    node.nodeValue = node.nodeValue.replace(/Moleskine Smart Writing Set/gi, `Moleskine Smart Writing Set *privacy not included`);
//29
    node.nodeValue = node.nodeValue.replace(/ikuddle Auto-Pack Litter Box/gi, `ikuddle Auto-Pack Litter Box *privacy not included`);
//30
    node.nodeValue = node.nodeValue.replace(/KidKraft Amazon Alexa 2-in-1 Kitchen & Market/gi, `KidKraft Amazon Alexa 2-in-1 Kitchen & Market *privacy not included`);
//31
    node.nodeValue = node.nodeValue.replace(/Oculus Quest 2 VR Headset/gi, `Oculus Quest 2 VR Headset *privacy not included`);
//32
    node.nodeValue = node.nodeValue.replace(/Dogness iPet Robot/gi, `Dogness iPet Robot *privacy not included`);
//33
    node.nodeValue = node.nodeValue.replace(/Amazon Halo/gi, `Amazon Halo *privacy not included`);

  }


//
