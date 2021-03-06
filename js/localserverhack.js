var localload = function(file, callback) {
  csv = 'time,latitude,longitude,depth,mag,magType,nst,gap,dmin,rms,net,id,updated,place,type\n'+
'2014-08-20T11:31:59.430Z,35.8962,-97.2177,5,3.3,mb_lg,,59,0.191,0.59,us,usb000s4jb,2014-08-20T12:34:25.066Z,"6km SSE of Langston, Oklahoma",earthquake\n'+
'2014-08-20T11:14:33.440Z,32.1723328,-115.2301636,25.4,3.46,ml,18,210,0.1844,0.52,ci,ci37259944,2014-08-20T11:20:36.846Z,"8km SW of Alberto Oviedo Mota, Mexico",earthquake\n'+
'2014-08-20T11:01:39.500Z,35.894,-97.2292,7.22,3.2,mb_lg,,60,0.186,0.41,us,usb000s4iv,2014-08-20T12:19:46.143Z,"6km SSE of Langston, Oklahoma",earthquake\n'+
'2014-08-20T10:28:38.060Z,32.5983,47.6531,10,4.2,mb,,156,10.693,0.45,us,usb000s4iq,2014-08-20T12:04:06.186Z,"37km ESE of Dehloran, Iran",earthquake\n'+
'2014-08-20T10:14:15.690Z,32.6405,47.8051,10,5.7,mwp,,43,6.855,0.8,us,usb000s4if,2014-08-20T11:06:52.000Z,"50km E of Dehloran, Iran",earthquake\n'+
'2014-08-20T08:34:19.200Z,36.7803,-121.3903,2.9,2.9,Ml,60,25.2,0.03593261,0.09,nc,nc72280531,2014-08-20T10:44:07.796Z,"4km SSW of Ridgemark, California",earthquake\n'+
'2014-08-20T07:35:16.000Z,60.0648,-145.6282,11.4,2.6,ml,,,,0.67,ak,ak11361500,2014-08-20T07:46:11.765Z,"53km S of Cordova, Alaska",earthquake\n'+
'2014-08-20T04:37:00.500Z,35.8733,-121.4822,10.1,2.8,Md,64,194.4,0.09881468,0.16,nc,nc72280446,2014-08-20T08:00:05.268Z,"36km NW of San Simeon, California",earthquake\n'+
'2014-08-20T04:05:15.070Z,38.9681667,-111.4183333,1.77,3.26,ml,,,,,uu,uu60081707,2014-08-20T12:07:55.931Z,"28km WSW of Ferron, Utah",earthquake\n'+
'2014-08-20T02:19:00.000Z,60.0552,-153.5,100,2.5,ml,,,,2.61,ak,ak11361396,2014-08-20T10:21:28.798Z,"63km SW of Redoubt Volcano, Alaska",earthquake\n'+
'2014-08-20T01:11:41.830Z,-3.8071,137.64,60.4,4.9,mb,,126,5.453,1.17,us,usb000s4gh,2014-08-20T09:14:22.612Z,"143km E of Enarotali, Indonesia",earthquake\n'+
'2014-08-20T00:30:51.760Z,50.8952,173.3084,9.92,4.5,mb,,136,1.903,0.99,us,usb000s4ga,2014-08-20T08:33:28.333Z,"211km SSW of Shemya Island, Alaska",earthquake\n'+
'2014-08-20T00:22:31.000Z,51.8276,178.3253,99.2,3.4,ml,,,,1,ak,ak11361337,2014-08-20T08:25:11.187Z,"18km SW of Little Sitkin Island, Alaska",earthquake\n'+
'2014-08-20T00:11:38.580Z,49.5655,154.8975,102.7,4.2,mb,,167,3.958,0.59,us,usb000s4g4,2014-08-20T08:14:18.137Z,"151km SW of Severo-Kurilsk, Russia",earthquake\n'+
'2014-08-19T23:37:30.200Z,0.4315,146.2832,14.95,4.6,mb,,89,14.624,1.15,us,usb000s4ft,2014-08-20T07:40:09.523Z,"292km NNW of Lorengau, Papua New Guinea",earthquake\n'+
'2014-08-19T23:30:04.580Z,32.6336,47.5473,10,4.4,mb,,123,9.352,0.95,us,usb000s4fn,2014-08-20T07:32:44.312Z,"27km ESE of Dehloran, Iran",earthquake\n'+
'2014-08-19T23:12:52.950Z,-20.7534,-70.6742,19.07,4.6,mb,,140,0.498,0.99,us,usb000s4fd,2014-08-20T07:15:25.843Z,"80km SW of Iquique, Chile",earthquake\n'+
'2014-08-19T23:07:16.900Z,35.7641,-97.4698,5,2.7,ml,,104,,0.38,us,usb000s4fm,2014-08-20T11:28:53.983Z,"12km N of Edmond, Oklahoma",earthquake\n'+
'2014-08-19T22:42:33.220Z,-14.8747,66.2944,10,4.8,mb,,60,18.696,0.69,us,usb000s4fj,2014-08-20T06:45:35.102Z,"Mid-Indian Ridge",earthquake\n'+
'2014-08-19T21:32:17.870Z,32.8241,47.5958,10,5.3,mb,,40,9.173,1.05,us,usb000s4e8,2014-08-20T05:34:56.334Z,"24km SE of Abdanan, Iran",earthquake\n'+
'2014-08-19T19:14:40.171Z,41.8833,-119.6352,3.4478,3.11,ml,4,219.41,0.498,0.0542,nn,nn00456574,2014-08-20T03:17:18.617Z,"67km ESE of Lakeview, Oregon",earthquake\n'+
'2014-08-19T19:14:09.074Z,41.8749,-119.6314,1.7111,2.84,ml,5,220.89,0.501,0.1506,nn,nn00456572,2014-08-20T03:16:38.790Z,"72km SE of Lakeview, Oregon",earthquake\n'+
'2014-08-19T19:08:28.000Z,62.1545,-149.3178,25.9,2.8,ml,,,,0.63,ak,ak11360691,2014-08-20T03:10:57.226Z,"27km E of Y, Alaska",earthquake\n'+
'2014-08-19T18:19:58.080Z,-52.875,9.7052,11.1,5.1,mb,,78,22.003,1.2,us,usb000s4bw,2014-08-20T02:22:34.353Z,"Southwest of Africa",earthquake\n'+
'2014-08-19T17:59:11.350Z,32.5992,47.6489,9.37,4.5,mb,,94,9.405,0.7,us,usb000s4bf,2014-08-20T02:01:38.426Z,"37km ESE of Dehloran, Iran",earthquake\n'+
'2014-08-19T17:16:50.200Z,17.7975,-65.594,16,2.5,Md,4,291.6,0.30093562,0.03,pr,pr14231004,2014-08-20T01:19:41.802Z,"35km SSW of Esperanza, Puerto Rico",earthquake\n'+
'2014-08-19T17:15:33.400Z,35.8097,-97.4413,3.989,2.7,ml,,102,,0.77,us,usb000s4b3,2014-08-19T22:39:58.532Z,"7km S of Guthrie, Oklahoma",earthquake\n'+
'2014-08-19T17:12:20.590Z,5.5691,126.365,57.62,5,mb,,58,1.683,0.94,us,usb000s4as,2014-08-20T01:15:03.387Z,"88km ESE of Caburan, Philippines",earthquake\n'+
'2014-08-19T17:02:58.870Z,36.1766,66.6134,18.02,4.2,mb,,116,2.57,1.48,us,usb000s4ah,2014-08-20T01:05:39.177Z,"26km NW of Lab-Sar, Afghanistan",earthquake\n'+
'2014-08-19T16:58:52.500Z,19.1026,-64.429,58,2.6,Md,4,316.8,0.7051775,0.12,pr,pr14231003,2014-08-20T01:01:33.743Z,"78km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-19T16:11:58.000Z,-27.618,-70.996,50.7,4,mb,,,,2.57,us,usb000s49q,2014-08-20T00:14:41.399Z,"71km WSW of Copiapo, Chile",earthquake\n'+
'2014-08-19T15:38:18.180Z,-22.0481,-179.5004,609.99,5.2,mb,,33,4.86,0.67,us,usd000477j,2014-08-19T23:40:55.258Z,"175km SSW of Ndoi Island, Fiji",earthquake\n'+
'2014-08-19T15:16:37.130Z,32.6095,-109.1388,5,3.2,ml,,81,1.145,0.65,us,usb000s48s,2014-08-19T23:14:18.300Z,"49km NW of Lordsburg, New Mexico",earthquake\n'+
'2014-08-19T14:43:47.500Z,32.79,47.72,14,4.1,mb,,,,0.58,us,usb000s48f,2014-08-19T22:46:20.584Z,"35km SE of Abdanan, Iran",earthquake\n'+
'2014-08-19T14:43:19.000Z,63.1033,-151.4587,2,2.6,ml,,,,0.92,ak,ak11360376,2014-08-19T22:45:55.399Z,"110km NW of Talkeetna, Alaska",earthquake\n'+
'2014-08-19T14:27:17.936Z,41.8923,-119.6353,0,2.73,ml,5,217.92,0.497,0.1072,nn,nn00456489,2014-08-19T22:29:45.663Z,"67km ESE of Lakeview, Oregon",earthquake\n'+
'2014-08-19T13:43:31.860Z,-5.0962,152.7695,58.68,4.7,mb,,70,1.083,0.67,us,usb000s46s,2014-08-19T21:46:23.766Z,"75km SSW of Taron, Papua New Guinea",earthquake\n'+
'2014-08-19T13:38:23.760Z,36.9349,-5.5504,16.81,4.5,mb,,51,0.253,0.59,us,usb000s46p,2014-08-19T21:40:54.476Z,"1km NNW of Puerto Serrano, Spain",earthquake\n'+
'2014-08-19T13:26:23.360Z,42.9496,145.6344,43.92,5.1,mb,,131,2.056,0.64,us,usb000s46j,2014-08-19T21:28:53.871Z,"41km S of Nemuro, Japan",earthquake\n'+
'2014-08-19T13:16:54.300Z,35.5916,-97.3782,5.715,2.5,ml,,45,,0.61,us,usb000s46z,2014-08-20T00:58:20.562Z,"7km N of Spencer, Oklahoma",earthquake\n'+
'2014-08-19T13:04:48.317Z,41.8888,-119.6346,0,2.78,ml,5,218.53,0.498,0.1399,nn,nn00456482,2014-08-19T21:07:21.607Z,"67km ESE of Lakeview, Oregon",earthquake\n'+
'2014-08-19T12:41:35.220Z,35.8186,-97.4718,3.46,4.2,mb,,29,0.025,0.69,us,usb000s45z,2014-08-20T12:02:18.532Z,"7km SSW of Guthrie, Oklahoma",earthquake\n'+
'2014-08-19T12:16:19.220Z,32.5554,47.7497,10,4.3,mb,,123,10.028,1.17,us,usb000s45v,2014-08-19T20:18:58.030Z,"47km ESE of Dehloran, Iran",earthquake\n'+
'2014-08-19T11:21:59.000Z,51.893,-176.3954,51.5,3.3,ml,,,,0.49,ak,ak11360264,2014-08-19T20:09:34.502Z,"18km E of Adak, Alaska",earthquake\n'+
'2014-08-19T10:32:52.660Z,32.5211,47.6949,10,4.7,mb,,123,10.085,0.89,us,usb000s45j,2014-08-19T18:35:23.893Z,"44km ESE of Dehloran, Iran",earthquake\n'+
'2014-08-19T10:11:22.000Z,60.0265,-153.0859,134.3,4,ml,,,,0.61,ak,ak11360224,2014-08-19T18:13:53.094Z,"57km SSW of Redoubt Volcano, Alaska",earthquake\n'+
'2014-08-19T09:13:16.404Z,41.8946,-119.6309,1.2754,3.42,ml,6,103.79,0.5,0.1977,nn,nn00456465,2014-08-20T04:22:01.328Z,"68km SE of Lakeview, Oregon",earthquake\n'+
'2014-08-19T08:25:48.290Z,-4.8332,150.8119,24.82,4.9,mb,,75,1.491,0.85,us,usb000s44j,2014-08-19T16:29:10.801Z,"108km NE of Kimbe, Papua New Guinea",earthquake\n'+
'2014-08-19T08:23:39.000Z,60.2914,-151.4658,55.1,2.7,ml,,,,0.7,ak,ak11360195,2014-08-19T16:26:14.666Z,"12km SW of Cohoe, Alaska",earthquake\n'+
'2014-08-19T08:03:38.926Z,41.857,-119.635,1.3701,3.02,ml,6,105.2,0.5,0.1199,nn,nn00456464,2014-08-20T03:14:39.684Z,"69km ESE of Lakeview, Oregon",earthquake\n'+
'2014-08-19T07:37:35.400Z,19.7982,-68.013,9,3.4,Md,12,324,1.57295006,0.36,pr,pr14231001,2014-08-19T15:40:05.999Z,"140km NNE of Punta Cana, Dominican Republic",earthquake\n'+
'2014-08-19T07:27:50.060Z,34.333,-120.2658333,0.03,2.88,ml,39,121,0.2135,0.35,ci,ci37259504,2014-08-19T20:27:24.584Z,"31km SSW of Solvang, California",earthquake\n'+
'2014-08-19T06:56:03.000Z,57.2725,-157.0603,100,2.6,ml,,,,0.79,ak,ak11360187,2014-08-19T14:58:39.430Z,"153km NE of Chignik Lake, Alaska",earthquake\n'+
'2014-08-19T06:46:05.193Z,41.8897,-119.6262,0.6713,3.23,ml,5,123.5,0.504,0.0762,nn,nn00456460,2014-08-20T03:26:09.070Z,"69km ESE of Lakeview, Oregon",earthquake\n'+
'2014-08-19T06:06:26.510Z,6.7768,-73.0626,158.98,4.6,mb,,83,0.844,0.96,us,usb000s421,2014-08-19T14:09:02.510Z,"10km NNW of Aratoca, Colombia",earthquake\n'+
'2014-08-19T05:29:14.635Z,41.8892,-119.6373,0,2.51,ml,4,130.86,0.496,0.1101,nn,nn00456446,2014-08-20T04:18:38.688Z,"70km ESE of Lakeview, Oregon",earthquake\n'+
'2014-08-19T04:54:48.000Z,63.2201,-144.2776,20.1,2.7,ml,,,,0.95,ak,ak11360151,2014-08-19T06:29:28.219Z,"66km W of Tok, Alaska",earthquake\n'+
'2014-08-19T04:47:15.700Z,19.4733,-68.0258,54,3.4,Md,12,324,1.32142178,0.25,pr,pr14231000,2014-08-19T12:49:42.989Z,"106km NNE of Punta Cana, Dominican Republic",earthquake\n'+
'2014-08-19T04:16:31.024Z,41.8853,-119.631,0.2287,2.64,ml,5,219.18,0.501,0.1,nn,nn00456427,2014-08-20T02:51:50.060Z,"71km SE of Lakeview, Oregon",earthquake\n'+
'2014-08-19T04:00:34.690Z,41.8677,-119.6406,0,3.58,ml,5,76.33,0.495,0.144,nn,nn00456414,2014-08-20T05:55:14.582Z,"65km SE of Lakeview, Oregon",earthquake\n'+
'2014-08-19T02:37:42.000Z,52.7924,-169.4808,2.5,2.6,ml,,,,0.64,ak,ak11360104,2014-08-19T19:09:26.289Z,"44km WSW of Nikolski, Alaska",earthquake\n'+
'2014-08-19T01:41:34.000Z,52.7458,-169.4828,2.3,3.8,ml,,,,0.75,ak,ak11360082,2014-08-19T18:57:18.631Z,"46km WSW of Nikolski, Alaska",earthquake\n'+
'2014-08-19T01:10:55.000Z,52.6842,-169.4794,5.2,4.3,ml,,,,0.8,ak,ak11360064,2014-08-19T18:50:16.056Z,"49km SW of Nikolski, Alaska",earthquake\n'+
'2014-08-19T00:36:56.514Z,41.8832,-119.6118,1.7841,3.32,ml,6,132.45,0.515,0.2972,nn,nn00456370,2014-08-19T18:30:30.763Z,"72km SE of Lakeview, Oregon",earthquake\n'+
'2014-08-19T00:24:17.239Z,41.8759,-119.6322,0,2.59,ml,4,123.85,0.5,0.0718,nn,nn00456431,2014-08-19T16:54:39.736Z,"67km SE of Lakeview, Oregon",earthquake\n'+
'2014-08-18T23:39:56.592Z,41.8839,-119.6349,0.4661,2.66,ml,4,121.91,0.498,0.0603,nn,nn00456366,2014-08-19T16:46:47.907Z,"67km SE of Lakeview, Oregon",earthquake\n'+
'2014-08-18T22:08:56.000Z,37.3986667,-119.994,21.85,2.62,md,27,138,0.2003,0.11,nc,nc72280016,2014-08-19T19:11:44.191Z,"9km SSW of Mariposa, California",earthquake\n'+
'2014-08-18T21:44:27.450Z,32.5346,47.593,10,4.7,mb,,63,9.444,1.48,us,usb000s3xb,2014-08-19T05:47:24.417Z,"35km ESE of Dehloran, Iran",earthquake\n'+
'2014-08-18T21:07:03.150Z,51.7087,178.4847,73.65,4.5,mb,,110,0.607,1.07,us,usb000s3wt,2014-08-19T05:09:38.419Z,"26km S of Little Sitkin Island, Alaska",earthquake\n'+
'2014-08-18T18:08:23.810Z,32.5542,47.698,10,5.7,mwb,,40,9.455,0.99,us,usb000s3t7,2014-08-19T19:12:55.435Z,"43km ESE of Dehloran, Iran",earthquake\n'+
'2014-08-18T16:22:46.200Z,36.1723,-96.6968,4.158,2.5,ml,,98,,0.18,us,usb000s3sq,2014-08-19T00:25:13.448Z,"6km N of Yale, Oklahoma",earthquake\n'+
'2014-08-18T16:11:11.800Z,18.8015,-67.3722,6,2.8,Md,12,212.4,0.41322503,0.37,pr,pr14230005,2014-08-19T00:13:52.273Z,"44km NW of San Antonio, Puerto Rico",earthquake\n'+
'2014-08-18T15:53:20.630Z,5.6928,123.953,519.05,4.6,mb,,99,5.454,0.61,us,usb000s3rq,2014-08-18T23:56:16.803Z,"62km SSW of Palimbang, Philippines",earthquake\n'+
'2014-08-18T15:40:44.530Z,-55.3903,-28.016,17.02,5.1,mb,,33,5.021,0.56,us,usb000s3rl,2014-08-18T23:43:21.926Z,"154km NNW of Visokoi Island, ",earthquake\n'+
'2014-08-18T15:10:47.630Z,-32.2641,-69.2681,97.99,4.6,mb,,66,1.192,0.91,us,usb000s3rb,2014-08-18T23:13:27.198Z,"80km NNW of Mendoza, Argentina",earthquake\n'+
'2014-08-18T14:40:43.200Z,36.2962,-97.6944,4.296,2.6,ml,,102,,0.34,us,usb000s3rc,2014-08-18T22:43:24.910Z,"18km E of Waukomis, Oklahoma",earthquake\n'+
'2014-08-18T14:03:18.700Z,36.0458,-120.6115,5.1,2.5,Md,83,61.2,0.06288207,0.08,nc,nc72279831,2014-08-18T22:05:44.936Z,"24km WSW of Coalinga, California",earthquake\n'+
'2014-08-18T13:07:56.300Z,36.1347,-96.8345,7.987,2.5,ml,,77,,0.52,us,usb000s3r3,2014-08-18T21:10:25.144Z,"12km W of Yale, Oklahoma",earthquake\n'+
'2014-08-18T11:51:34.290Z,32.7054,47.5471,10,5.8,mb,,43,9.271,0.99,us,usb000s3qn,2014-08-18T19:54:06.846Z,"26km E of Dehloran, Iran",earthquake\n'+
'2014-08-18T11:23:03.210Z,32.6451,47.6183,10,5.2,mb,,47,9.347,1.14,us,usb000s3qj,2014-08-18T19:25:42.849Z,"33km E of Dehloran, Iran",earthquake\n'+
'2014-08-18T11:21:35.450Z,34.2175,-118.675,5.09,2.55,ml,79,31,0.05027,0.38,ci,ci37259176,2014-08-19T19:38:39.244Z,"3km NW of West Hills, California",earthquake\n'+
'2014-08-18T10:17:12.000Z,51.917,-171.1862,4.8,3.9,ml,,,,1.5,ak,ak11358942,2014-08-18T18:19:42.057Z,"63km S of Amukta Island, Alaska",earthquake\n'+
'2014-08-18T08:05:26.120Z,32.6838,47.6078,10,4.9,mb,,65,9.315,1.01,us,usb000s3q1,2014-08-18T08:24:41.715Z,"31km E of Dehloran, Iran",earthquake\n'+
'2014-08-18T05:32:19.700Z,19.36,-67.4315,50,3.3,Md,9,316.8,0.93784116,0.18,pr,pr14230003,2014-08-18T13:34:52.584Z,"102km NNW of San Antonio, Puerto Rico",earthquake\n'+
'2014-08-18T05:25:50.800Z,32.6525,47.753,10,5.6,mwb,,40,9.374,1.25,us,usb000s3ph,2014-08-18T14:05:12.278Z,"45km E of Dehloran, Iran",earthquake\n'+
'2014-08-18T04:55:56.780Z,34.3303333,-116.8301667,7.56,3.67,ml,126,21,0.01778,0.16,ci,ci37259096,2014-08-19T04:57:00.002Z,"7km N of Big Bear City, California",earthquake\n'+
'2014-08-18T04:39:30.270Z,32.5405,47.7173,10,4.7,mb,,65,9.473,0.97,us,usb000s3pb,2014-08-18T12:42:01.236Z,"45km ESE of Dehloran, Iran",earthquake\n'+
'2014-08-18T04:20:41.230Z,32.6959,47.6259,10,4.9,mb,,47,9.302,1.24,us,usb000s3p9,2014-08-18T12:23:12.994Z,"33km E of Dehloran, Iran",earthquake\n'+
'2014-08-18T04:04:51.000Z,59.7326,-154.1271,100,2.9,ml,,,,2.33,ak,ak11358781,2014-08-18T12:07:33.480Z,"44km E of Old Iliamna, Alaska",earthquake\n'+
'2014-08-18T03:11:30.600Z,32.6895,47.5369,10,4.5,mb,,63,9.283,1.03,us,usb000s3nx,2014-08-18T11:14:01.642Z,"25km E of Dehloran, Iran",earthquake\n'+
'2014-08-18T03:01:33.940Z,32.6329,47.4862,10,4.7,mb,,51,9.322,1.07,us,usb000s3nu,2014-08-18T11:04:20.028Z,"21km ESE of Dehloran, Iran",earthquake\n'+
'2014-08-18T02:50:09.350Z,35.3707,-96.4886,8.91,3.4,mb_lg,,106,0.197,0.43,us,usb000s3nq,2014-08-19T20:09:11.769Z,"13km S of Boley, Oklahoma",earthquake\n'+
'2014-08-18T02:32:05.260Z,32.7392,47.6696,10,6.2,mwp,,40,9.273,1.11,us,usb000s3np,2014-08-18T22:04:44.990Z,"36km SE of Abdanan, Iran",earthquake\n'+
'2014-08-18T01:29:54.700Z,19.1646,-66.6709,35,2.6,Md,7,280.8,0.69619435,0.51,pr,pr14230001,2014-08-18T09:32:21.469Z,"76km N of Arecibo, Puerto Rico",earthquake\n'+
'2014-08-18T01:25:57.970Z,36.833,-98.2471,5,3.8,mb_lg,,94,0.314,0.43,us,usb000s3ni,2014-08-18T16:14:14.294Z,"13km NE of Cherokee, Oklahoma",earthquake\n'+
'2014-08-17T23:30:32.400Z,36.8577,-97.8678,5,2.9,ml,,126,,0.87,us,usb000s3s0,2014-08-20T07:51:31.820Z,"13km WNW of Medford, Oklahoma",earthquake\n'+
'2014-08-17T23:05:15.500Z,17.8794,-65.5251,12,2.9,Md,6,208.8,0.2173923,0.25,pr,pr14229003,2014-08-18T07:07:53.386Z,"24km SSW of Esperanza, Puerto Rico",earthquake\n'+
'2014-08-17T22:59:21.430Z,32.2055,-115.2596667,12.52,3.46,ml,11,195,0.1834,0.21,ci,ci37208589,2014-08-19T18:20:23.907Z,"8km WSW of Alberto Oviedo Mota, Mexico",earthquake\n'+
'2014-08-17T22:59:09.990Z,32.2258333,-115.232,19.3,3.17,ml,14,192,0.1529,0.18,ci,ci37259016,2014-08-19T18:26:34.210Z,"5km W of Alberto Oviedo Mota, Mexico",earthquake\n'+
'2014-08-17T20:15:14.670Z,-9.6708,112.5693,51.91,4.6,mb,,144,1.966,1.13,us,usb000s3lx,2014-08-18T04:17:52.262Z,"141km S of Krajan Tambakrejo, Indonesia",earthquake\n'+
'2014-08-17T18:30:27.080Z,-20.1539,-70.3616,28.19,4,mwr,,171,0.443,0.76,us,usb000s3l2,2014-08-17T20:10:57.166Z,"24km WNW of Iquique, Chile",earthquake\n'+
'2014-08-17T18:15:55.100Z,36.8274,142.423,24.13,4.8,mb,,81,3.399,0.98,us,usb000s3l1,2014-08-18T02:18:36.048Z,"139km E of Iwaki, Japan",earthquake\n'+
'2014-08-17T17:58:55.000Z,52.5254,-171.5973,11.5,2.7,ml,,,,1.96,ak,ak11358703,2014-08-18T02:01:27.461Z,"23km W of Amukta Island, Alaska",earthquake\n'+
'2014-08-17T16:50:07.600Z,36.7448,-98.346,4.887,2.6,ml,,160,,0.45,us,usb000s3kz,2014-08-18T00:53:03.333Z,"1km SE of Cherokee, Oklahoma",earthquake\n'+
'2014-08-17T16:35:07.700Z,36.8559,-97.87,5,3.1,ml,,126,,0.6,us,usb000s3kl,2014-08-17T19:17:13.029Z,"13km WNW of Medford, Oklahoma",earthquake\n'+
'2014-08-17T16:04:48.690Z,-20.7774,68.4277,10,5.2,mb,,67,11.861,0.63,us,usb000s3ki,2014-08-18T00:07:14.624Z,"Mid-Indian Ridge",earthquake\n'+
'2014-08-17T16:04:16.000Z,60.7505,-147.1023,13.3,2.8,ml,,,,0.82,ak,ak11358691,2014-08-18T00:06:52.362Z,"58km SW of Valdez, Alaska",earthquake\n'+
'2014-08-17T15:59:05.600Z,36.8584,-97.8714,5,3.4,ml,,126,,0.58,us,usb000s3k8,2014-08-18T03:17:54.471Z,"13km WNW of Medford, Oklahoma",earthquake\n'+
'2014-08-17T14:47:19.510Z,32.6591,47.7148,10,5,mb,,50,9.36,0.82,us,usb000s3k2,2014-08-17T22:49:51.865Z,"42km E of Dehloran, Iran",earthquake\n'+
'2014-08-17T14:41:01.000Z,52.0225,174.7549,48.4,3.5,ml,,,,0.81,ak,ak11358677,2014-08-17T22:43:29.563Z,"88km WSW of Buldir Island, Alaska",earthquake\n'+
'2014-08-17T13:43:31.690Z,36.2813,-97.243,2.17,3,mb_lg,,40,0.395,0.52,us,usb000s3jy,2014-08-18T13:27:58.910Z,"4km ESE of Perry, Oklahoma",earthquake\n'+
'2014-08-17T11:24:16.910Z,32.673,47.7863,10,4.8,mb,,122,9.361,1.32,us,usb000s3js,2014-08-17T19:27:11.839Z,"48km E of Dehloran, Iran",earthquake\n'+
'2014-08-17T10:07:20.910Z,53.0943,159.8749,59,4.3,mb,,117,0.742,0.74,us,usb000s3jr,2014-08-17T18:10:00.261Z,"82km E of Petropavlovsk-Kamchatskiy, Russia",earthquake\n'+
'2014-08-17T09:11:45.600Z,28.151,103.7028,10,4.7,mb,,47,6.798,1.47,us,usb000s3jp,2014-08-17T14:05:02.106Z,"13km ESE of Xiluodu, China",earthquake\n'+
'2014-08-17T08:45:52.980Z,28.076,103.58,10,4.3,mb,,88,6.727,0.42,us,usb000s3jl,2014-08-17T16:48:22.074Z,"13km S of Xiluodu, China",earthquake\n'+
'2014-08-17T08:30:49.230Z,36.5537,71.4405,72.07,4.3,mb,,97,0.898,0.87,us,usb000s3jj,2014-08-17T16:33:20.259Z,"16km SSW of Ashkasham, Afghanistan",earthquake\n'+
'2014-08-17T07:56:34.920Z,-7.446,146.2188,47.59,4.7,mb,,80,6.74,0.59,us,usb000s3jh,2014-08-17T15:59:17.841Z,"54km WSW of Bulolo, Papua New Guinea",earthquake\n'+
'2014-08-17T07:28:37.400Z,36.8272,-97.837,4.25,2.7,mb_lg,,123,0.342,0.39,us,usb000s3j7,2014-08-17T15:28:22.237Z,"9km WNW of Medford, Oklahoma",earthquake\n'+
'2014-08-17T06:31:10.470Z,36.8445,-97.8325,5.44,3.5,mb_lg,,123,0.33,0.5,us,usb000s3it,2014-08-17T15:38:03.000Z,"9km WNW of Medford, Oklahoma",earthquake\n'+
'2014-08-17T06:23:55.100Z,19.1767,-64.3939,24,3.1,Md,8,320.4,0.78512756,0.28,pr,pr14229002,2014-08-17T14:26:25.059Z,"87km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-17T06:18:43.670Z,36.8374,-97.8371,5.47,3.8,mb_lg,,123,0.171,0.4,us,usb000s3in,2014-08-17T17:14:50.664Z,"9km WNW of Medford, Oklahoma",earthquake\n'+
'2014-08-17T04:28:48.000Z,19.5057,-155.6222,19.6,2.8,Ml,,43.2,0.02694946,0.1,hv,hv60751826,2014-08-17T07:00:32.515Z,"26km ENE of Honaunau-Napoopoo, Hawaii",earthquake\n'+
'2014-08-17T02:41:24.400Z,37.865,-122.2442,10.4,2.6,Md,83,21.6,0.00898315,0.07,nc,nc72279166,2014-08-19T16:04:45.095Z,"2km ESE of Berkeley, California",earthquake\n'+
'2014-08-17T02:38:26.660Z,-7.0709,125.4401,488.11,5.3,mb,,30,2.908,0.92,us,usb000s3hi,2014-08-17T10:41:00.453Z,"165km N of Dili, East Timor",earthquake\n'+
'2014-08-17T02:13:43.030Z,36.702,-97.8275,5,3,mb_lg,,62,0.233,0.52,us,usb000s3hf,2014-08-17T10:16:15.693Z,"14km SW of Medford, Oklahoma",earthquake\n'+
'2014-08-16T23:35:35.440Z,51.695,157.0697,123.35,4.6,mb,,146,1.467,0.74,us,usb000s3gy,2014-08-17T07:38:02.341Z,"44km ENE of Ozernovskiy, Russia",earthquake\n'+
'2014-08-16T22:07:59.880Z,28.1816,103.5699,10,5.1,mb,,39,6.833,0.72,us,usb000s3gk,2014-08-17T14:03:36.882Z,"2km SSW of Xiluodu, China",earthquake\n'+
'2014-08-16T20:40:13.610Z,52.4302,-168.5611,30.87,4.5,mb,,141,0.571,0.57,us,usb000s3ft,2014-08-17T04:42:44.618Z,"60km SSE of Nikolski, Alaska",earthquake\n'+
'2014-08-16T18:23:44.060Z,-14.9026,167.3273,133.58,5.1,mb,,35,7.179,0.96,us,usb000s3ei,2014-08-19T15:28:51.301Z,"33km ENE of Port-Olry, Vanuatu",earthquake\n'+
'2014-08-16T16:56:08.790Z,-12.261,167.0492,253.35,4.6,mb,,73,9.773,0.74,us,usb000s3e1,2014-08-17T00:58:39.881Z,"187km NNW of Sola, Vanuatu",earthquake\n'+
'2014-08-16T16:39:55.940Z,24.5784,94.6091,96.46,5,mb,,53,2.683,0.92,us,usb000s3dx,2014-08-16T17:32:16.446Z,"55km E of Yairipok, India",earthquake\n'+
'2014-08-16T15:50:58.240Z,57.4529,120.7933,19.57,4.8,mb,,39,6.42,1.12,us,usb000s3ds,2014-08-16T23:53:37.619Z,"164km ENE of Chara, Russia",earthquake\n'+
'2014-08-16T15:21:18.390Z,40.1777,145.4136,30.65,5,mb,,136,2.505,1.23,us,usb000s3dm,2014-08-16T23:24:06.145Z,"Off the east coast of Honshu, Japan",earthquake\n'+
'2014-08-16T15:08:32.230Z,0.037,-78.2383,87.97,4.7,mb,,162,3.007,1.41,us,usb000s3dc,2014-08-17T16:36:33.766Z,"11km W of Cayambe, Ecuador",earthquake\n'+
'2014-08-16T14:08:08.910Z,-7.1099,155.5807,35,4.6,mb,,96,4.468,0.51,us,usb000s3cz,2014-08-16T22:10:37.409Z,"88km S of Panguna, Papua New Guinea",earthquake\n'+
'2014-08-16T13:43:39.560Z,6.8043,126.8059,94.83,4.9,mb,,78,1.246,1.09,us,usb000s3cp,2014-08-16T21:46:15.452Z,"48km SE of Tarragona, Philippines",earthquake\n'+
'2014-08-16T12:39:03.910Z,10.4924,-67.4941,19.13,4.6,mb,,87,2.207,0.91,us,usb000s3cc,2014-08-17T03:20:54.617Z,"25km NE of El Limon, Venezuela",earthquake\n'+
'2014-08-16T11:57:36.310Z,-2.9055,136.3264,38.23,4.8,mb,,43,4.072,0.93,us,usb000s3c6,2014-08-16T20:00:08.160Z,"106km ENE of Nabire, Indonesia",earthquake\n'+
'2014-08-16T11:50:06.270Z,-2.8231,136.3188,42.1,4.5,mb,,122,4.066,1.08,us,usb000s3c5,2014-08-16T19:52:39.282Z,"110km ENE of Nabire, Indonesia",earthquake\n'+
'2014-08-16T11:36:32.830Z,5.5236,-82.6422,10,4.4,mb,,83,4.681,0.85,us,usb000s3c3,2014-08-16T19:39:14.571Z,"278km S of Punta de Burica, Panama",earthquake\n'+
'2014-08-16T10:54:25.010Z,36.8421,-97.8403,4.12,3.4,mb_lg,,123,0.166,0.34,us,usb000s3bx,2014-08-16T19:27:55.442Z,"10km WNW of Medford, Oklahoma",earthquake\n'+
'2014-08-16T10:10:48.800Z,-20.0992,-70.9768,10,4.8,mb,,110,0.879,1.48,us,usb000s3bl,2014-08-17T00:37:57.000Z,"88km W of Iquique, Chile",earthquake\n'+
'2014-08-16T09:42:58.740Z,-21.7417,-69.366,93.9,4.8,mb,,108,0.127,0.64,us,usb000s3bd,2014-08-17T00:36:26.000Z,"91km NNW of Calama, Chile",earthquake\n'+
'2014-08-16T08:51:36.500Z,18.8581,-64.3507,46,2.9,Md,5,324,0.50485319,0.07,pr,pr14228006,2014-08-16T16:54:15.711Z,"56km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-16T08:30:10.120Z,-7.0343,125.0706,539.18,4.6,mb,,52,2.817,0.88,us,usb000s3b5,2014-08-16T16:32:41.139Z,"177km NNW of Dili, East Timor",earthquake\n'+
'2014-08-16T08:03:56.790Z,27.7635,142.6842,29.4,4.5,mb,,116,0.799,0.89,us,usb000s3b8,2014-08-16T16:06:38.318Z,"88km NNE of Chichi-shima, Japan",earthquake\n'+
'2014-08-16T08:01:47.200Z,18.0044,-66.7938,9,2.5,Md,17,154.8,0.08623827,0.25,pr,pr14228005,2014-08-16T16:04:16.785Z,"1km S of Guayanilla, Puerto Rico",earthquake\n'+
'2014-08-16T07:52:57.970Z,-21.3689,-179.3442,610.51,4.3,mb,,103,4.361,0.74,us,usb000s3as,2014-08-16T15:55:33.647Z,"104km SW of Ndoi Island, Fiji",earthquake\n'+
'2014-08-16T06:45:58.100Z,18.999,-67.069,8,3.2,Md,15,219.6,0.53000602,0.37,pr,pr14228001,2014-08-16T14:48:31.393Z,"55km N of Isabela, Puerto Rico",earthquake\n'+
'2014-08-16T06:24:53.100Z,19.0984,-65.123,23,3.1,Md,7,273.6,0.75907642,0.28,pr,pr14228003,2014-08-16T14:27:35.261Z,"86km NNW of Charlotte Amalie, U.S. Virgin Islands",earthquake\n'+
'2014-08-16T05:26:59.400Z,36.3092,-120.8535,8,2.7,Md,95,54,0.06288207,0.07,nc,nc72278551,2014-08-18T20:31:06.712Z,"26km ENE of King City, California",earthquake\n'+
'2014-08-16T05:25:30.200Z,19.4617,-155.5928,52,2.6,ml,,61.1999951040004,0.008983153,0.24,hv,hv60751311,2014-08-18T21:02:27.569Z,"28km E of Honaunau-Napoopoo, Hawaii",earthquake\n'+
'2014-08-16T04:50:12.500Z,19.0869,-68.0968,50,3,Md,7,262.8,0.62971901,0.28,pr,pr14228002,2014-08-16T12:52:38.837Z,"64km NNE of Punta Cana, Dominican Republic",earthquake\n'+
'2014-08-16T04:13:36.440Z,32.5568,-109.1073,5,3.1,ml,,83,1.117,0.61,us,usb000s3a2,2014-08-16T18:22:39.278Z,"43km WNW of Lordsburg, New Mexico",earthquake\n'+
'2014-08-16T03:10:08.520Z,-0.4424,98.1245,22.01,4.6,mb,,155,1.819,1.07,us,usb000s39q,2014-08-16T11:12:46.389Z,"122km NW of Sikabaluan, Indonesia",earthquake\n'+
'2014-08-16T02:37:15.650Z,-17.1962,-172.9724,46.92,4.5,mb,,67,22.716,1.22,us,usb000s39l,2014-08-16T10:39:56.378Z,"160km SSE of Hihifo, Tonga",earthquake\n'+
'2014-08-16T01:56:00.770Z,17.7057,-62.2274,53.85,4.3,mb,,77,0.422,0.56,us,usb000s39e,2014-08-16T12:06:25.437Z,"44km W of Codrington, Barbuda",earthquake\n'+
'2014-08-15T23:43:05.000Z,62.6503,-152.7797,1,2.5,ml,,,,0.88,ak,ak11357725,2014-08-16T07:45:39.074Z,"142km WNW of Talkeetna, Alaska",earthquake\n'+
'2014-08-15T21:42:31.900Z,42.9484,77.3814,28.26,5,mb,,35,0.89,0.76,us,usb000s37z,2014-08-18T14:12:57.230Z,"41km SSE of Talghar, Kazakhstan",earthquake\n'+
'2014-08-15T21:15:10.100Z,41.3983,-126.0403,24,2.8,Ml,39,277.2,1.53611914,0.28,nc,nc72278391,2014-08-20T04:57:05.804Z,"158km WSW of Crescent City, California",earthquake\n'+
'2014-08-15T20:48:47.330Z,2.1284,96.2804,28.33,4.4,mb,,206,1.531,0.76,us,usb000s36h,2014-08-16T15:26:53.752Z,"40km SSW of Sinabang, Indonesia",earthquake\n'+
'2014-08-15T20:36:23.000Z,57.9025,-156.2504,129.5,3.4,ml,,,,0.42,ak,ak11357639,2014-08-16T15:16:04.000Z,"90km SSE of King Salmon, Alaska",earthquake\n'+
'2014-08-15T18:48:52.110Z,-11.671,166.3633,77.11,4.9,mb,,105,3.841,0.73,us,usb000s33x,2014-08-16T15:04:22.000Z,"120km SSE of Lata, Solomon Islands",earthquake\n'+
'2014-08-15T18:05:19.590Z,-15.15,-173.635,2.24,4.8,mb,,60,2.181,0.77,us,usb000s33d,2014-08-16T14:57:45.562Z,"89km N of Hihifo, Tonga",earthquake\n'+
'2014-08-15T17:48:12.790Z,36.4833,70.269,209.11,4.3,mb,,116,0.686,1.03,us,usb000s331,2014-08-16T14:34:45.745Z,"38km ESE of Farkhar, Afghanistan",earthquake\n'+
'2014-08-15T17:03:36.090Z,33.9503333,-118.7218333,12.63,3.36,ml,87,50,0.0889,0.25,ci,ci37258408,2014-08-19T01:58:49.075Z,"9km SSW of Malibu Beach, California",earthquake\n'+
'2014-08-15T14:48:10.190Z,28.4761,51.6687,34.62,4.9,mb,,87,5.367,0.75,us,usb000s31s,2014-08-15T22:50:53.432Z,"97km SE of Bandar Bushehr, Iran",earthquake\n'+
'2014-08-15T14:17:34.700Z,19.0881,-64.2776,24,3.2,Md,4,338.4,0.97287545,0.12,pr,pr14227013,2014-08-15T22:20:07.691Z,"82km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-15T12:24:44.050Z,36.8393,142.5318,22.37,4.6,mb,,128,3.487,1.06,us,usb000s2zh,2014-08-15T20:27:21.691Z,"148km E of Iwaki, Japan",earthquake\n'+
'2014-08-15T12:09:02.400Z,36.8117,-97.7463,4.22,2.5,ml,,106,,0.68,us,usb000s2zp,2014-08-16T00:01:16.792Z,"1km WNW of Medford, Oklahoma",earthquake\n'+
'2014-08-15T09:53:37.700Z,18.787,-64.486,5,2.6,Md,3,345.6,0.61983755,0.28,pr,pr14227011,2014-08-15T17:56:38.040Z,"43km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-15T08:47:36.400Z,19.617,-64.6512,53,3.1,Md,7,316.8,1.1929627,0.43,pr,pr14227010,2014-08-15T16:50:15.531Z,"132km N of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-15T08:34:55.110Z,14.4938,-92.6667,35,4.2,mb,,169,0.94,1.24,us,usb000s2xd,2014-08-15T16:37:33.218Z,"36km SW of Puerto Madero, Mexico",earthquake\n'+
'2014-08-15T08:09:32.500Z,18.368,-67.412,2,2.7,Md,8,288,0.30093562,0.41,pr,pr14227009,2014-08-15T16:12:04.852Z,"17km W of Rincon, Puerto Rico",earthquake\n'+
'2014-08-15T07:18:29.100Z,18.6142,-66.6969,72,2.8,Md,14,219.6,0.20840915,0.51,pr,pr14227008,2014-08-15T15:21:07.779Z,"15km N of Arecibo, Puerto Rico",earthquake\n'+
'2014-08-15T06:32:40.300Z,36.051,-120.0283,10.1,2.9,Md,132,46.8,0.06288207,0.16,nc,nc72277966,2014-08-15T20:57:07.965Z,"7km NW of Kettleman City, California",earthquake\n'+
'2014-08-15T04:53:45.300Z,18.8661,-64.4505,14,2.8,Md,7,306,0.47341215,0.11,pr,pr14227007,2014-08-15T12:56:35.113Z,"52km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-15T04:53:36.800Z,18.9465,-67.7595,47,3.2,Md,9,324,0.77704272,0.43,pr,pr14227006,2014-08-15T12:56:31.820Z,"79km ENE of Punta Cana, Dominican Republic",earthquake\n'+
'2014-08-15T04:37:15.100Z,18.9123,-65.3356,67,3.1,Md,10,255.6,0.60276956,0.33,pr,pr14227004,2014-08-15T12:39:47.606Z,"67km N of Culebra, Puerto Rico",earthquake\n'+
'2014-08-15T04:00:19.300Z,36.9342,27.3988,14.87,4.2,mb,,77,1.397,0.95,us,usb000s2us,2014-08-15T06:44:28.533Z,"10km ENE of Kos, Greece",earthquake\n'+
'2014-08-15T03:57:18.800Z,34.3018333,-116.4428333,9.74,3.8,ml,121,27,0.05096,0.16,ci,ci15538561,2014-08-16T03:58:33.571Z,"20km N of Yucca Valley, California",earthquake\n'+
'2014-08-15T03:19:50.350Z,41.578,142.6815,61.14,4.4,mb,,134,0.563,0.79,us,usb000s2um,2014-08-15T22:17:26.000Z,"87km SSE of Shizunai, Japan",earthquake\n'+
'2014-08-15T03:01:46.600Z,36.3112,-120.8578,7.9,2.9,Md,89,50.4,0.06288207,0.07,nc,nc72277866,2014-08-15T20:28:04.631Z,"26km ENE of King City, California",earthquake\n'+
'2014-08-15T02:49:35.610Z,35.8923,-97.1693,3.14,2.9,mb_lg,,52,0.202,0.43,us,usb000s2ui,2014-08-15T16:52:56.887Z,"9km SE of Langston, Oklahoma",earthquake\n'+
'2014-08-15T02:03:48.000Z,-20.34,-68.802,122.1,4.4,mb,,,,0.92,us,usb000s2ub,2014-08-15T21:13:23.502Z,"140km E of Iquique, Chile",earthquake\n'+
'2014-08-15T02:03:22.310Z,21.6265,121.1386,28.06,4.2,mb,,118,1.186,0.63,us,usb000s2uc,2014-08-15T21:59:56.000Z,"58km SE of Hengchun, Taiwan",earthquake\n'+
'2014-08-15T01:40:54.400Z,19.0275,-66.6368,64,2.9,Md,12,284.4,0.55695548,0.34,pr,pr14227002,2014-08-15T09:43:32.549Z,"62km N of Arecibo, Puerto Rico",earthquake\n'+
'2014-08-15T00:15:08.000Z,53.0961,-161.9286,20,2.6,ml,,,,0.91,ak,ak11357460,2014-08-15T15:53:41.929Z,"218km SSE of False Pass, Alaska",earthquake\n'+
'2014-08-15T00:13:19.000Z,19.0998,-66.6234,42,3.3,Md,17,273.6,0.62432912,0.28,pr,pr14227001,2014-08-15T08:15:57.855Z,"70km N of Arecibo, Puerto Rico",earthquake\n'+
'2014-08-15T00:09:42.900Z,19.1257,-66.6635,37,3.1,Md,12,277.2,0.65666847,0.23,pr,pr14227000,2014-08-15T08:12:11.184Z,"72km N of Arecibo, Puerto Rico",earthquake\n'+
'2014-08-14T23:20:33.520Z,36.3492,-97.1297,5,2.7,mb_lg,,38,0.384,1.04,us,usb000s2tt,2014-08-15T07:23:10.317Z,"15km ENE of Perry, Oklahoma",earthquake\n'+
'2014-08-14T22:09:17.510Z,51.9069,178.4982,115,4.9,mb,,84,0.728,0.68,us,usb000s2te,2014-08-15T06:11:46.314Z,"4km S of Little Sitkin Island, Alaska",earthquake\n'+
'2014-08-14T22:03:12.660Z,32.1316667,-115.1486667,25.67,2.83,ml,10,241,0.1815,0.28,ci,ci15538465,2014-08-14T23:44:12.990Z,"10km S of Alberto Oviedo Mota, Mexico",earthquake\n'+
'2014-08-14T21:37:48.000Z,18.8484,-64.702,8,2.7,Md,3,320.4,0.54797232,0.05,pr,pr14226012,2014-08-15T05:40:18.221Z,"48km N of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-14T21:22:52.000Z,60.9102,-150.7966,48.4,2.6,ml,,,,0.86,ak,ak11357405,2014-08-15T05:25:27.795Z,"36km NE of Nikiski, Alaska",earthquake\n'+
'2014-08-14T20:22:50.920Z,21.6508,121.0443,25.02,4.7,mb,,54,1.161,0.83,us,usb000s2rx,2014-08-15T04:25:58.098Z,"49km SE of Hengchun, Taiwan",earthquake\n'+
'2014-08-14T19:28:45.000Z,58.8883,-154.3689,100,2.6,ml,,,,1.09,ak,ak11357392,2014-08-15T03:31:12.771Z,"100km SSE of Old Iliamna, Alaska",earthquake\n'+
'2014-08-14T19:25:24.500Z,19.1035,-66.6604,39,2.9,Md,6,288,0.75727978,0.18,pr,pr14226013,2014-08-15T03:27:59.431Z,"70km N of Arecibo, Puerto Rico",earthquake\n'+
'2014-08-14T19:12:07.500Z,19.524,-65.3113,73,3.1,Md,3,334.8,1.20913237,0.07,pr,pr14226011,2014-08-15T03:14:40.943Z,"133km NNE of Vieques, Puerto Rico",earthquake\n'+
'2014-08-14T19:04:38.540Z,36.3591,-97.1241,5,2.8,ml,,38,0.384,0.6,us,usb000s2r9,2014-08-15T16:36:01.821Z,"16km ENE of Perry, Oklahoma",earthquake\n'+
'2014-08-14T18:47:42.200Z,18.8416,-64.3772,65,2.9,Md,4,338.4,0.73212696,0.11,pr,pr14226010,2014-08-15T02:50:13.959Z,"53km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-14T17:25:07.180Z,0.8307,146.1357,10,4.9,mb,,58,7.82,0.75,us,usb000s2ms,2014-08-15T01:27:35.687Z,"Federated States of Micronesia region",earthquake\n'+
'2014-08-14T17:09:51.920Z,27.9732,128.1343,36.96,4.9,mb,,90,1.139,1.7,us,usb000s2mp,2014-08-15T15:28:09.000Z,"139km WSW of Naze, Japan",earthquake\n'+
'2014-08-14T16:38:05.200Z,35.3781,-96.494,5,2.8,ml,,83,,1.09,us,usb000s31u,2014-08-15T18:33:14.680Z,"12km S of Boley, Oklahoma",earthquake\n'+
'2014-08-14T15:06:00.030Z,12.0394,-87.7633,31.18,3.9,mwr,,197,0.968,0.69,us,usb000s2m7,2014-08-15T13:19:23.574Z,"80km SW of Corinto, Nicaragua",earthquake\n'+
'2014-08-14T14:15:32.010Z,35.8493,-97.2921,5,3.1,mb_lg,,63,0.137,0.56,us,usb000s2lv,2014-08-14T20:20:04.405Z,"11km SSW of Langston, Oklahoma",earthquake\n'+
'2014-08-14T13:58:37.370Z,33.2088333,-115.9855,7.28,2.65,ml,68,27,0.07108,0.19,ci,ci15538321,2014-08-14T21:33:44.266Z,"10km SSW of Salton City, California",earthquake\n'+
'2014-08-14T13:54:32.100Z,19.2611,-68.1689,27,3.2,Md,12,273.6,0.76895788,0.5,pr,pr14226005,2014-08-14T22:04:54.530Z,"79km NNE of Punta Cana, Dominican Republic",earthquake\n'+
'2014-08-14T13:44:11.200Z,36.4952,70.4218,223.72,4.3,mb,,73,0.641,0.94,us,usb000s2ll,2014-08-14T21:46:50.304Z,"51km E of Farkhar, Afghanistan",earthquake\n'+
'2014-08-14T13:36:27.800Z,18.6711,-67.526,9,2.7,Md,5,298.8,0.28746089,0.31,pr,pr14226009,2014-08-14T21:39:11.166Z,"46km NW of Rincon, Puerto Rico",earthquake\n'+
'2014-08-14T13:28:03.000Z,18.9489,-63.737,25,3.3,Md,4,349.2,0.9872485,0.15,pr,pr14226008,2014-08-14T21:30:29.823Z,"108km NW of The Valley, Anguilla",earthquake\n'+
'2014-08-14T12:28:00.290Z,35.8369,28.2755,10,4.1,mb,,133,1.602,1.39,us,usb000s2l8,2014-08-15T05:12:07.870Z,"36km SE of Lardos, Greece",earthquake\n'+
'2014-08-14T11:54:09.300Z,37.4017,-119.9787,20.7,2.5,Md,44,54,0.18864621,0.23,nc,nc72273825,2014-08-18T18:16:42.455Z,"9km S of Mariposa, California",earthquake\n'+
'2014-08-14T10:43:55.000Z,67.5818,-161.9638,15.9,3.7,ml,,,,1.1,ak,ak11357265,2014-08-14T22:04:44.370Z,"42km E of Noatak, Alaska",earthquake\n'+
'2014-08-14T10:31:12.200Z,37.3762,-119.9882,21.2,2.7,Md,21,108,0.19762936,0.18,nc,nc72273760,2014-08-18T18:09:08.088Z,"12km S of Mariposa, California",earthquake\n'+
'2014-08-14T10:22:34.800Z,19.6303,-65.2873,59,2.8,Md,6,295.2,1.30974368,0.23,pr,pr14226006,2014-08-14T18:25:13.880Z,"145km NNE of Vieques, Puerto Rico",earthquake\n'+
'2014-08-14T08:32:16.600Z,-3.4431,145.5374,44.54,4.9,mb,,65,6.137,0.73,us,usb000s2k9,2014-08-14T16:34:53.942Z,"177km ENE of Angoram, Papua New Guinea",earthquake\n'+
'2014-08-14T08:26:40.500Z,36.2194,-97.5459,2.58,2.6,mb_lg,,59,0.149,0.58,us,usb000s2kb,2014-08-14T14:44:04.499Z,"24km WSW of Perry, Oklahoma",earthquake\n'+
'2014-08-14T07:46:21.000Z,59.564,-149.2249,9.9,3.4,ml,,,,0.79,ak,ak11357223,2014-08-14T22:00:06.622Z,"61km SSE of Seward, Alaska",earthquake\n'+
'2014-08-14T07:39:34.000Z,18.6616,-67.4841,10,2.9,Md,14,198,0.40334356,0.28,pr,pr14226004,2014-08-14T15:42:47.293Z,"43km NW of Aguadilla, Puerto Rico",earthquake\n'+
'2014-08-14T07:18:30.000Z,60.0427,-153.2717,100,2.9,ml,,,,1.02,ak,ak11357214,2014-08-14T22:05:28.594Z,"57km SSW of Redoubt Volcano, Alaska",earthquake\n'+
'2014-08-14T07:09:14.720Z,41.3465,-72.4863,5,2.7,mb_lg,,156,0.34,0.43,us,usb000s2jx,2014-08-18T19:39:10.516Z,"5km SW of Deep River Center, Connecticut",earthquake\n'+
'2014-08-14T06:19:09.180Z,36.6335,-98.2562,5,2.7,mb_lg,,156,0.254,0.29,us,usb000s2jg,2014-08-14T13:38:02.163Z,"9km N of Helena, Oklahoma",earthquake\n'+
'2014-08-14T06:04:14.000Z,59.069,-153.991,131.1,4.4,ml,,,,0.75,ak,ak11357151,2014-08-15T06:40:04.767Z,"76km SSE of Old Iliamna, Alaska",earthquake\n'+
'2014-08-14T05:41:33.200Z,18.1522,-64.8451,12,2.6,Md,6,129.6,0.22278219,0.36,pr,pr14226002,2014-08-14T13:44:11.234Z,"22km SSE of Charlotte Amalie, U.S. Virgin Islands",earthquake\n'+
'2014-08-14T05:00:43.600Z,19.4669,-66.3339,28,3.4,Md,15,270,1.00162154,0.11,pr,pr14226001,2014-08-14T13:03:12.067Z,"110km N of Brenas, Puerto Rico",earthquake\n'+
'2014-08-14T04:44:08.000Z,59.8465,-153.092,100,2.5,ml,,,,0.42,ak,ak11357121,2014-08-14T22:05:01.520Z,"71km W of Anchor Point, Alaska",earthquake\n'+
'2014-08-14T03:55:13.700Z,38.7758,-122.7607,1.7,2.6,Md,78,21.6,0.00898315,0.07,nc,nc72273625,2014-08-14T20:10:06.874Z,"0km WSW of The Geysers, California",earthquake\n'+
'2014-08-14T03:43:42.590Z,34.6165,-119.0596667,0,2.57,ml,41,34,0.122,0.33,ci,ci15538137,2014-08-15T02:52:44.621Z,"25km NE of Ojai, California",earthquake\n'+
'2014-08-14T00:57:34.500Z,19.1275,-65.2506,138,3.4,Md,9,273.6,0.81567028,0.07,pr,pr14226000,2014-08-14T09:00:13.558Z,"91km N of Culebra, Puerto Rico",earthquake\n'+
'2014-08-14T00:02:56.060Z,-20.1509,-69.9933,52.97,5.3,mww,,55,0.448,0.77,us,usb000s2i1,2014-08-14T22:40:53.865Z,"17km ENE of Iquique, Chile",earthquake\n'+
'2014-08-13T22:51:29.440Z,33.8031,131.7991,87.3,4.5,mb,,83,1.025,0.39,us,usb000s2hh,2014-08-13T23:14:53.158Z,"21km SW of Hikari, Japan",earthquake\n'+
'2014-08-13T22:32:06.800Z,39.3378,-122.8905,13.4,2.9,Ml,86,25.2,0.16169675,0.1,nc,nc72273480,2014-08-14T22:03:51.629Z,"19km N of Upper Lake, California",earthquake\n'+
'2014-08-13T16:59:02.000Z,56.5836,-156.443,93.8,2.7,ml,,,,1.08,ak,ak11356044,2014-08-14T22:05:48.811Z,"98km NNW of Chirikof Island, Alaska",earthquake\n'+
'2014-08-13T16:49:43.500Z,14.0294,120.7895,171.66,4.2,mb,,116,8.365,0.72,us,usb000s2en,2014-08-14T00:52:12.116Z,"3km ENE of Bolboc, Philippines",earthquake\n'+
'2014-08-13T15:59:59.000Z,52.6905,-169.5263,13.2,4,ml,,,,0.43,ak,ak11355938,2014-08-14T22:05:05.764Z,"52km WSW of Nikolski, Alaska",earthquake\n'+
'2014-08-13T15:44:28.180Z,36.6107,-97.6594,4.2,3.2,mb_lg,,78,0.281,0.38,us,usb000s2e7,2014-08-14T01:49:02.639Z,"22km SSE of Medford, Oklahoma",earthquake\n'+
'2014-08-13T14:17:39.620Z,34.5059,28.3178,36.96,4.6,mb,,153,2.585,1.14,us,usb000s2ds,2014-08-13T22:20:54.301Z,"150km SE of Karpathos, Greece",earthquake\n'+
'2014-08-13T13:57:48.000Z,52.7407,-169.539,13.1,4.2,ml,,,,0.51,ak,ak11355721,2014-08-14T22:05:21.329Z,"50km WSW of Nikolski, Alaska",earthquake\n'+
'2014-08-13T13:39:35.500Z,18.8507,-68.6065,113,3.3,Md,12,309.6,0.39705536,0.28,pr,pr14225004,2014-08-13T21:42:44.864Z,"22km NNE of Otra Banda, Dominican Republic",earthquake\n'+
'2014-08-13T13:19:41.000Z,52.8591,-169.5365,4.2,4,ml,,,,0.62,ak,ak11355698,2014-08-14T22:05:44.893Z,"45km W of Nikolski, Alaska",earthquake\n'+
'2014-08-13T13:11:39.730Z,-22.2684,170.37,56.85,5,mb,,85,3.644,0.58,us,usb000s2dp,2014-08-13T21:14:17.144Z,"173km W of Ile Hunter, New Caledonia",earthquake\n'+
'2014-08-13T12:04:50.000Z,59.8605,-153.1025,99.2,2.6,ml,,,,1,ak,ak11355566,2014-08-14T22:04:51.034Z,"71km W of Anchor Point, Alaska",earthquake\n'+
'2014-08-13T10:46:40.000Z,68.4707,-142.779,37.2,2.9,ml,,,,1.66,ak,ak11355492,2014-08-14T22:06:03.322Z,"120km ENE of Arctic Village, Alaska",earthquake\n'+
'2014-08-13T10:39:41.000Z,37.4503,-118.6508,18.2,2.7,Md,34,93.6,0.00898315,0.03,nc,nc72273165,2014-08-13T20:16:07.602Z,"19km WNW of West Bishop, California",earthquake\n'+
'2014-08-13T10:33:17.840Z,32.5902,-109.0888,5,2.8,ml,,72,1.102,1.14,us,usb000s2cx,2014-08-13T18:35:52.454Z,"44km NW of Lordsburg, New Mexico",earthquake\n'+
'2014-08-13T10:21:07.570Z,-3.4075,145.529,27.42,4.9,mb,,113,6.174,0.6,us,usb000s2cl,2014-08-13T18:23:34.556Z,"177km ENE of Angoram, Papua New Guinea",earthquake\n'+
'2014-08-13T10:07:28.630Z,0.8924,-26.6215,10,5.4,mb,,56,15.045,0.88,us,usb000s2ck,2014-08-13T18:29:57.000Z,"Central Mid-Atlantic Ridge",earthquake\n'+
'2014-08-13T09:08:59.200Z,18.1846,-68.0764,107,3.1,Md,9,216,0.43568291,0.2,pr,pr14225003,2014-08-13T17:11:39.652Z,"55km SE of Punta Cana, Dominican Republic",earthquake\n'+
'2014-08-13T08:49:48.180Z,0.9649,146.1573,14.33,5.2,mb,,67,7.89,0.93,us,usb000s2c5,2014-08-13T16:52:22.154Z,"Federated States of Micronesia region",earthquake\n'+
'2014-08-13T08:40:06.000Z,59.3195,-153.5904,100,2.9,ml,,,,0.67,ak,ak11355360,2014-08-14T22:04:57.948Z,"89km ESE of Old Iliamna, Alaska",earthquake\n'+
'2014-08-13T07:22:07.790Z,-3.4596,145.5631,31.3,4.9,mb,,120,6.115,0.92,us,usb000s2bp,2014-08-13T15:24:38.894Z,"179km ENE of Angoram, Papua New Guinea",earthquake\n'+
'2014-08-13T06:48:11.930Z,16.3427,-98.167,10,5.8,mwp,,93,1.272,1.21,us,usb000s2bb,2014-08-13T18:23:18.000Z,"16km W of Santiago Pinotepa Nacional, Mexico",earthquake\n'+
'2014-08-13T06:28:17.080Z,20.2997,-155.4626,29.97,3.5,ml,,205,0.347,0.41,us,usb000s2bi,2014-08-14T05:24:44.677Z,"24km N of Honokaa, Hawaii",earthquake\n'+
'2014-08-13T05:54:36.680Z,-3.4366,145.461,21.64,5.4,mb,,45,6.164,0.85,us,usb000s2b1,2014-08-14T17:24:01.000Z,"169km ENE of Angoram, Papua New Guinea",earthquake\n'+
'2014-08-13T03:05:16.400Z,18.6263,-65.1845,73,4.6,Ml,19,201.6,0.32968171,0.31,pr,pr14225000,2014-08-18T01:57:56.095Z,"37km NNE of Culebra, Puerto Rico",earthquake\n'+
'2014-08-13T02:09:37.000Z,71.1404,-156.9578,10,3.5,ml,,,,1.03,ak,ak11355140,2014-08-14T21:56:36.834Z,"17km SSW of Barrow, Alaska",earthquake\n'+
'2014-08-13T00:45:30.630Z,-10.6776,164.998,19.03,4.6,mb,,123,5.123,0.57,us,usb000s29r,2014-08-13T08:48:01.961Z,"91km W of Lata, Solomon Islands",earthquake\n'+
'2014-08-13T00:40:40.370Z,42.3663,142.7468,35,4.5,mb,,100,0.465,0.89,us,usb000s29p,2014-08-13T08:43:15.624Z,"31km E of Shizunai, Japan",earthquake\n'+
'2014-08-13T00:30:47.840Z,13.9172,144.9467,101.15,5.4,mb,,21,0.334,0.91,us,usb000s29m,2014-08-15T11:10:22.102Z,"38km SW of Rota, Northern Mariana Islands",earthquake\n'+
'2014-08-12T23:50:57.000Z,52.8562,-169.5493,2.1,3.2,ml,,,,0.53,ak,ak11354884,2014-08-14T22:05:34.565Z,"46km W of Nikolski, Alaska",earthquake\n'+
'2014-08-12T22:23:58.200Z,19.2005,-64.1877,49,3.3,Md,11,313.2,0.87945066,0.43,pr,pr14224011,2014-08-13T06:26:47.861Z,"97km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-12T22:07:28.360Z,0.457,146.3403,14.8,4.5,mb,,103,7.428,1.04,us,usb000s299,2014-08-13T06:10:05.685Z,"293km NNW of Lorengau, Papua New Guinea",earthquake\n'+
'2014-08-12T22:06:23.600Z,36.5995,-121.2028,3.1,2.6,Md,72,32.4,0.02694946,0.08,nc,nc72272890,2014-08-13T22:42:08.714Z,"22km NNE of Soledad, California",earthquake\n'+
'2014-08-12T22:01:44.000Z,19.3241,-64.4397,58,2.8,Md,3,345.6,1.2872858,0.21,pr,pr14224012,2014-08-13T06:04:16.975Z,"102km N of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-12T21:56:06.300Z,19.224,-64.272,59,2.7,Md,4,334.8,0.86687425,0.17,pr,pr14224013,2014-08-13T05:58:44.949Z,"96km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-12T21:39:15.000Z,60.3313,-152.9749,100,2.5,ml,,,,3.7,ak,ak11354788,2014-08-14T22:04:47.599Z,"21km SW of Redoubt Volcano, Alaska",earthquake\n'+
'2014-08-12T21:33:41.600Z,19.1595,-64.3892,43,3.4,Md,7,316.8,0.76895788,0.07,pr,pr14224009,2014-08-13T05:37:24.198Z,"85km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-12T21:32:17.200Z,18.0576,-66.8421,10,2.6,Md,16,104.4,0.0880349,0.52,pr,pr14224007,2014-08-13T05:34:46.035Z,"2km NNE of Yauco, Puerto Rico",earthquake\n'+
'2014-08-12T21:10:10.300Z,19.259,-64.4292,23,3.8,Md,17,295.2,0.85609447,0.34,pr,pr14224006,2014-08-13T05:12:41.837Z,"95km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-12T20:58:50.160Z,35.9896667,-116.0725,6.37,3.16,ml,13,85,0.1874,0.1,ci,ci15537721,2014-08-14T17:41:04.000Z,"25km SSW of Pahrump, Nevada",earthquake\n'+
'2014-08-12T20:52:06.370Z,9.2319,93.5966,104.57,4.9,mb,,38,2.55,0.84,us,usb000s28b,2014-08-13T16:19:35.143Z,"143km NNE of Mohean, India",earthquake\n'+
'2014-08-12T20:34:14.230Z,31.663,142.3169,18.25,4.6,mb,,128,2.565,0.61,us,usb000s283,2014-08-13T15:56:27.000Z,"284km ESE of Hachijo-jima, Japan",earthquake\n'+
'2014-08-12T19:57:58.780Z,-0.0764,-78.3019,5.38,5.1,mb,,43,0.345,1.03,us,usb000s27f,2014-08-16T15:28:46.044Z,"23km SW of Cayambe, Ecuador",earthquake\n'+
'2014-08-12T19:04:55.000Z,59.9998,-152.1811,35.3,2.5,ml,,,,0.62,ak,ak11354693,2014-08-14T22:05:39.000Z,"31km NW of Anchor Point, Alaska",earthquake\n'+
'2014-08-12T19:04:38.600Z,19.0463,-64.472,61,2.8,Md,3,345.6,0.82734838,0.07,pr,pr14224010,2014-08-13T14:02:57.000Z,"71km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-12T18:29:39.100Z,18.988,-64.2014,53,2.6,Md,3,349.2,0.9522142,0.18,pr,pr14224008,2014-08-13T14:00:24.000Z,"76km NE of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-12T18:27:32.600Z,19.0291,-64.295,70,3.2,Md,5,320.4,0.68092299,0.07,pr,pr14224005,2014-08-13T13:57:25.000Z,"75km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-12T16:16:02.210Z,-16.9673,-172.846,10,5,mb,,69,11.425,0.61,us,usb000s262,2014-08-13T00:18:43.620Z,"148km SE of Hihifo, Tonga",earthquake\n'+
'2014-08-12T15:37:23.000Z,57.8165,-156.4766,100,3.3,ml,,,,1.23,ak,ak11354615,2014-08-12T23:39:58.474Z,"97km S of King Salmon, Alaska",earthquake\n'+
'2014-08-12T15:22:51.500Z,18.1166,-68.0479,91,2.8,Md,10,223.2,0.50485319,0.38,pr,pr14224004,2014-08-12T23:25:20.729Z,"63km SE of Punta Cana, Dominican Republic",earthquake\n'+
'2014-08-12T13:12:59.550Z,-17.747,-178.3571,537.66,4.6,mb,,78,3.421,0.65,us,usb000s25a,2014-08-12T21:15:32.093Z,"281km ESE of Lambasa, Fiji",earthquake\n'+
'2014-08-12T12:36:57.400Z,17.9281,-67.9483,106,3.1,Md,4,316.8,0.63600722,0.27,pr,pr14224003,2014-08-12T20:39:32.155Z,"81km W of Pole Ojea, Puerto Rico",earthquake\n'+
'2014-08-12T11:35:20.870Z,51.8059,178.6401,100.7,4.8,mb,,148,0.594,1.33,us,usb000s23a,2014-08-12T19:37:52.535Z,"18km SSE of Little Sitkin Island, Alaska",earthquake\n'+
'2014-08-12T11:06:51.640Z,-20.4569,-177.1511,266.62,4.5,mb,,91,6.94,1.04,us,usb000s23c,2014-08-12T19:09:50.878Z,"162km E of Ndoi Island, Fiji",earthquake\n'+
'2014-08-12T07:47:48.000Z,20.025,-155.291,39.8,3.6,mb,,,,0.69,us,usb000s268,2014-08-13T07:10:54.527Z,"20km ESE of Honokaa, Hawaii",earthquake\n'+
'2014-08-12T07:00:28.700Z,50.8008,-129.8864,23.43,4,mb,,180,1.774,1.02,us,usb000s22x,2014-08-12T15:02:58.332Z,"174km W of Port Hardy, Canada",earthquake\n'+
'2014-08-12T06:42:04.800Z,19.6352,-68.6307,93,3.4,Md,6,334.8,2.05983695,0.21,pr,pr14224000,2014-08-12T14:44:31.309Z,"84km NNE of Miches, Dominican Republic",earthquake\n'+
'2014-08-12T05:06:29.420Z,36.1433333,-118.0555,1.93,2.98,ml,38,72,0.1644,0.18,ci,ci15537393,2014-08-12T17:43:05.340Z,"51km S of Lone Pine, California",earthquake\n'+
'2014-08-12T03:37:43.000Z,51.7952,179.15,97.2,3,ml,,,,0.47,ak,ak11354441,2014-08-12T15:31:34.945Z,"35km WSW of Semisopochnoi Island, Alaska",earthquake\n'+
'2014-08-12T03:04:01.500Z,36.6438,-121.1008,11.7,2.9,Md,91,39.6,0.01796631,0.19,nc,nc72272360,2014-08-12T20:04:05.742Z,"30km SE of Ridgemark, California",earthquake\n'+
'2014-08-12T02:36:57.040Z,18.5852,-103.7226,35,4.2,mb,,208,2.584,0.91,us,usb000s229,2014-08-12T05:12:02.043Z,"16km SSW of Coahuayana, Mexico",earthquake\n'+
'2014-08-12T01:28:31.210Z,-3.6718,151.2848,389.77,5.2,mb,,57,1.017,0.79,us,usb000s226,2014-08-12T09:31:00.767Z,"114km WNW of Rabaul, Papua New Guinea",earthquake\n'+
'2014-08-12T00:47:21.650Z,34.2843,140.5022,83.91,4.8,mb,,65,1.299,0.87,us,usb000s220,2014-08-12T08:49:50.306Z,"95km S of Katsuura, Japan",earthquake\n'+
'2014-08-11T23:57:57.600Z,18.2154,-67.4001,14,2.5,Md,9,280.8,0.30093562,0.37,pr,pr14223012,2014-08-12T08:00:42.934Z,"20km SW of Stella, Puerto Rico",earthquake\n'+
'2014-08-11T22:32:57.900Z,36.9785,-121.6268,4,2.6,Md,75,36,0.04491576,0.08,nc,nc72272175,2014-08-14T06:21:52.241Z,"6km WSW of Gilroy, California",earthquake\n'+
'2014-08-11T22:27:16.320Z,32.6451667,-115.756,1.64,2.86,ml,34,115,0.02533,0.28,ci,ci15537265,2014-08-13T01:03:02.430Z,"17km WNW of Progreso, Mexico",earthquake\n'+
'2014-08-11T21:40:43.100Z,27.7298,143.0608,28.64,4.5,mb,,192,1.002,0.77,us,usb000s20b,2014-08-12T05:43:22.352Z,"110km NE of Chichi-shima, Japan",earthquake\n'+
'2014-08-11T21:00:15.000Z,-21.3243,-179.2739,597.45,4.7,mb,,35,4.362,0.73,us,usb000s1zu,2014-08-12T05:02:45.877Z,"95km SW of Ndoi Island, Fiji",earthquake\n'+
'2014-08-11T16:22:38.800Z,18.113,-64.9574,16,2.6,Md,7,115.2,0.23625692,0.27,pr,pr14223005,2014-08-12T00:25:20.340Z,"25km S of Charlotte Amalie, U.S. Virgin Islands",earthquake\n'+
'2014-08-11T15:14:27.630Z,0.5452,126.1758,60.24,4.4,mb,,77,1.211,0.83,us,usb000s1w3,2014-08-11T23:17:03.266Z,"135km WSW of Kota Ternate, Indonesia",earthquake\n'+
'2014-08-11T15:13:40.200Z,18.0902,-65.4738,135,3,Md,5,194.4,0.07456017,0.12,pr,pr14223009,2014-08-11T23:16:22.917Z,"0km SSW of Esperanza, Puerto Rico",earthquake\n'+
'2014-08-11T14:37:14.480Z,-56.4173,-26.9067,106.64,4.9,mb,,68,5.869,0.49,us,usb000s1xd,2014-08-11T22:39:56.640Z,"36km NNE of Visokoi Island, ",earthquake\n'+
'2014-08-11T13:35:41.220Z,14.4984,-92.9296,35,4.5,mb,,143,1.195,0.7,us,usb000s1vs,2014-08-11T21:38:14.079Z,"60km WSW of Puerto Madero, Mexico",earthquake\n'+
'2014-08-11T13:32:20.290Z,-41.3235,-84.9813,10,5,mb,,138,10.312,0.78,us,usb000s1vq,2014-08-13T22:20:05.000Z,"West Chile Rise",earthquake\n'+
'2014-08-11T13:13:10.290Z,36.2299,-97.5899,10.8,2.5,mb_lg,,57,0.129,0.32,us,usb000s1vm,2014-08-11T21:15:48.783Z,"27km WSW of Perry, Oklahoma",earthquake\n'+
'2014-08-11T12:56:52.400Z,18.4071,-64.6828,6,2.7,Md,8,180,0.06288207,0.07,pr,pr14223007,2014-08-11T20:59:31.636Z,"7km W of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-11T12:47:37.000Z,18.8467,-68.7321,130,3.2,Md,8,324,0.46892058,0.28,pr,pr14223006,2014-08-11T20:50:12.888Z,"22km NNW of Otra Banda, Dominican Republic",earthquake\n'+
'2014-08-11T12:44:59.900Z,17.6714,-82.4442,1,4.3,mb,,65,2.024,1.05,us,usb000s1vh,2014-08-11T20:48:42.256Z,"160km E of Great Swan Island, Honduras",earthquake\n'+
'2014-08-11T12:21:24.900Z,18.3897,-67.2624,23,2.7,Md,19,259.2,0.16259507,0.28,pr,pr14223003,2014-08-11T20:23:58.743Z,"5km NNW of Rincon, Puerto Rico",earthquake\n'+
'2014-08-11T12:10:44.320Z,15.5551,-94.6605,27.39,4.3,mb,,187,2.533,1.42,us,usb000s1vd,2014-08-11T20:13:23.857Z,"75km S of San Francisco del Mar, Mexico",earthquake\n'+
'2014-08-11T11:09:07.710Z,-17.7266,-172.8122,42.26,5.1,mb,,97,8.705,1.2,us,usb000s1va,2014-08-11T19:11:43.389Z,"160km NE of Neiafu, Tonga",earthquake\n'+
'2014-08-11T10:50:05.260Z,34.8095,98.9714,14.11,4.8,mb,,67,11.074,0.88,us,usb000s1v9,2014-08-11T18:52:35.940Z,"113km WSW of Nimai, China",earthquake\n'+
'2014-08-11T10:18:04.600Z,17.9505,-67.8196,80,2.7,Md,4,226.8,0.73751685,0.62,pr,pr14223002,2014-08-11T18:20:45.478Z,"67km W of Pole Ojea, Puerto Rico",earthquake\n'+
'2014-08-11T10:07:37.470Z,-29.7493,-176.0737,31.73,5.5,mb,,57,1.693,1.21,us,usb000s1tp,2014-08-11T18:10:07.582Z,"184km ESE of Raoul Island, New Zealand",earthquake\n'+
'2014-08-11T09:37:31.000Z,51.8043,178.5489,102.1,2.6,ml,,,,0.18,ak,ak11353650,2014-08-11T18:48:31.535Z,"16km S of Little Sitkin Island, Alaska",earthquake\n'+
'2014-08-11T08:46:55.000Z,64.56,-152.5021,10.4,3.9,ml,,,,0.95,ak,ak11353620,2014-08-11T16:50:12.884Z,"69km SSW of Tanana, Alaska",earthquake\n'+
'2014-08-11T08:15:27.000Z,58.7078,-152.5207,54.7,3.2,ml,,,,0.74,ak,ak11353608,2014-08-11T16:17:55.076Z,"102km N of Kodiak, Alaska",earthquake\n'+
'2014-08-11T07:39:37.000Z,59.639,-152.9068,100,2.5,ml,,,,0.38,ak,ak11353604,2014-08-11T15:42:07.146Z,"62km WSW of Anchor Point, Alaska",earthquake\n'+
'2014-08-11T06:39:01.000Z,52.4565,-169.0051,12.2,2.6,ml,,,,0.57,ak,ak11353588,2014-08-11T18:31:43.797Z,"54km S of Nikolski, Alaska",earthquake\n'+
'2014-08-11T06:00:25.000Z,52.2118,-173.0338,93.9,2.6,ml,,,,0.28,ak,ak11353582,2014-08-11T18:31:46.954Z,"79km E of Atka, Alaska",earthquake\n'+
'2014-08-11T05:53:32.980Z,48.7881,-28.1094,10,4.5,mb,,104,19.322,0.41,us,usb000s1t4,2014-08-11T13:56:06.784Z,"Northern Mid-Atlantic Ridge",earthquake\n'+
'2014-08-11T05:06:09.700Z,18.4743,-67.6993,6,2.6,Md,4,320.4,0.55695548,0.4,pr,pr14223001,2014-08-11T13:08:51.541Z,"49km WNW of Rincon, Puerto Rico",earthquake\n'+
'2014-08-11T04:49:06.960Z,-23.9045,-66.7457,193.21,4.9,mb,,53,2.37,1.01,us,usb000s1su,2014-08-13T16:30:30.000Z,"55km NW of San Antonio de los Cobres, Argentina",earthquake\n'+
'2014-08-11T04:24:27.000Z,51.8571,175.7688,26.9,3.7,ml,,,,0.34,ak,ak11353556,2014-08-11T18:10:11.725Z,"56km S of Buldir Island, Alaska",earthquake\n'+
'2014-08-11T04:22:30.680Z,-33.5856,-72.057,22.78,4.7,mb,,74,0.662,0.51,us,usb000s1sq,2014-08-12T01:09:00.000Z,"40km W of San Antonio, Chile",earthquake\n'+
'2014-08-11T04:18:50.610Z,36.8024,-98.0188,1,2.6,mb_lg,,84,0.298,0.7,us,usb000s1sp,2014-08-11T16:26:24.048Z,"25km W of Medford, Oklahoma",earthquake\n'+
'2014-08-11T02:54:18.040Z,35.9636,-96.7877,5,2.5,mb_lg,,46,0.217,0.51,us,usb000s2b2,2014-08-13T06:09:41.734Z,"3km SW of Cushing, Oklahoma",earthquake\n'+
'2014-08-11T02:41:47.800Z,15.1237,145.6042,121.83,4.8,mb,,69,1.214,0.56,us,usb000s1sd,2014-08-11T04:17:43.785Z,"15km SW of Northern Islands Municipality - Mayors Office, Northern Mariana Islands",earthquake\n'+
'2014-08-11T02:30:13.000Z,51.4258,-176.2434,49,3,ml,,,,1,ak,ak11353515,2014-08-11T10:33:48.702Z,"58km SSE of Adak, Alaska",earthquake\n'+
'2014-08-11T01:09:42.180Z,16.436,-98.2097,27.13,4.7,mb,,86,1.171,1.09,us,usb000s1s8,2014-08-11T03:38:43.976Z,"20km SSW of San Juan Cacahuatepec, Mexico",earthquake\n'+
'2014-08-11T00:38:32.900Z,35.7778,-97.485,3.03,2.6,mb_lg,,40,0.03,0.67,us,usb000s1s2,2014-08-11T05:47:00.000Z,"12km SSW of Guthrie, Oklahoma",earthquake\n'+
'2014-08-11T00:22:54.265Z,37.3343,-115.0776,8.4283,2.55,ml,17,82.49,0.075,0.169,nn,nn00455490,2014-08-11T08:25:23.633Z,"8km ESE of Alamo, Nevada",earthquake\n'+
'2014-08-10T23:38:08.700Z,19.2903,-68.0771,117,2.9,Md,4,295.2,0.8228568,0.31,pr,pr14222007,2014-08-11T07:40:42.905Z,"85km NNE of Punta Cana, Dominican Republic",earthquake\n'+
'2014-08-10T22:39:36.390Z,27.7455,142.9313,28.2,5,mb,,142,0.927,1.04,us,usb000s1rh,2014-08-11T06:42:11.118Z,"101km NE of Chichi-shima, Japan",earthquake\n'+
'2014-08-10T22:29:04.900Z,36.2878,-97.122,5,3.4,mb_lg,,47,0.354,0.25,us,usb000s1r9,2014-08-13T05:28:53.000Z,"14km E of Perry, Oklahoma",earthquake\n'+
'2014-08-10T18:46:17.860Z,27.6476,-111.6223,10,5,mb,,81,0.639,1.36,us,usb000s1qs,2014-08-12T22:12:47.000Z,"74km ENE of Santa Rosalia, Mexico",earthquake\n'+
'2014-08-10T18:38:21.000Z,59.9523,-153.2018,100,2.8,ml,,,,0.87,ak,ak11353282,2014-08-11T02:40:57.886Z,"64km SSW of Redoubt Volcano, Alaska",earthquake\n'+
'2014-08-10T18:27:41.640Z,51.5206,-172.8623,27.42,5,mb,,126,1.072,0.69,us,usb000s1qr,2014-08-11T02:30:24.155Z,"118km SE of Atka, Alaska",earthquake\n'+
'2014-08-10T17:40:39.400Z,18.5755,-66.7461,19,2.5,Md,5,288,0.22637545,0.43,pr,pr14222005,2014-08-11T01:43:33.791Z,"11km NNW of Arecibo, Puerto Rico",earthquake\n'+
'2014-08-10T16:10:57.000Z,56.9669,-155.6201,14.1,4,ml,,,,0.98,ak,ak11353157,2014-08-11T00:13:35.570Z,"117km WSW of Larsen Bay, Alaska",earthquake\n'+
'2014-08-10T15:49:59.090Z,-31.4665,-67.7743,91.71,4.1,mb,,129,0.781,1.22,us,usb000s1q4,2014-08-10T23:52:32.015Z,"52km ENE of Caucete, Argentina",earthquake\n'+
'2014-08-10T15:16:43.450Z,36.1075,69.1977,14.27,4.5,mb,,69,1.504,1.59,us,usb000s1q1,2014-08-10T23:19:24.799Z,"7km NE of Nahrin, Afghanistan",earthquake\n'+
'2014-08-10T14:54:27.330Z,36.8327,-97.8614,4.21,3.2,mb_lg,,80,0.166,0.31,us,usb000s1px,2014-08-11T05:03:58.686Z,"11km WNW of Medford, Oklahoma",earthquake\n'+
'2014-08-10T14:35:06.930Z,-18.4179,-178.1296,562.02,4.5,mb,,89,3.692,0.47,us,usb000s1pt,2014-08-10T22:38:32.061Z,"254km NNE of Ndoi Island, Fiji",earthquake\n'+
'2014-08-10T14:19:15.350Z,36.8382,-97.8437,3.54,2.7,mb_lg,,79,0.168,0.21,us,usb000s1pr,2014-08-10T16:53:53.000Z,"10km WNW of Medford, Oklahoma",earthquake\n'+
'2014-08-10T14:07:11.310Z,36.8201,-97.8647,2.36,2.5,mb_lg,,79,0.177,0.36,us,usb000s1pq,2014-08-10T22:09:50.937Z,"11km W of Medford, Oklahoma",earthquake\n'+
'2014-08-10T13:39:32.423Z,37.2963,-115.0675,5,2.96,ml,15,77.1,0.111,0.1997,nn,nn00455443,2014-08-10T21:42:10.964Z,"9km ESE of Alamo, Nevada",earthquake\n'+
'2014-08-10T13:33:23.280Z,5.853,127.1141,98.64,5.6,mwb,,51,1.946,0.77,us,usb000s1pi,2014-08-11T07:23:21.635Z,"117km ESE of Pondaguitan, Philippines",earthquake\n'+
'2014-08-10T12:12:25.060Z,0.829,-26.1336,10,5,mb,,97,14.615,0.79,us,usb000s1pb,2014-08-10T20:15:01.230Z,"Central Mid-Atlantic Ridge",earthquake\n'+
'2014-08-10T11:40:02.080Z,-6.2583,153.0597,10,4.8,mb,,40,2.239,0.99,us,usb000s1p8,2014-08-10T19:42:37.392Z,"198km S of Taron, Papua New Guinea",earthquake\n'+
'2014-08-10T11:08:47.200Z,18.7698,-64.7305,24,3.2,Md,5,273.6,0.36741095,0.23,pr,pr14222004,2014-08-10T19:11:20.157Z,"40km NNW of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-10T10:40:03.182Z,37.3273,-115.0823,9.0817,3.86,ml,19,80.77,0.083,0.1683,nn,nn00455424,2014-08-12T01:58:00.320Z,"8km ESE of Alamo, Nevada",earthquake\n'+
'2014-08-10T10:14:39.000Z,51.6855,178.3905,111.9,2.8,ml,,,,0.16,ak,ak11352910,2014-08-10T18:17:19.241Z,"30km SSW of Little Sitkin Island, Alaska",earthquake\n'+
'2014-08-10T10:02:33.900Z,36.2001,-97.414,4.468,2.5,ml,,,,0.56,us,usb000s1p4,2014-08-16T06:43:42.625Z,"15km SW of Perry, Oklahoma",earthquake\n'+
'2014-08-10T08:37:41.400Z,19.1121,-66.8227,23,2.9,Md,13,284.4,0.69619435,0.27,pr,pr14222002,2014-08-10T16:40:15.875Z,"69km N of Hatillo, Puerto Rico",earthquake\n'+
'2014-08-10T07:19:45.600Z,19.0081,-64.2925,22,3.2,Md,6,313.2,0.66385499,0.28,pr,pr14222003,2014-08-10T15:22:23.936Z,"73km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-10T07:03:42.000Z,51.5189,-175.7779,9.1,4.1,mb,,,,0.8,us,usb000s1nr,2014-08-10T15:06:18.078Z,"72km ESE of Adak, Alaska",earthquake\n'+
'2014-08-10T06:21:59.000Z,60.0647,-152.4133,89.8,2.5,ml,,,,0.69,ak,ak11352796,2014-08-10T14:24:34.935Z,"45km NW of Anchor Point, Alaska",earthquake\n'+
'2014-08-10T04:38:43.670Z,32.537,-109.1438,5,3,ml,,75,1.147,0.55,us,usb000s1ne,2014-08-11T03:56:59.335Z,"45km WNW of Lordsburg, New Mexico",earthquake\n'+
'2014-08-10T03:43:17.130Z,41.1626,142.1761,41,6,mb,,49,2.97,0.91,us,usb000s1nc,2014-08-12T22:11:51.000Z,"81km E of Mutsu, Japan",earthquake\n'+
'2014-08-10T03:14:26.000Z,-27.898,-71.097,33.8,4.3,mwr,,,,0.99,us,usb000s1na,2014-08-12T23:49:13.000Z,"81km NNW of Vallenar, Chile",earthquake\n'+
'2014-08-10T02:15:20.330Z,1.5214,124.464,251.96,4.7,mb,,79,2.996,1.14,us,usb000s1n5,2014-08-10T10:17:52.922Z,"42km W of Manado, Indonesia",earthquake\n'+
'2014-08-10T00:53:06.820Z,35.8272,-97.4147,3.22,2.5,mb_lg,,38,0.044,0.64,us,usb000s1my,2014-08-10T01:09:26.000Z,"5km S of Guthrie, Oklahoma",earthquake\n'+
'2014-08-10T00:08:20.000Z,18.9634,-68.209,80,3.4,Md,12,262.8,0.4761071,0.33,pr,pr14222000,2014-08-10T08:11:02.929Z,"46km NNE of Punta Cana, Dominican Republic",earthquake\n'+
'2014-08-09T23:02:25.490Z,26.2009,143.7025,10,4.6,mb,,63,1.624,0.74,us,usb000s1ms,2014-08-10T07:04:58.715Z,"177km ESE of Chichi-shima, Japan",earthquake\n'+
'2014-08-09T22:37:31.870Z,47.7017,146.9654,422.19,4.4,mb,,116,2.955,0.59,us,usb000s1mn,2014-08-10T06:40:04.143Z,"197km SW of Vostok, Russia",earthquake\n'+
'2014-08-09T22:23:14.000Z,60.398,-140.0119,2.6,2.8,ml,,,,0.79,ak,ak11352636,2014-08-10T06:25:56.352Z,"96km N of Yakutat, Alaska",earthquake\n'+
'2014-08-09T21:11:40.870Z,11.6715,95.9759,24.5,4.4,mb,,99,3.166,0.96,us,usb000s1me,2014-08-10T05:14:29.038Z,"297km WSW of Myeik, Burma",earthquake\n'+
'2014-08-09T21:06:02.000Z,67.1489,-146.1186,0,3.3,ml,,,,0.85,ak,ak11352624,2014-08-10T05:08:29.498Z,"74km NNW of Fort Yukon, Alaska",earthquake\n'+
'2014-08-09T20:25:43.760Z,-3.0827,139.6453,69.03,4.6,mb,,132,7.388,0.92,us,usb000s1m4,2014-08-10T04:28:14.693Z,"115km WSW of Abepura, Indonesia",earthquake\n'+
'2014-08-09T16:46:29.370Z,35.1743333,-118.6643333,11.9,3.17,ml,70,21,0.06004,0.16,ci,ci15536505,2014-08-11T17:53:35.537Z,"3km WNW of Bear Valley Springs, California",earthquake\n'+
'2014-08-09T16:29:19.200Z,17.7838,-63.8595,146,3.1,Md,10,316.8,0.86328099,0.18,pr,pr14221006,2014-08-09T17:44:54.194Z,"67km WNW of The Bottom, Bonaire, Saint Eustatius and Saba ",earthquake\n'+
'2014-08-09T15:47:40.000Z,60.3265,-140.2803,10,2.8,ml,,,,0.97,ak,ak11352488,2014-08-09T23:50:17.708Z,"92km NNW of Yakutat, Alaska",earthquake\n'+
'2014-08-09T15:28:54.000Z,52.17,-115.17,5,4.3,ml,,,,0.42,us,usb000s1kt,2014-08-09T23:31:30.763Z,"27km SW of Rocky Mountain House, Canada",earthquake\n'+
'2014-08-09T15:27:34.310Z,19.4073,-70.5888,26.86,4.5,mb,,68,0.132,1.07,us,usb000s1ku,2014-08-15T05:49:42.789Z,"3km SSE of Licey al Medio, Dominican Republic",earthquake\n'+
'2014-08-09T15:16:19.460Z,-10.1081,124.9257,45.82,4.6,mb,,129,0.737,1.32,us,usb000s1km,2014-08-09T23:18:55.178Z,"65km SSE of Neob, Indonesia",earthquake\n'+
'2014-08-09T14:21:20.000Z,60.2153,-151.127,63.7,2.5,ml,,,,0.69,ak,ak11352446,2014-08-09T22:23:46.679Z,"19km SSE of Cohoe, Alaska",earthquake\n'+
'2014-08-09T13:10:02.980Z,34.0773333,-118.7256667,6.89,2.74,ml,72,46,0.05082,0.25,ci,ci15536489,2014-08-11T17:03:38.070Z,"6km NW of Malibu Beach, California",earthquake\n'+
'2014-08-09T12:40:09.120Z,-23.1052,-70.8917,28.88,4,mwr,,185,0.511,1.11,us,usb000s1k9,2014-08-09T20:43:08.563Z,"78km NW of Antofagasta, Chile",earthquake\n'+
'2014-08-09T11:44:18.000Z,52.4868,-169.0356,17.1,2.9,ml,,,,0.7,ak,ak11352361,2014-08-09T19:46:44.706Z,"51km SSW of Nikolski, Alaska",earthquake\n'+
'2014-08-09T10:56:09.740Z,17.3233,-94.1735,159.03,4.2,mb,,175,2.208,0.79,us,usb000s1jw,2014-08-09T18:58:41.723Z,"68km S of Las Choapas, Mexico",earthquake\n'+
'2014-08-09T10:55:23.000Z,51.8537,178.4507,101.1,3,ml,,,,0.52,ak,ak11352352,2014-08-09T18:58:01.570Z,"11km SSW of Little Sitkin Island, Alaska",earthquake\n'+
'2014-08-09T10:54:44.640Z,8.3549,125.9784,35,4.6,mb,,118,1.336,0.69,us,usb000s1jy,2014-08-09T18:57:19.357Z,"4km SW of Rosario, Philippines",earthquake\n'+
'2014-08-09T10:48:21.500Z,19.127,-65.5879,52,3,Md,8,280.8,0.86507762,0.25,pr,pr14221005,2014-08-09T18:51:04.270Z,"81km NNE of Vieques, Puerto Rico",earthquake\n'+
'2014-08-09T10:45:23.420Z,15.3174,-93.0468,93.43,4.1,mb,,172,1.298,0.91,us,usb000s1jt,2014-08-09T18:48:07.076Z,"20km SW of Mapastepec, Mexico",earthquake\n'+
'2014-08-09T09:58:26.380Z,35.829,-97.4243,5,2.5,mb_lg,,38,0.04,0.34,us,usb000s1jp,2014-08-09T13:51:47.029Z,"5km S of Guthrie, Oklahoma",earthquake\n'+
'2014-08-09T09:25:58.500Z,19.1704,-65.5885,26,3,Md,12,284.4,0.90550181,0.2,pr,pr14221003,2014-08-09T17:28:40.395Z,"86km NNE of Vieques, Puerto Rico",earthquake\n'+
'2014-08-09T06:53:44.720Z,31.8248,104.2269,44.12,4.6,mb,,81,10.461,0.61,us,usb000s1je,2014-08-09T07:18:57.494Z,"26km NW of Yongchang, China",earthquake\n'+
'2014-08-09T06:45:50.920Z,36.5481,69.8362,235.87,4.3,mb,,57,0.827,0.78,us,usb000s1jb,2014-08-09T14:48:30.178Z,"3km SW of Farkhar, Afghanistan",earthquake\n'+
'2014-08-09T06:23:42.090Z,-5.183,131.8975,50.16,4.6,mb,,62,2.275,1.36,us,usb000s1j6,2014-08-09T14:26:16.602Z,"108km WNW of Tual, Indonesia",earthquake\n'+
'2014-08-09T05:49:39.420Z,38.8516,141.9619,79.17,4.4,mb,,155,3.288,0.48,us,usb000s1j5,2014-08-09T13:52:13.558Z,"32km SE of Ofunato, Japan",earthquake\n'+
'2014-08-09T04:27:26.000Z,52.3991,-170.1005,1.5,2.5,ml,,,,0.92,ak,ak11352296,2014-08-09T12:30:03.990Z,"48km ESE of Yunaska Island, Alaska",earthquake\n'+
'2014-08-09T04:04:48.270Z,-8.3869,159.8082,56.01,5,mb,,98,1.054,0.71,us,usb000s1ix,2014-08-09T04:40:50.871Z,"35km SE of Buala, Solomon Islands",earthquake\n'+
'2014-08-09T03:53:06.900Z,18.2138,-64.751,19,2.5,Md,4,147.6,0.23895187,0.23,pr,pr14221001,2014-08-09T11:55:39.988Z,"23km SE of Charlotte Amalie, U.S. Virgin Islands",earthquake\n'+
'2014-08-09T02:59:54.510Z,51.8736,178.4348,121.62,4.2,mb,,151,0.733,1.36,us,usb000s1im,2014-08-09T11:02:33.511Z,"9km SSW of Little Sitkin Island, Alaska",earthquake\n'+
'2014-08-09T02:59:14.000Z,63.5609,-147.7793,0,2.6,ml,,,,0.6,ak,ak11352270,2014-08-09T11:01:54.144Z,"61km ENE of Cantwell, Alaska",earthquake\n'+
'2014-08-09T02:28:43.880Z,27.8011,142.9527,10,5.2,mb,,87,0.979,0.87,us,usb000s1ij,2014-08-09T10:31:21.435Z,"107km NE of Chichi-shima, Japan",earthquake\n'+
'2014-08-09T00:34:46.700Z,36.9597,-121.5852,7.6,2.9,Md,83,25.2,0,0.12,nc,nc72270580,2014-08-11T22:55:03.668Z,"5km SSW of Gilroy, California",earthquake\n'+
'2014-08-08T20:58:40.400Z,35.8079,-97.4233,5.07,3.1,mb_lg,,33,0.028,0.62,us,usb000s1hp,2014-08-09T20:27:47.000Z,"7km S of Guthrie, Oklahoma",earthquake\n'+
'2014-08-08T20:54:33.500Z,19.413,-155.2775,1.7,2.5,Ml,,54,0,0.27,hv,hv60749451,2014-08-13T21:21:23.205Z,"4km WSW of Volcano, Hawaii",earthquake\n'+
'2014-08-08T20:45:38.150Z,35.8087,-97.4341,4.02,2.9,mb_lg,,32,0.02,0.67,us,usb000s1hm,2014-08-09T18:43:52.000Z,"7km S of Guthrie, Oklahoma",earthquake\n'+
'2014-08-08T20:21:56.970Z,35.8072,-97.4326,3.48,3.4,mb_lg,,27,0.021,0.89,us,usb000s1hi,2014-08-13T09:02:18.887Z,"7km S of Guthrie, Oklahoma",earthquake\n'+
'2014-08-08T20:17:37.600Z,19.4208,-155.28,2.6,2.8,Ml,,86.4,0.00898315,0.34,hv,hv60749431,2014-08-13T21:21:01.834Z,"4km WSW of Volcano, Hawaii",earthquake\n'+
'2014-08-08T20:12:15.000Z,19.052,-64.5035,43,3.1,Md,3,345.6,1.04563899,0.03,pr,pr14220002,2014-08-09T17:28:44.000Z,"71km N of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-08T18:07:48.240Z,35.8403,-97.4369,5,3.2,mb_lg,,33,0.046,0.38,us,usb000s1gp,2014-08-09T17:10:33.186Z,"4km SSW of Guthrie, Oklahoma",earthquake\n'+
'2014-08-08T17:02:53.000Z,60.2449,-153.4497,165.9,2.6,ml,,,,0.84,ak,ak11352167,2014-08-09T16:46:16.000Z,"47km SW of Redoubt Volcano, Alaska",earthquake\n'+
'2014-08-08T16:57:01.150Z,2.4375,99.0513,152.44,4.6,mb,,90,0.284,0.81,us,usb000s1gb,2014-08-09T00:59:37.622Z,"28km SSE of Parapat, Indonesia",earthquake\n'+
'2014-08-08T16:48:23.800Z,35.9405,-120.4922,11,3.4,Mw,97,36,0.01796631,0.07,nc,nc72270370,2014-08-09T09:02:46.006Z,"25km SSW of Coalinga, California",earthquake\n'+
'2014-08-08T16:44:42.410Z,-14.7944,166.6727,66.15,5.3,mb,,80,8.459,1.01,us,usb000s1g6,2014-08-09T00:47:12.630Z,"49km NW of Port-Olry, Vanuatu",earthquake\n'+
'2014-08-08T14:03:48.330Z,5.0027,127.4874,128.23,5.2,mb,,78,2.796,0.93,us,usb000s1fa,2014-08-08T15:11:14.523Z,"208km SE of Pondaguitan, Philippines",earthquake\n'+
'2014-08-08T11:42:15.000Z,51.6558,178.3018,105.3,2.6,ml,,,,0.26,ak,ak11352040,2014-08-08T19:44:47.376Z,"35km SSW of Little Sitkin Island, Alaska",earthquake\n'+
'2014-08-08T10:33:11.030Z,51.2957,-178.0331,53.48,4.4,mb,,188,1.026,0.97,us,usb000s1dg,2014-08-08T18:35:43.026Z,"65km S of Tanaga Volcano, Alaska",earthquake\n'+
'2014-08-08T09:28:22.000Z,60.0039,-152.1654,59.5,2.8,ml,,,,0.85,ak,ak11351959,2014-08-08T17:30:52.427Z,"31km NW of Anchor Point, Alaska",earthquake\n'+
'2014-08-08T09:24:41.160Z,-5.9253,130.7584,10,4.6,mb,,76,3.335,1.27,us,usb000s1d6,2014-08-08T17:27:20.425Z,"222km W of Tual, Indonesia",earthquake\n'+
'2014-08-08T09:24:02.400Z,37.3627,-118.5398,9.1,2.9,Ml,38,68.4,0.01796631,0.06,nc,nc72270215,2014-08-19T17:50:54.401Z,"7km W of West Bishop, California",earthquake\n'+
'2014-08-08T08:20:49.490Z,34.7715,24.8385,34.19,4.7,mb,,78,0.517,1.05,us,usb000s1d3,2014-08-08T14:01:53.175Z,"31km S of Moirai, Greece",earthquake\n'+
'2014-08-08T07:41:27.630Z,-37.8677,176.1549,289.87,4.3,mb,,44,0.849,1.42,us,usb000s1cz,2014-08-08T15:43:56.436Z,"20km S of Tauranga, New Zealand",earthquake\n'+
'2014-08-08T07:32:03.990Z,-0.3326,123.0086,75.65,4.5,mb,,70,0.743,1.35,us,usb000s1cw,2014-08-08T15:34:42.841Z,"72km NNE of Luwuk, Indonesia",earthquake\n'+
'2014-08-08T06:51:36.130Z,-24.3372,-179.9906,529.9,4.6,mb,,116,6.809,1.22,us,usb000s1cp,2014-08-08T14:54:09.551Z,"South of the Fiji Islands",earthquake\n'+
'2014-08-08T05:47:08.240Z,40.1796,143.4213,34.34,4.5,mb,,142,1.844,0.86,us,usb000s1ck,2014-08-08T06:45:37.778Z,"139km ENE of Miyako, Japan",earthquake\n'+
'2014-08-08T04:10:14.500Z,-33.7636,-72.2011,10,5.1,mb,,77,0.876,0.83,us,usb000s1ci,2014-08-11T04:42:50.009Z,"56km WSW of San Antonio, Chile",earthquake\n'+
'2014-08-08T01:06:05.000Z,61.4135,-147.5172,10.8,2.9,ml,,,,0.66,ak,ak11351811,2014-08-08T09:08:39.162Z,"70km WNW of Valdez, Alaska",earthquake\n'+
'2014-08-08T00:22:03.900Z,18.5725,-66.7368,16,2.7,Md,8,212.4,0.2173923,0.25,pr,pr14220000,2014-08-08T08:24:38.402Z,"11km NNW of Arecibo, Puerto Rico",earthquake\n'+
'2014-08-08T00:09:04.290Z,37.6416,72.0365,140.06,4.3,mb,,74,1.272,1.15,us,usb000s1bz,2014-08-08T08:11:49.373Z,"43km ENE of Shughnon, Tajikistan",earthquake\n'+
'2014-08-08T00:06:45.070Z,0.6795,-25.9019,10,4.9,mb,,93,14.34,1.14,us,usb000s1c0,2014-08-08T08:09:24.517Z,"Central Mid-Atlantic Ridge",earthquake\n'+
'2014-08-07T23:25:32.000Z,59.9447,-153.1358,100,3,ml,,,,0.81,ak,ak11351669,2014-08-08T07:28:33.748Z,"64km SSW of Redoubt Volcano, Alaska",earthquake\n'+
'2014-08-07T21:45:53.770Z,33.4835,-116.47,14.79,3.25,ml,107,22,0.05435,0.19,ci,ci15535825,2014-08-08T15:15:28.585Z,"20km ESE of Anza, California",earthquake\n'+
'2014-08-07T21:45:46.320Z,33.4866667,-116.4646667,14.3,2.53,ml,46,33,0.04901,0.17,ci,ci15535817,2014-08-08T05:48:28.529Z,"20km ESE of Anza, California",earthquake\n'+
'2014-08-07T19:55:44.400Z,19.2455,-64.7639,32,3,Md,6,291.6,0.83543321,0.46,pr,pr14219004,2014-08-08T03:58:12.637Z,"93km N of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-07T19:50:29.000Z,52.1673,-176.5097,232,3,ml,,,,0.46,ak,ak11351330,2014-08-08T03:52:56.157Z,"33km NNE of Adak, Alaska",earthquake\n'+
'2014-08-07T18:56:57.010Z,-20.3477,-177.8148,504.29,4.9,mb,,98,4.688,1,us,usb000s14y,2014-08-08T02:59:39.725Z,"98km ENE of Ndoi Island, Fiji",earthquake\n'+
'2014-08-07T18:41:49.200Z,18.7712,-64.2494,83,2.7,Md,5,331.2,0.49587004,1.09,pr,pr14219005,2014-08-08T02:45:01.298Z,"55km NE of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-07T16:39:22.470Z,36.8153,-97.9858,3.41,3.2,mb_lg,,37,0.31,0.45,us,usb000s13k,2014-08-09T16:32:21.019Z,"22km W of Medford, Oklahoma",earthquake\n'+
'2014-08-07T16:36:20.990Z,38.893,-115.2778,0,2.87,ml,5,80.6,0.595,0.6213,nn,nn00455179,2014-08-09T16:04:04.000Z,"22km NE of Currant, Nevada",earthquake\n'+
'2014-08-07T16:24:04.200Z,20.0788,-155.7935,16.8,4.5,Ml,,122.4,0.04491576,0.14,hv,hv60748981,2014-08-13T20:21:15.999Z,"14km WNW of Waimea, Hawaii",earthquake\n'+
'2014-08-07T16:03:44.600Z,35.5784,-97.2835,7.36,2.9,mb_lg,,38,0.017,0.84,us,usb000s1cj,2014-08-09T14:04:45.000Z,"1km NNE of Jones, Oklahoma",earthquake\n'+
'2014-08-07T15:53:29.730Z,2.9819,125.3068,172.72,4.8,mb,,89,3.009,1.25,us,usb000s137,2014-08-07T23:55:56.727Z,"169km NNE of Laikit, Laikit II (Dimembe), Indonesia",earthquake\n'+
'2014-08-07T11:17:01.500Z,17.9799,-64.1501,49,3.2,Md,4,338.4,0.84890794,0.25,pr,pr14219003,2014-08-07T19:19:32.489Z,"64km ENE of Christiansted, U.S. Virgin Islands",earthquake\n'+
'2014-08-07T10:51:04.610Z,48.5246,154.7899,56.04,4.6,mb,,172,4.945,0.88,us,usb000s129,2014-08-07T18:53:35.935Z,"258km SSW of Severo-Kurilsk, Russia",earthquake\n'+
'2014-08-07T10:45:10.090Z,15.6688,-94.54,41.73,4.9,mb,,157,2.39,1.49,us,usb000s124,2014-08-07T15:19:11.036Z,"63km S of San Francisco del Mar, Mexico",earthquake\n'+
'2014-08-07T08:50:03.920Z,9.6582,-84.2359,21.51,4.4,mb,,216,0.363,1.3,us,usb000s11n,2014-08-11T02:39:59.170Z,"9km S of Tejar, Costa Rica",earthquake\n'+
'2014-08-07T07:25:16.000Z,59.5999,-153.0737,105.4,2.7,ml,,,,0.76,ak,ak11350933,2014-08-07T18:15:57.615Z,"72km WSW of Anchor Point, Alaska",earthquake\n'+
'2014-08-07T07:13:33.750Z,-17.9661,-178.5269,545.93,4.6,mb,,78,3.265,1.03,us,usb000s114,2014-08-07T15:16:10.274Z,"280km SE of Lambasa, Fiji",earthquake\n'+
'2014-08-07T06:36:31.500Z,19.7117,-68.9355,20,2.9,Md,6,316.8,1.30076053,0.2,pr,pr14219002,2014-08-07T14:39:06.228Z,"70km NE of Santa Barbara de Samana, Dominican Republic",earthquake\n'+
'2014-08-07T05:24:54.320Z,4.56,126.4982,76.31,5.1,mb,,69,2.655,1.23,us,usb000s10t,2014-08-07T13:27:26.982Z,"147km SE of Sarangani, Philippines",earthquake\n'+
'2014-08-07T04:16:20.130Z,33.0905,-116.0641667,11.35,2.81,ml,81,29,0.1891,0.26,ci,ci15535473,2014-08-07T19:22:08.960Z,"25km SSW of Salton City, California",earthquake\n'+
'2014-08-07T03:26:12.060Z,-5.5134,-11.4385,10,4.8,mb,,77,3.767,0.87,us,usb000s10d,2014-08-07T11:28:40.820Z,"Ascension Island region",earthquake\n'+
'2014-08-07T02:24:05.600Z,18.9927,-64.7314,8,2.7,Md,5,306,0.58300662,0.25,pr,pr14219001,2014-08-07T10:26:33.936Z,"64km N of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-07T01:37:05.590Z,46.876,-27.3545,10,4.6,mb,,91,8.177,0.96,us,usb000s105,2014-08-07T09:39:40.017Z,"Northern Mid-Atlantic Ridge",earthquake\n'+
'2014-08-07T01:29:05.400Z,19.5618,-67.2738,43,2.9,Md,3,338.4,1.09863959,0.11,pr,pr14219000,2014-08-07T09:31:35.259Z,"119km N of San Antonio, Puerto Rico",earthquake\n'+
'2014-08-07T01:07:26.000Z,52.1389,-175.3585,118.3,2.6,ml,,,,0.11,ak,ak11350810,2014-08-07T09:10:03.839Z,"79km W of Atka, Alaska",earthquake\n'+
'2014-08-06T23:11:07.700Z,37.1277,-121.5283,7.5,2.6,Md,89,61.2,0.01796631,0.05,nc,nc72269440,2014-08-08T02:39:08.897Z,"8km ENE of San Martin, California",earthquake\n'+
'2014-08-06T21:49:16.130Z,34.3293333,-116.9973333,11.64,2.77,ml,101,26,0.07247,0.14,ci,ci15535393,2014-08-07T18:09:16.760Z,"12km SSW of Lucerne Valley, California",earthquake\n'+
'2014-08-06T20:35:33.010Z,-6.2189,150.8464,54.18,5.1,mb,,51,2.403,0.79,us,usb000s0y3,2014-08-07T04:38:06.354Z,"107km SE of Kimbe, Papua New Guinea",earthquake\n'+
'2014-08-06T18:45:39.630Z,47.0149,-27.2473,11.16,4.9,mb,,86,15.688,0.85,us,usb000s0wf,2014-08-07T02:48:12.103Z,"Northern Mid-Atlantic Ridge",earthquake\n'+
'2014-08-06T16:06:45.050Z,36.57,-97.6025,5,3,mb_lg,,63,0.313,0.56,us,usb000s10u,2014-08-07T06:02:36.000Z,"28km WSW of Tonkawa, Oklahoma",earthquake\n'+
'2014-08-06T15:21:50.570Z,35.8513,-97.3936,5.57,3.1,mb_lg,,67,0.073,0.25,us,usb000s0td,2014-08-07T10:30:44.776Z,"4km SE of Guthrie, Oklahoma",earthquake\n'+
'2014-08-06T15:16:19.540Z,-7.2306,128.0279,39.93,4.9,mb,,25,3.327,0.74,us,usb000s0t9,2014-08-06T23:18:53.940Z,"Kepulauan Barat Daya, Indonesia",earthquake\n'+
'2014-08-06T15:12:04.020Z,38.8807,142.2074,55.53,4.5,mb,,200,3.213,0.66,us,usb000s0ta,2014-08-06T23:14:58.730Z,"47km ESE of Ofunato, Japan",earthquake\n'+
'2014-08-06T13:05:40.420Z,-7.2528,128.0923,26.68,4.8,mb,,93,4.527,0.77,us,usb000s0sn,2014-08-06T21:08:19.722Z,"Kepulauan Barat Daya, Indonesia",earthquake\n'+
'2014-08-06T11:45:22.960Z,-7.2725,128.0457,10,6.1,mwp,,17,3.301,1.29,us,usb000s0r6,2014-08-06T18:54:08.000Z,"Kepulauan Barat Daya, Indonesia",earthquake\n'+
'2014-08-06T10:56:03.550Z,36.6822,-98.3807,4.6,2.6,mb_lg,,67,0.365,0.49,us,usb000s0qx,2014-08-06T20:57:18.777Z,"8km SSW of Cherokee, Oklahoma",earthquake\n'+
'2014-08-06T10:54:04.000Z,53.1979,-166.7485,45.3,2.6,ml,,,,0.46,ak,ak11350388,2014-08-06T18:56:45.404Z,"76km S of Unalaska, Alaska",earthquake\n'+
'2014-08-06T09:26:49.100Z,18.7227,-64.5621,24,2.5,Md,4,302.4,0.30902046,0.14,pr,pr14218003,2014-08-06T17:29:25.977Z,"34km N of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-06T09:12:08.090Z,-19.2426,-177.6054,579.11,4.3,mb,,43,4.381,0.72,us,usb000s0qd,2014-08-06T17:14:36.768Z,"193km NE of Ndoi Island, Fiji",earthquake\n'+
'2014-08-06T08:47:50.000Z,67.678,-162.7705,15.3,2.7,ml,,,,0.89,ak,ak11350349,2014-08-06T16:50:22.636Z,"14km NE of Noatak, Alaska",earthquake\n'+
'2014-08-06T06:45:45.840Z,5.5648,126.8598,68.12,4.6,mb,,141,1.963,1.15,us,usb000s0pu,2014-08-06T14:48:24.347Z,"116km SE of Pondaguitan, Philippines",earthquake\n'+
'2014-08-06T06:39:59.000Z,61.981,-151.0927,63.5,3,ml,,,,0.64,ak,ak11350310,2014-08-06T14:42:36.307Z,"61km WNW of Willow, Alaska",earthquake\n'+
'2014-08-06T04:20:28.470Z,-7.5463,128.1913,177.85,4.7,mb,,57,3.109,0.72,us,usb000s0nr,2014-08-06T12:23:06.026Z,"Kepulauan Barat Daya, Indonesia",earthquake\n'+
'2014-08-06T04:19:01.170Z,-29.8883,-179.2198,360.56,4.9,mb,,111,1.294,1.22,us,usb000s0nq,2014-08-06T12:21:34.946Z,"145km WSW of Raoul Island, New Zealand",earthquake\n'+
'2014-08-06T03:46:06.650Z,22.1013,121.458,82.06,4.8,mb,,105,0.794,1.2,us,usb000s0nl,2014-08-06T11:48:46.005Z,"74km E of Hengchun, Taiwan",earthquake\n'+
'2014-08-06T03:31:21.270Z,41.8822,-119.6417,0.4642,2.77,ml,4,77.05,0.493,0.0229,nn,nn00454948,2014-08-06T16:46:41.678Z,"64km SE of Lakeview, Oregon",earthquake\n'+
'2014-08-06T03:28:30.000Z,9.9722,-103.6317,10,4.7,mb,,164,9.006,0.65,us,usb000s0nh,2014-08-06T11:31:00.364Z,"Northern East Pacific Rise",earthquake\n'+
'2014-08-06T02:13:09.200Z,34.1093333,-117.3153333,17.39,2.74,ml,127,16,0.0165,0.18,ci,ci15535089,2014-08-06T20:22:13.950Z,"2km W of San Bernardino, California",earthquake\n'+
'2014-08-06T01:34:10.610Z,1.5845,126.617,51.28,4.5,mb,,113,1.101,0.39,us,usb000s0n9,2014-08-06T09:36:48.719Z,"121km NW of Kota Ternate, Indonesia",earthquake\n'+
'2014-08-06T01:23:10.000Z,53.5139,-165.3703,47.3,2.7,ml,,,,0.55,ak,ak11350107,2014-08-06T09:25:36.136Z,"74km SSE of Akutan, Alaska",earthquake\n'+
'2014-08-06T01:07:13.400Z,19.9533,-155.0975,39.6,3,Ml,,266.4,0.23356197,0.15,hv,hv60748166,2014-08-06T09:09:46.051Z,"13km N of Pepeekeo, Hawaii",earthquake\n'+
'2014-08-06T00:22:21.710Z,36.5616,71.1745,237.47,4.2,mb,,75,0.739,0.33,us,usb000s0n0,2014-08-06T08:24:55.011Z,"34km WSW of Ashkasham, Afghanistan",earthquake\n'+
'2014-08-06T00:09:38.050Z,54.1738,159.7911,124.57,4.2,mb,,137,1.338,0.84,us,usb000s0mz,2014-08-06T08:12:16.284Z,"144km NE of Yelizovo, Russia",earthquake\n'+
'2014-08-05T22:44:42.980Z,41.8822,-119.6346,0,2.86,ml,5,122,0.498,0.0534,nn,nn00454898,2014-08-06T15:47:57.227Z,"69km SE of Lakeview, Oregon",earthquake\n'+
'2014-08-05T21:01:08.010Z,36.2854,-97.4975,5,2.7,mb_lg,,48,0.221,0.65,us,usb000s0pz,2014-08-06T14:07:10.970Z,"18km W of Perry, Oklahoma",earthquake\n'+
'2014-08-05T19:46:07.900Z,18.0345,-68.0179,8,3,Md,10,230.4,0.58839651,0.4,pr,pr14217004,2014-08-06T14:03:29.000Z,"73km SE of Punta Cana, Dominican Republic",earthquake\n'+
'2014-08-05T18:37:39.520Z,-6.8193,129.6524,152.12,4.4,mb,,85,2,1.25,us,usb000s0ih,2014-08-06T16:31:10.549Z,"222km NW of Saumlaki, Indonesia",earthquake\n'+
'2014-08-05T18:30:00.780Z,36.022,-97.091,5,2.8,ml,,,,0.79,us,usb000s0px,2014-08-06T16:12:00.000Z,"7km NW of Perkins, Oklahoma",earthquake\n'+
'2014-08-05T18:21:00.000Z,51.6846,178.3816,98.1,2.6,ml,,,,1.23,us,usb000s0na,2014-08-06T15:54:49.058Z,"30km SSW of Little Sitkin Island, Alaska",earthquake\n'+
'2014-08-05T18:15:31.590Z,46.485,-81.193,5.4,3.8,mb_lg,,,,0.83,us,usb000s0hr,2014-08-06T17:05:00.376Z,"15km W of Greater Sudbury, Canada",earthquake\n'+
'2014-08-05T17:54:53.520Z,46.4765,-81.1848,12.05,3.3,mb_lg,,,,0.64,us,usb000s0t4,2014-08-06T15:19:46.000Z,"15km W of Greater Sudbury, Canada",earthquake\n'+
'2014-08-05T17:41:57.400Z,28.0387,128.0504,28.63,4.4,mb,,123,1.214,0.83,us,usb000s0ha,2014-08-06T14:54:06.000Z,"145km WSW of Naze, Japan",earthquake\n'+
'2014-08-05T17:24:58.100Z,47.4082,-122.0317,19.4,2.6,Ml,,50.4,0.09881468,0.23,uw,uw60835742,2014-08-06T15:32:41.082Z,"2km NNE of Maple Valley, Washington",earthquake\n'+
'2014-08-05T17:09:56.890Z,36.818,-97.989,4.2,3.3,ml,,,,0,us,usb000s0eu,2014-08-06T14:27:40.000Z,"22km W of Medford, Oklahoma",earthquake\n'+
'2014-08-05T16:17:24.420Z,34.9704,135.5555,19.31,4.7,mb,,65,1.265,0.41,us,usb000s0el,2014-08-05T21:55:23.671Z,"4km SW of Kameoka, Japan",earthquake\n'+
'2014-08-05T15:24:42.100Z,18.4503,-66.1165,110,2.9,Md,6,183.6,0.39256378,0.17,pr,pr14217005,2014-08-05T23:27:21.015Z,"1km N of Catano, Puerto Rico",earthquake\n'+
'2014-08-05T15:13:20.300Z,19.4025,-155.6232,3.4,2.8,Md,,50.4,0,0.17,hv,hv60747921,2014-08-14T15:01:18.000Z,"26km ESE of Honaunau-Napoopoo, Hawaii",earthquake\n'+
'2014-08-05T14:04:12.000Z,35.8363,-97.4444,5.43,2.7,mb_lg,,68,0.04,0.21,us,usb000s0d6,2014-08-05T20:09:01.554Z,"5km SSW of Guthrie, Oklahoma",earthquake\n'+
'2014-08-05T13:12:09.000Z,59.7885,-152.4538,60.3,2.5,ml,,,,0.82,ak,ak11349385,2014-08-05T21:14:44.808Z,"34km W of Anchor Point, Alaska",earthquake\n'+
'2014-08-05T13:06:19.030Z,51.2564,-179.1795,38.14,4.9,mb,,128,0.961,0.61,us,usb000s0bq,2014-08-06T01:21:52.146Z,"4km W of Amatignak Island, Alaska",earthquake\n'+
'2014-08-05T12:40:01.220Z,38.2556667,-122.3231667,8.21,3.03,mw,170,23,0.03891,0.15,nc,nc72272361,2014-08-11T21:17:43.936Z,"5km SW of Napa, California",earthquake\n'+
'2014-08-05T12:39:18.000Z,61.9598,-149.1551,3.7,2.5,ml,,,,0.75,ak,ak11349353,2014-08-05T20:41:49.118Z,"24km N of Fishhook, Alaska",earthquake\n'+
'2014-08-05T10:22:33.920Z,-26.9717,26.7094,4.12,5.4,mwb,,28,2.082,0.95,us,usb000s0b3,2014-08-09T18:16:31.626Z,"3km ENE of Orkney, South Africa",earthquake\n'+
'2014-08-05T10:07:59.500Z,19.6433,-156.2905,26.3,3.2,Ml,,270,0.26051143,0.18,hv,hv60747871,2014-08-12T17:30:00.459Z,"30km W of Kailua-Kona, Hawaii",earthquake\n'+
'2014-08-05T08:30:44.945Z,41.8864,-119.6405,0.4463,3.2,ml,5,122.93,0.494,0.2078,nn,nn00454740,2014-08-05T16:35:36.901Z,"76km SE of Lakeview, Oregon",earthquake\n'+
'2014-08-05T07:35:04.900Z,17.8243,-67.053,24,2.6,Md,13,262.8,0.14462876,0.33,pr,pr14217001,2014-08-05T15:39:01.218Z,"16km S of La Parguera, Puerto Rico",earthquake\n'+
'2014-08-05T04:11:07.020Z,11.3928,-85.5881,189.6,4.8,mb,,96,0.7,0.86,us,usb000s08z,2014-08-05T12:13:38.837Z,"19km S of Altagracia, Nicaragua",earthquake\n'+
'2014-08-05T03:29:27.480Z,36.2906,-97.5577,5,2.5,mb_lg,,60,0.193,0.6,us,usb000s0pj,2014-08-06T06:20:01.000Z,"24km W of Perry, Oklahoma",earthquake\n'+
'2014-08-05T03:21:04.283Z,41.8683,-119.6367,0,2.67,ml,6,123.97,0.497,0.1477,nn,nn00454602,2014-08-05T15:49:44.629Z,"69km ESE of Lakeview, Oregon",earthquake\n'+
'2014-08-05T01:08:25.650Z,36.1246667,-120.6901667,6.7,2.51,md,98,58,0.09435,0.07,nc,nc72272021,2014-08-07T22:43:07.294Z,"29km W of Coalinga, California",earthquake\n'+
'2014-08-04T21:55:32.150Z,-50.8221,-6.4061,10,4.8,mb,,84,20.985,0.56,us,usb000s0ie,2014-08-10T01:24:31.000Z,"Southern Mid-Atlantic Ridge",earthquake\n'+
'2014-08-04T20:16:10.110Z,35.8673,-97.3724,5,3,mb_lg,,66,0.097,0.46,us,usb000s05y,2014-08-06T06:54:08.850Z,"4km ESE of Guthrie, Oklahoma",earthquake\n'+
'2014-08-04T18:23:01.490Z,35.6123,-97.39,8.67,3.3,mb_lg,,51,0.041,0.53,us,usb000s04g,2014-08-11T03:24:54.146Z,"9km ESE of Edmond, Oklahoma",earthquake\n'+
'2014-08-04T18:21:55.000Z,56.8603,-150.7802,34,3,ml,,,,0.9,ak,ak11348989,2014-08-05T02:24:22.216Z,"142km SE of Kodiak, Alaska",earthquake\n'+
'2014-08-04T17:04:12.900Z,18.7257,-64.1488,23,2.6,Md,3,345.6,0.53898917,0.21,pr,pr14216005,2014-08-05T01:06:49.751Z,"60km NE of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-04T16:50:06.570Z,-30.4107,-177.2131,10,5.1,mb,,123,1.317,0.63,us,usb000rzva,2014-08-05T00:52:47.846Z,"143km SSE of Raoul Island, New Zealand",earthquake\n'+
'2014-08-04T16:14:43.900Z,19.0445,-66.417,41,2.5,Md,5,288,0.76356799,0.18,pr,pr14216004,2014-08-05T00:17:13.684Z,"64km N of Brenas, Puerto Rico",earthquake\n'+
'2014-08-04T15:30:42.730Z,35.8291,-97.4247,6.37,3.5,mb_lg,,68,0.04,0.28,us,usb000rzuh,2014-08-05T13:45:21.942Z,"5km S of Guthrie, Oklahoma",earthquake\n'+
'2014-08-04T13:35:37.000Z,51.3107,-174.8344,24.5,3.9,ml,,,,0.4,ak,ak11348798,2014-08-04T21:38:12.707Z,"107km SSW of Atka, Alaska",earthquake\n'+
'2014-08-04T13:23:26.000Z,51.9137,-173.7121,17.7,2.6,ml,,,,0.71,ak,ak11348793,2014-08-04T21:28:00.015Z,"45km SE of Atka, Alaska",earthquake\n'+
'2014-08-04T13:16:05.000Z,55.9126,-161.1174,188.9,2.5,ml,,,,0.94,ak,ak11348792,2014-08-04T21:28:05.069Z,"75km NNW of Sand Point, Alaska",earthquake\n'+
'2014-08-04T12:56:01.000Z,51.9346,-173.5794,27.3,3.9,ml,,,,0.53,ak,ak11348777,2014-08-04T20:59:23.377Z,"51km SE of Atka, Alaska",earthquake\n'+
'2014-08-04T12:50:27.160Z,37.2309,-97.9854,4.85,2.5,mb_lg,,101,0.012,0.33,us,usb000s0pg,2014-08-06T06:03:00.000Z,"7km SSE of Harper, Kansas",earthquake\n'+
'2014-08-04T12:42:14.590Z,35.8266,-97.4343,5,2.8,mb_lg,,68,0.034,0.33,us,usb000rztk,2014-08-06T19:15:51.317Z,"5km S of Guthrie, Oklahoma",earthquake\n'+
'2014-08-04T12:09:47.010Z,0.1422,98.6371,46.9,4.9,mb,,109,1.567,0.83,us,usb000rzth,2014-08-04T20:12:17.036Z,"145km NNW of Sikabaluan, Indonesia",earthquake\n'+
'2014-08-04T11:49:46.660Z,35.498,-97.234,7,2.6,ml,,,,0.49,us,usb000s0pc,2014-08-06T19:12:27.392Z,"3km E of Choctaw, Oklahoma",earthquake\n'+
'2014-08-04T10:36:09.830Z,5.3986,94.6532,56.96,5.3,mb,,31,2.29,0.88,us,usb000rzt4,2014-08-04T18:38:45.076Z,"76km WSW of Banda Aceh, Indonesia",earthquake\n'+
'2014-08-04T09:40:20.180Z,0.9171,146.2294,10,5.3,mb,,58,7.804,1.62,us,usb000rzt0,2014-08-04T17:42:59.892Z,"Federated States of Micronesia region",earthquake\n'+
'2014-08-04T09:11:50.160Z,16.1053,95.9856,10,2.9,ml,,307,3.667,1.28,us,usb000s0pa,2014-08-06T15:30:44.278Z,"37km ESE of Pyapon, Burma",earthquake\n'+
'2014-08-04T08:04:27.500Z,41.8115,-125.9043,21.9,2.9,Md,27,288,1.50916968,0.23,nc,nc72271596,2014-08-14T06:28:06.920Z,"137km W of Brookings, Oregon",earthquake\n'+
'2014-08-04T06:09:50.100Z,41.872,-125.884,22.2,3,Md,23,288,1.50018652,0.28,nc,nc72271566,2014-08-14T06:13:05.302Z,"134km W of Brookings, Oregon",earthquake\n'+
'2014-08-04T05:58:21.410Z,39.3058,142.2072,35,4.7,mb,,213,2.801,1.51,us,usb000rzrd,2014-08-04T14:01:01.900Z,"27km ESE of Otsuchi, Japan",earthquake\n'+
'2014-08-04T05:54:01.270Z,38.7725,15.7908,178.91,4.1,mb,,69,0.517,1.06,us,usb000rzr8,2014-08-04T13:56:39.543Z,"14km NW of Tropea, Italy",earthquake\n'+
'2014-08-04T05:43:35.420Z,-7.0662,130.0154,128.79,4.5,mb,,64,4.681,0.76,us,usb000rzr6,2014-08-04T13:46:03.127Z,"173km NW of Saumlaki, Indonesia",earthquake\n'+
'2014-08-04T04:25:30.210Z,16.0009,-94.6891,46.52,4.9,mb,,132,2.468,0.82,us,usb000rzr2,2014-08-05T01:34:23.372Z,"26km S of San Francisco del Mar, Mexico",earthquake\n'+
'2014-08-04T03:35:56.680Z,35.1832,-113.6529,5,3,ml,,44,0.208,0.75,us,usb000rzqx,2014-08-04T22:46:49.470Z,"35km ESE of New Kingman-Butler, Arizona",earthquake\n'+
'2014-08-04T03:20:09.410Z,-6.91,-81.5495,19.43,5.4,mb,,76,6.856,0.85,us,usb000rzqv,2014-08-04T11:22:44.927Z,"169km SSW of Sechura, Peru",earthquake\n'+
'2014-08-04T03:10:08.000Z,59.2313,-154.8167,100,2.7,ml,,,,2.31,ak,ak11348474,2014-08-04T11:12:36.930Z,"58km S of Old Iliamna, Alaska",earthquake\n'+
'2014-08-04T02:38:26.330Z,36.6729,-97.8341,3.78,2.7,mb_lg,,50,0.206,0.76,us,usb000rzqj,2014-08-04T10:41:03.586Z,"17km SSW of Medford, Oklahoma",earthquake\n'+
'2014-08-04T02:34:10.700Z,-16.5961,178.2592,23.78,4.9,mb,,127,1.159,0.57,us,usb000rzqm,2014-08-04T10:36:42.477Z,"121km W of Lambasa, Fiji",earthquake\n'+
'2014-08-04T00:21:54.490Z,17.4988,-100.537,51.56,4.8,mb,,157,1.881,1.23,us,usb000rzqb,2014-08-04T15:38:14.414Z,"31km NNE of Tecpan de Galeana, Mexico",earthquake\n'+
'2014-08-03T22:36:15.790Z,10.2994,126.0976,60.33,4.4,mb,,176,3.249,1.02,us,usb000rzq6,2014-08-04T06:38:51.006Z,"31km NNE of Santa Monica, Philippines",earthquake\n'+
'2014-08-03T22:22:48.430Z,40.7066,29.3337,26.29,4.2,mb,,43,1.438,0.85,us,usb000rzq2,2014-08-03T23:04:59.645Z,"5km N of Ciftlikkoy, Turkey",earthquake\n'+
'2014-08-03T22:09:41.020Z,-3.9701,-80.8433,45.29,4.5,mb,,109,8.895,0.63,us,usb000rzq1,2014-08-04T06:12:17.986Z,"16km NW of Papayal, Peru",earthquake\n'+
'2014-08-03T22:04:13.400Z,-3.9385,-80.8658,50.69,4.5,mb,,109,8.933,0.67,us,usb000rzpz,2014-08-04T06:06:45.436Z,"20km NW of Papayal, Peru",earthquake\n'+
'2014-08-03T21:57:54.300Z,19.2817,-155.0558,44.9,2.6,Ml,,212.4,0.07186522,0.17,hv,hv60746831,2014-08-04T06:00:22.936Z,"25km SE of Volcano, Hawaii",earthquake\n'+
'2014-08-03T21:45:07.910Z,2.3834,98.9493,141.21,4.4,mb,,90,0.309,0.87,us,usb000rzpt,2014-08-04T05:47:49.158Z,"30km S of Parapat, Indonesia",earthquake\n'+
'2014-08-03T21:13:44.600Z,35.8377,-119.8165,11.1,3,Ml,140,28.8,0.21559567,0.29,nc,nc72271341,2014-08-14T03:28:07.138Z,"23km SE of Kettleman City, California",earthquake\n'+
'2014-08-03T21:02:42.320Z,-3.9081,-80.7997,16.47,5.3,mwp,,108,8.931,0.92,us,usb000rzpi,2014-08-03T21:26:41.331Z,"19km NNW of Papayal, Peru",earthquake\n'+
'2014-08-03T20:21:53.000Z,55.6079,-157.0863,17,4.4,ml,,,,1.84,ak,ak11348081,2014-08-18T17:11:53.395Z,"95km WSW of Chirikof Island, Alaska",earthquake\n'+
'2014-08-03T19:30:31.480Z,27.1165,103.6163,10,4.7,mb,,102,9.315,1.34,us,usb000rzp2,2014-08-04T03:33:05.080Z,"12km SE of Wenping, China",earthquake\n'+
'2014-08-03T19:12:42.000Z,50.6513,-172.1579,50,2.6,ml,,,,1.6,ak,ak11347905,2014-08-04T07:09:13.674Z,"213km SSW of Amukta Island, Alaska",earthquake\n'+
'2014-08-03T17:11:06.480Z,35.6488,-96.9446,5,3,mb_lg,,50,0.129,0.5,us,usb000rznt,2014-08-03T21:41:07.285Z,"8km SW of Chandler, Oklahoma",earthquake\n'+
'2014-08-03T17:00:33.480Z,50.1582,-28.8974,10,4.7,mb,,66,14.289,0.85,us,usb000rzns,2014-08-04T01:03:07.239Z,"Northern Mid-Atlantic Ridge",earthquake\n'+
'2014-08-03T14:28:34.790Z,27.1378,103.4547,30.87,4.7,mb,,86,2.106,0.83,us,usb000rznh,2014-08-03T22:31:16.681Z,"9km SW of Wenping, China",earthquake\n'+
'2014-08-03T13:59:32.110Z,55.4963,162.7525,52.82,4.6,mb,,149,3.806,0.67,us,usb000rznc,2014-08-03T22:02:37.870Z,"83km SSE of Ust-Kamchatsk Staryy, Russia",earthquake\n'+
'2014-08-03T13:47:10.700Z,27.1333,103.5361,10,4.7,mb,,103,2.125,1.23,us,usb000rznf,2014-08-03T21:49:53.184Z,"6km S of Wenping, China",earthquake\n'+
'2014-08-03T13:43:29.820Z,5.5238,126.6971,61.61,4.8,mb,,80,1.895,0.7,us,usb000rznb,2014-08-03T21:46:04.295Z,"109km SSE of Pondaguitan, Philippines",earthquake\n'+
'2014-08-03T13:32:56.000Z,56.8391,-148.6366,20.5,2.5,ml,,,,0.3,ak,ak11347562,2014-08-03T21:35:31.036Z,"250km ESE of Kodiak, Alaska",earthquake\n'+
'2014-08-03T12:27:45.000Z,66.6271,-146.3328,36.9,2.5,ml,,,,0.85,ak,ak11347487,2014-08-03T20:30:11.611Z,"47km W of Fort Yukon, Alaska",earthquake\n'+
'2014-08-03T12:21:26.600Z,35.8178,-97.4241,3.775,3,ml,,,,0.62,us,usb000rzn4,2014-08-16T06:38:07.000Z,"6km S of Guthrie, Oklahoma",earthquake\n'+
'2014-08-03T12:00:22.690Z,35.4706667,-118.8056667,12.61,2.62,ml,49,46,0.09915,0.19,ci,ci15534081,2014-08-05T00:45:03.040Z,"20km ENE of Oildale, California",earthquake\n'+
'2014-08-03T11:45:32.000Z,58.0522,-156.1238,100,2.8,ml,,,,1.04,ak,ak11347409,2014-08-03T19:47:59.278Z,"77km SSE of King Salmon, Alaska",earthquake\n'+
'2014-08-03T11:07:22.610Z,27.1496,103.7353,10,4.5,mb,,87,2.207,0.98,us,usb000rzmw,2014-08-03T19:09:59.639Z,"18km S of Zhaotong, China",earthquake\n'+
'2014-08-03T11:01:51.000Z,65.8485,-169.5844,12.3,3.3,ml,,,,3.72,ak,ak11347395,2014-08-03T19:04:20.360Z,"33km WNW of Little Diomede Island, Alaska",earthquake\n'+
'2014-08-03T10:44:43.550Z,-10.8375,161.9059,54.05,5.1,mb,,83,2.377,1.11,us,usb000rzmt,2014-08-03T11:05:39.561Z,"42km S of Kirakira, Solomon Islands",earthquake\n'+
'2014-08-03T10:09:37.840Z,-44.38,169.63,40,4.2,mb,,,,1.06,us,usb000rzms,2014-08-08T06:47:35.000Z,"52km NE of Wanaka, New Zealand",earthquake\n'+
'2014-08-03T09:53:07.400Z,55.0771,165.4542,39.73,4.9,mb,,69,4.972,0.87,us,usb000rzmr,2014-08-03T17:55:39.190Z,"36km WSW of Nikolskoye, Russia",earthquake\n'+
'2014-08-03T09:42:02.390Z,55.0703,165.4809,38.59,4.8,mb,,69,4.984,0.82,us,usb000rzmq,2014-08-15T13:14:08.916Z,"35km WSW of Nikolskoye, Russia",earthquake\n'+
'2014-08-03T09:38:06.610Z,3.5783,-77.6776,61.11,5.2,mb,,129,3.576,1.15,us,usb000rzmp,2014-08-03T23:33:14.626Z,"75km W of Buenaventura, Colombia",earthquake\n'+
'2014-08-03T08:30:13.540Z,27.2446,103.427,10,6.1,mwb,,24,5.909,1.18,us,usb000rzmg,2014-08-06T08:29:17.481Z,"11km WNW of Wenping, China",earthquake\n'+
'2014-08-03T08:03:58.650Z,34.5411667,-116.2701667,5.5,2.82,ml,57,30,0.172,0.11,ci,ci15534049,2014-08-05T00:28:48.880Z,"45km N of Joshua Tree, California",earthquake\n'+
'2014-08-03T07:30:02.270Z,-55.4854,-28.4435,28.69,5,mb,,67,4.798,0.62,us,usb000rzm6,2014-08-03T15:32:31.727Z,"155km NNW of Visokoi Island, ",earthquake\n'+
'2014-08-03T06:55:27.400Z,18.8472,-64.422,9,2.6,Md,5,316.8,0.46622563,0.09,pr,pr14215004,2014-08-03T14:57:59.885Z,"51km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-03T05:57:31.510Z,29.3067,85.5879,15,5.2,mb,,53,6.699,0.94,us,usb000rzm0,2014-08-03T06:17:17.000Z,"35km E of Saga, China",earthquake\n'+
'2014-08-03T05:15:55.230Z,36.3091,71.14,99.47,4.3,mb,,79,0.932,0.79,us,usb000rzlu,2014-08-03T13:18:29.664Z,"45km NE of `Alaqahdari-ye Kiran wa Munjan, Afghanistan",earthquake\n'+
'2014-08-03T04:57:57.390Z,35.8021,-97.513,6.69,3.1,mb_lg,,71,0.047,0.54,us,usb000rzll,2014-08-03T21:09:42.544Z,"11km SW of Guthrie, Oklahoma",earthquake\n'+
'2014-08-03T04:48:50.520Z,-3.4063,146.3713,37.32,5,mb,,48,5.832,1.09,us,usb000rzli,2014-08-03T12:51:20.028Z,"182km SSW of Lorengau, Papua New Guinea",earthquake\n'+
'2014-08-03T04:41:15.900Z,17.9599,-68.9805,106,3.4,Md,7,313.2,0.79141577,0.23,pr,pr14215005,2014-08-03T12:43:50.280Z,"51km S of La Romana, Dominican Republic",earthquake\n'+
'2014-08-03T04:14:19.220Z,-55.3667,-28.3077,12.46,4.6,mb,,183,4.853,0.59,us,usb000rzmu,2014-08-03T23:41:46.944Z,"163km NNW of Visokoi Island, ",earthquake\n'+
'2014-08-03T04:06:04.240Z,28.0311,128.1045,10,5.7,mwp,,79,1.199,0.8,us,usb000rzlc,2014-08-07T19:31:49.000Z,"140km WSW of Naze, Japan",earthquake\n'+
'2014-08-03T04:03:10.300Z,18.2112,-66.0105,139,2.7,Md,14,100.8,0.11947593,0.23,pr,pr14215003,2014-08-03T12:05:53.904Z,"4km ESE of Caguas, Puerto Rico",earthquake\n'+
'2014-08-03T03:57:00.290Z,-1.6925,-77.8443,154.9,4.8,mb,,139,7.386,0.82,us,usb000rzl8,2014-08-10T04:22:07.371Z,"9km E of Palora, Ecuador",earthquake\n'+
'2014-08-03T03:16:00.500Z,18.5214,-63.9118,61,2.7,Md,8,324,0.67643141,0.11,pr,pr14215002,2014-08-03T11:18:38.406Z,"75km E of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-03T02:50:52.100Z,18.3068,-66.2695,63,2.6,Md,10,144,0.17696811,0.4,pr,pr14215001,2014-08-03T10:53:32.705Z,"2km WNW of Naranjito, Puerto Rico",earthquake\n'+
'2014-08-03T02:18:18.300Z,18.6051,-67.5244,4,2.8,Md,11,190.8,0.41502166,0.46,pr,pr14215000,2014-08-03T10:20:50.772Z,"41km NW of Rincon, Puerto Rico",earthquake\n'+
'2014-08-03T01:51:21.470Z,32.4036667,-115.507,19.59,2.72,ml,26,119,0.1716,0.42,ci,ci15533961,2014-08-04T23:49:09.140Z,"20km SSE of Progreso, Mexico",earthquake\n'+
'2014-08-03T01:12:10.480Z,33.678,-116.7511667,17.7,2.81,ml,106,14,0.04866,0.18,ci,ci15533953,2014-08-04T22:14:00.037Z,"7km SSW of Idyllwild-Pine Cove, California",earthquake\n'+
'2014-08-03T01:03:20.000Z,51.7512,178.3753,109.3,3.1,ml,,,,0.45,ak,ak11346942,2014-08-03T09:05:51.780Z,"23km SSW of Little Sitkin Island, Alaska",earthquake\n'+
'2014-08-03T00:39:16.590Z,0.7504,146.3746,14.33,4.9,mb,,75,10.118,1.23,us,usb000rzkn,2014-08-03T08:41:50.514Z,"Federated States of Micronesia region",earthquake\n'+
'2014-08-03T00:26:42.940Z,1.0332,146.2562,13.96,6.1,mb,,39,7.859,0.76,us,usb000rzkl,2014-08-03T08:29:14.436Z,"Federated States of Micronesia region",earthquake\n'+
'2014-08-03T00:23:57.120Z,13.7276,-89.0302,185.36,4.5,mb,,128,0.199,0.83,us,usb000rzkj,2014-08-03T08:26:35.306Z,"7km SSW of Tecoluca, El Salvador",earthquake\n'+
'2014-08-03T00:22:03.210Z,0.8438,146.1445,10.55,6.9,mww,,12,7.822,0.75,us,usb000rzki,2014-08-11T02:53:33.241Z,"Federated States of Micronesia region",earthquake\n'+
'2014-08-02T23:34:42.000Z,52.6492,-169.2528,4,2.5,ml,,,,0.38,ak,ak11346865,2014-08-03T07:44:39.602Z,"41km SW of Nikolski, Alaska",earthquake\n'+
'2014-08-02T23:05:32.600Z,19.3131,-67.799,53,3.2,Md,9,262.8,0.96658725,0.34,pr,pr14214003,2014-08-03T07:08:08.646Z,"103km NE of Punta Cana, Dominican Republic",earthquake\n'+
'2014-08-02T22:47:56.980Z,40.591,-124.0991667,17.99,2.51,md,26,135,0.1735,0.09,nc,nc72270831,2014-08-08T21:23:15.772Z,"4km E of Fortuna, California",earthquake\n'+
'2014-08-02T22:36:45.020Z,51.8774,178.3725,112.6,4.1,mb,,159,0.765,1.26,us,usb000rzjr,2014-08-03T06:39:27.425Z,"12km SW of Little Sitkin Island, Alaska",earthquake\n'+
'2014-08-02T22:34:37.700Z,36.209,-97.0087,5,2.8,mb_lg,,37,0.246,0.53,us,usb000rzlp,2014-08-05T03:43:15.834Z,"11km NNE of Stillwater, Oklahoma",earthquake\n'+
'2014-08-02T22:04:10.900Z,41.8302,-125.902,23.6,3,Ml,32,273.6,1.50916968,0.27,nc,nc72270811,2014-08-08T23:40:11.447Z,"136km W of Brookings, Oregon",earthquake\n'+
'2014-08-02T21:43:02.160Z,-8.9809,105.2855,10,4.7,mb,,87,1.533,0.85,us,usb000rzjc,2014-08-03T05:45:49.735Z,"165km NNW of Flying Fish Cove, Christmas Island",earthquake\n'+
'2014-08-02T21:32:41.100Z,41.8108,-125.8832,24.9,2.7,Ml,15,288,1.50018652,0.11,nc,nc72270801,2014-08-13T07:26:13.619Z,"135km W of Brookings, Oregon",earthquake\n'+
'2014-08-02T20:03:32.000Z,62.0214,-151.1055,61.3,2.9,ml,,,,0.84,ak,ak11346568,2014-08-03T04:06:02.596Z,"61km WSW of Talkeetna, Alaska",earthquake\n'+
'2014-08-02T18:52:52.000Z,67.6538,-162.0646,21.2,3,ml,,,,1.28,ak,ak11346498,2014-08-05T14:34:13.000Z,"39km ENE of Noatak, Alaska",earthquake\n'+
'2014-08-02T18:38:40.200Z,47.5906,-70.1818,14.81,3,mb_lg,,,,1.29,us,usb000rzl2,2014-08-06T15:43:26.772Z,"7km SSW of La Malbaie, Canada",earthquake\n'+
'2014-08-02T18:09:53.000Z,60.0751,-153.2982,100,2.9,ml,,,,0.96,ak,ak11346476,2014-08-05T14:10:34.000Z,"55km SW of Redoubt Volcano, Alaska",earthquake\n'+
'2014-08-02T17:35:06.420Z,28.1528,128.0524,52.1,4.9,mb,,80,5.52,0.98,us,usb000rzht,2014-08-03T01:37:46.133Z,"142km W of Naze, Japan",earthquake\n'+
'2014-08-02T17:30:30.420Z,53.4524,160.4132,62.44,4.4,mb,,139,1.665,0.83,us,usb000rzhr,2014-08-03T01:33:11.265Z,"126km ENE of Petropavlovsk-Kamchatskiy, Russia",earthquake\n'+
'2014-08-02T16:37:43.400Z,52.1205,-173.2371,46.19,3.7,mb,,188,0.597,1.21,us,usb000rzhk,2014-08-03T00:40:17.708Z,"66km E of Atka, Alaska",earthquake\n'+
'2014-08-02T16:18:59.280Z,11.8741,93.6214,125.8,4.8,mb,,60,0.886,1.02,us,usb000rzhf,2014-08-03T00:21:52.281Z,"97km ENE of Port Blair, India",earthquake\n'+
'2014-08-02T15:23:03.700Z,18.8752,-64.392,24,2.9,Md,6,313.2,0.50305656,0.15,pr,pr14214002,2014-08-02T23:25:46.047Z,"56km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-08-02T14:18:31.520Z,27.8471,128.1716,55.81,4.8,mb,,129,1.011,1.19,us,usb000rzgy,2014-08-02T22:21:12.176Z,"140km N of Nago, Japan",earthquake\n'+
'2014-08-02T14:02:19.370Z,-55.4072,-28.356,10,5.6,mb,,67,4.833,0.72,us,usb000rzgn,2014-08-03T17:46:57.000Z,"160km NNW of Visokoi Island, ",earthquake\n'+
'2014-08-02T12:08:13.400Z,19.4761,-67.6447,29,2.9,Md,3,298.8,1.18397954,0.18,pr,pr14214001,2014-08-02T20:10:54.537Z,"123km NNW of San Antonio, Puerto Rico",earthquake\n'+
'2014-08-02T11:43:13.690Z,52.7516,-169.6057,12.29,4.3,mb,,169,0.505,1.29,us,usb000rzgc,2014-08-02T19:45:52.773Z,"53km WSW of Nikolski, Alaska",earthquake\n'+
'2014-08-02T11:03:25.890Z,-10.9348,162.2781,35,4.9,mb,,55,2.733,1.03,us,usb000rzg6,2014-08-02T19:05:57.980Z,"65km SE of Kirakira, Solomon Islands",earthquake\n'+
'2014-08-02T10:33:26.610Z,-9.1794,67.2254,10,5,mb,,68,21.153,0.74,us,usb000rzg0,2014-08-03T17:44:41.000Z,"Mid-Indian Ridge",earthquake\n'+
'2014-08-02T10:24:05.890Z,35.8327,-97.4384,5,2.6,mb_lg,,68,0.038,0.37,us,usb000rzfz,2014-08-03T05:16:32.071Z,"5km SSW of Guthrie, Oklahoma",earthquake\n'+
'2014-08-02T09:52:08.270Z,-5.6498,153.0688,33.12,4.8,mb,,118,1.706,1.07,us,usb000rzfx,2014-08-02T17:54:36.254Z,"130km S of Taron, Papua New Guinea",earthquake\n'+
'2014-08-02T09:42:54.000Z,59.161,-153.0582,92.1,3,ml,,,,0.74,ak,ak11346181,2014-08-02T17:45:32.076Z,"97km SW of Anchor Point, Alaska",earthquake\n'+
'2014-08-02T09:38:04.050Z,40.5893333,-124.0956667,18.21,2.74,md,30,133,0.1708,0.1,nc,nc72270486,2014-08-07T22:24:05.855Z,"4km N of Hydesville, California",earthquake\n'+
'2014-08-02T09:05:22.000Z,51.0766,-178.7217,24.6,3.3,ml,,,,0.65,ak,ak11346171,2014-08-02T18:21:02.998Z,"34km SE of Amatignak Island, Alaska",earthquake\n'+
'2014-08-02T08:04:26.000Z,59.968,-154.2536,100,2.7,ml,,,,3.47,ak,ak11346150,2014-08-02T16:06:52.348Z,"44km ENE of Old Iliamna, Alaska",earthquake\n'+
'2014-08-02T07:08:50.270Z,32.5523,-109.0624,5,2.9,ml,,85,1.079,0.71,us,usb000rzfc,2014-08-02T14:46:18.271Z,"40km NW of Lordsburg, New Mexico",earthquake\n'+
'2014-08-02T06:31:01.000Z,65.5369,-164.9128,25.5,3.3,ml,,,,1.65,ak,ak11346122,2014-08-02T18:13:28.313Z,"96km SE of Shishmaref, Alaska",earthquake\n'+
'2014-08-02T05:59:13.300Z,19.2923,-155.3867,2.5,2.8,Ml,,97.2,0.04491576,0.33,hv,hv60745761,2014-08-02T14:01:53.174Z,"13km NE of Pahala, Hawaii",earthquake\n'+
'2014-08-02T05:23:08.950Z,14.5423,-92.5327,47.38,4,mb,,154,0.81,1.36,us,usb000rzf6,2014-08-02T06:09:24.302Z,"23km SSW of Puerto Madero, Mexico",earthquake\n'+
'2014-08-02T04:58:38.230Z,37.9768333,-122.0331667,16.64,2.55,md,95,84,0.008582,0.13,nc,nc72270351,2014-08-08T00:05:40.581Z,"0km SW of Concord, California",earthquake\n'+
'2014-08-02T03:37:19.000Z,52.3633,-175.4299,97,4,ml,,,,1.2,ak,ak11346080,2014-08-02T17:54:30.555Z,"85km WNW of Atka, Alaska",earthquake\n'+
'2014-08-02T01:57:19.000Z,61.2583,-152.7951,2.7,2.5,ml,,,,0.8,ak,ak11346053,2014-08-02T10:00:01.982Z,"86km N of Redoubt Volcano, Alaska",earthquake\n'+
'2014-08-02T01:44:30.800Z,36.7773,-98.0573,5,3,mb_lg,,60,0.278,0.83,us,usb000rze7,2014-08-02T11:25:17.447Z,"26km E of Cherokee, Oklahoma",earthquake\n'+
'2014-08-02T01:11:59.070Z,-57.9788,-25.916,56.17,4.9,mb,,55,16.695,0.68,us,usb000rze2,2014-08-02T09:14:26.129Z,"122km NNE of Bristol Island, South Sandwich Islands",earthquake\n'+
'2014-08-02T00:28:10.710Z,33.8286,72.4308,35,4.1,mb,,181,0.72,1.98,us,usb000rzds,2014-08-02T08:30:49.057Z,"7km N of Sanjwal, Pakistan",earthquake\n'+
'2014-08-02T00:02:52.000Z,52.4949,178.5982,28.8,2.8,ml,,,,0.39,ak,ak11346030,2014-08-02T16:48:49.605Z,"61km N of Little Sitkin Island, Alaska",earthquake\n'+
'2014-08-01T23:26:45.000Z,19.4869,-67.1668,122,2.7,Md,3,356.4,1.01509627,0.33,pr,pr14213006,2014-08-02T07:29:20.246Z,"110km N of Isabela, Puerto Rico",earthquake\n'+
'2014-08-01T23:24:28.870Z,36.4495,71.1282,102.57,4.2,mb,,105,0.807,0.84,us,usb000rzdm,2014-08-02T07:26:58.738Z,"44km SW of Ashkasham, Afghanistan",earthquake\n'+
'2014-08-01T22:40:55.900Z,48.6773,-123.4938,46.7,2.6,Ml,,115.2,0.03593261,0.07,uw,uw60832657,2014-08-02T15:28:22.698Z,"19km SE of Duncan, Canada",earthquake\n'+
'2014-08-01T22:06:48.000Z,52.8114,-169.5312,5.3,2.5,ml,,,,1.38,us,usb000rzdj,2014-08-02T06:09:30.646Z,"46km WSW of Nikolski, Alaska",earthquake\n'+
'2014-08-01T21:25:23.730Z,-3.1849,101.1511,60.32,4.9,mb,,100,2.146,0.94,us,usb000rzc8,2014-08-02T05:28:08.324Z,"124km SSW of Sungaipenuh, Indonesia",earthquake\n'+
'2014-08-01T19:44:23.860Z,71.9484,0.1962,8.62,4.6,mb,,73,7.483,0.86,us,usb000rzai,2014-08-02T15:29:50.404Z,"Norwegian Sea",earthquake\n'+
'2014-08-01T19:36:49.220Z,36.7144,71.2035,224.78,4.2,mb,,107,0.649,1.06,us,usb000rza5,2014-08-02T14:21:30.934Z,"29km W of Ashkasham, Afghanistan",earthquake\n'+
'2014-08-01T14:48:22.370Z,-23.1825,-66.6433,195.47,4.6,mb,,51,2.166,1.31,us,usb000rz7s,2014-08-01T22:51:04.432Z,"97km W of El Aguilar, Argentina",earthquake\n'+
'2014-08-01T14:44:27.740Z,36.7311,-98.0352,5,3.4,mb_lg,,82,0.229,0.57,us,usb000rz5v,2014-08-02T05:07:43.627Z,"28km E of Cherokee, Oklahoma",earthquake\n'+
'2014-08-01T14:19:21.530Z,36.7377,-98.0229,5,3.2,mb_lg,,57,0.234,0.52,us,usb000rz4r,2014-08-01T22:21:58.260Z,"26km WSW of Medford, Oklahoma",earthquake\n'+
'2014-08-01T13:12:55.740Z,17.5731,146.4573,102.58,5,mb,,75,0.855,0.93,us,usb000rz4k,2014-08-01T21:15:28.732Z,"93km SE of Pagan, Northern Mariana Islands",earthquake\n'+
'2014-08-01T13:01:46.960Z,-17.5587,-173.6821,10,5.1,mb,,74,3.873,1.21,us,usb000rz4j,2014-08-01T13:32:54.313Z,"124km NNE of Neiafu, Tonga",earthquake\n'+
'2014-08-01T12:07:23.900Z,18.812,-67.272,17,2.7,Md,7,270,0.37459747,0.27,pr,pr14213004,2014-08-01T20:09:52.820Z,"39km NNW of San Antonio, Puerto Rico",earthquake\n'+
'2014-08-01T11:08:09.440Z,41.9912,139.6595,175.56,4.1,mb,,102,2.606,0.41,us,usb000rz46,2014-08-01T19:10:38.594Z,"84km WNW of Kamiiso, Japan",earthquake\n'+
'2014-08-01T10:17:35.272Z,41.8836,-119.6325,0,2.84,ml,4,219.43,0.5,0.104,nn,nn00454112,2014-08-04T14:46:24.903Z,"68km ESE of Lakeview, Oregon",earthquake\n'+
'2014-08-01T10:13:52.826Z,41.8527,-119.6274,0,2.96,ml,4,105.69,0.506,0.2184,nn,nn00454100,2014-08-02T05:04:05.401Z,"73km SE of Lakeview, Oregon",earthquake\n'+
'2014-08-01T07:27:38.300Z,48.6162,-121.9582,0,2.5,Ml,,75.6,0.1706799,0.27,uw,uw60831957,2014-08-02T04:24:24.761Z,"24km ENE of Sedro-Woolley, Washington",earthquake\n'+
'2014-08-01T06:19:53.500Z,36.3672,-97.35,5.808,2.6,ml,,,,0.72,us,usb000s3al,2014-08-16T06:16:07.000Z,"10km NNW of Perry, Oklahoma",earthquake\n'+
'2014-08-01T06:01:23.190Z,30.7875,140.651,51.85,4.6,mb,,92,2.427,0.6,us,usb000rz20,2014-08-01T14:03:57.134Z,"266km SSE of Hachijo-jima, Japan",earthquake\n'+
'2014-08-01T05:57:21.610Z,47.0591,147.0052,355.21,4.4,mb,,128,2.906,0.79,us,usb000rz1z,2014-08-01T14:00:01.462Z,"213km NNW of Kurilsk, Russia",earthquake\n'+
'2014-08-01T05:55:36.700Z,19.0055,-67.6224,24,2.7,Md,4,259.2,0.72224549,0.28,pr,pr14213003,2014-08-01T13:58:13.831Z,"79km NW of San Antonio, Puerto Rico",earthquake\n'+
'2014-08-01T05:14:47.600Z,35.6113,-96.9502,4.2,2.5,ml,,,,0.53,us,usb000s3aj,2014-08-16T06:06:56.000Z,"11km SSW of Chandler, Oklahoma",earthquake\n'+
'2014-08-01T04:11:16.890Z,36.8506,3.1608,10,5.6,mwp,,39,3.402,1.22,us,usb000rz1p,2014-08-05T13:50:14.333Z,"11km NNW of Bordj el Kiffan, Algeria",earthquake\n'+
'2014-08-01T03:10:07.500Z,4.5236,96.4356,29.9,4.9,mb,,146,0.866,1.27,us,usb000rz1g,2014-08-01T11:12:50.045Z,"54km NE of Meulaboh, Indonesia",earthquake\n'+
'2014-08-01T00:10:53.470Z,-15.631,-70.3851,248.45,4.3,mb,,115,2.264,1.33,us,usb000rz17,2014-08-01T08:13:35.484Z,"24km ENE of Santa Lucia, Peru",earthquake\n'+
'2014-07-31T23:32:21.760Z,-6.6837,-76.0392,79.44,4.6,mb,,102,5.329,0.99,us,usb000rz13,2014-08-01T04:40:22.253Z,"16km SE of Chazuta, Peru",earthquake\n'+
'2014-07-31T23:28:20.270Z,36.5408,-97.6143,1.54,3.2,mb_lg,,33,0.299,0.86,us,usb000rz0y,2014-08-01T05:56:40.533Z,"28km NE of Enid, Oklahoma",earthquake\n'+
'2014-07-31T22:42:29.040Z,34.2895,-116.7863333,2.76,2.56,ml,83,36,0.1146,0.13,ci,ci15533361,2014-08-01T22:09:47.130Z,"6km ENE of Big Bear City, California",earthquake\n'+
'2014-07-31T21:51:53.000Z,60.1988,-153.0619,131.1,3.2,ml,,,,0.45,ak,ak11345035,2014-08-01T08:53:06.509Z,"36km SSW of Redoubt Volcano, Alaska",earthquake\n'+
'2014-07-31T21:04:50.000Z,63.2951,-150.5149,137.3,2.6,ml,,,,0.2,ak,ak11345017,2014-08-01T08:06:00.881Z,"79km W of Cantwell, Alaska",earthquake\n'+
'2014-07-31T20:13:24.503Z,38.5088,-117.8544,10.5029,3.12,ml,20,60.74,0.248,0.1524,nn,nn00454026,2014-08-01T17:29:43.529Z,"40km S of Gabbs, Nevada",earthquake\n'+
'2014-07-31T18:10:02.610Z,14.8544,145.5805,125.74,5,mb,,77,1.434,0.98,us,usb000ryyd,2014-08-01T02:12:36.497Z,"13km SSW of JP Tinian Town pre-WW2, Northern Mariana Islands",earthquake\n'+
'2014-07-31T18:09:16.140Z,-16.4942,-71.2417,96.9,5,mb,,137,2.054,1.58,us,usb000ryyc,2014-07-31T18:50:41.304Z,"33km ESE of Arequipa, Peru",earthquake\n'+
'2014-07-31T17:56:50.710Z,39.3621667,-120.0011667,4.34,2.81,md,21,76,0.07012,0.04,nc,nc72269026,2014-08-07T22:23:29.630Z,"12km N of Incline Village, Nevada",earthquake\n'+
'2014-07-31T17:38:47.490Z,-55.5164,-27.8076,36.57,5.4,mb,,67,5.16,0.66,us,usb000ryxz,2014-08-01T01:41:23.514Z,"137km NNW of Visokoi Island, ",earthquake\n'+
'2014-07-31T17:33:30.890Z,12.495,95.2281,15.14,5.1,mb,,85,2.569,1,us,usb000ryxu,2014-08-01T01:36:12.477Z,"284km ENE of Port Blair, India",earthquake\n'+
'2014-07-31T16:26:01.000Z,51.7679,178.5323,98.5,4.1,mb,,,,1.75,us,usb000rz18,2014-08-01T14:47:43.024Z,"20km S of Little Sitkin Island, Alaska",earthquake\n'+
'2014-07-31T15:56:28.160Z,-55.3648,-27.4746,4.05,5,mb,,58,5.323,0.61,us,usb000ryvw,2014-08-01T14:38:03.214Z,"149km N of Visokoi Island, ",earthquake\n'+
'2014-07-31T14:27:20.000Z,60.0694,-153.4718,150.4,2.8,ml,,,,0.75,ak,ak11344855,2014-07-31T22:29:53.489Z,"61km SW of Redoubt Volcano, Alaska",earthquake\n'+
'2014-07-31T13:41:01.100Z,12.4315,95.2411,10,5.8,mb,,54,2.561,0.91,us,usb000ryuh,2014-08-01T03:56:09.000Z,"284km ENE of Port Blair, India",earthquake\n'+
'2014-07-31T12:49:07.000Z,67.5932,-161.9876,21.7,3.2,ml,,,,1.15,ak,ak11344820,2014-07-31T20:51:49.870Z,"41km E of Noatak, Alaska",earthquake\n'+
'2014-07-31T06:09:30.840Z,36.2999,-97.5446,4.11,3.1,mb_lg,,36,0.207,0.36,us,usb000rys0,2014-08-01T02:01:24.603Z,"23km W of Perry, Oklahoma",earthquake\n'+
'2014-07-31T06:00:53.530Z,35.6263,-96.9413,5.09,2.9,mb_lg,,49,0.117,0.39,us,usb000ryrz,2014-07-31T14:03:31.602Z,"9km SSW of Chandler, Oklahoma",earthquake\n'+
'2014-07-31T05:42:17.000Z,63.1151,-149.3063,82.5,2.7,ml,,,,0.55,ak,ak11344685,2014-07-31T13:45:14.257Z,"35km SSW of Cantwell, Alaska",earthquake\n'+
'2014-07-31T04:59:44.000Z,57.8839,-156.3692,100,2.8,ml,,,,1.46,ak,ak11344672,2014-07-31T13:02:26.030Z,"91km S of King Salmon, Alaska",earthquake\n'+
'2014-07-31T03:32:10.000Z,59.4291,-152.3402,30.3,2.5,ml,,,,0.57,ak,ak11344661,2014-07-31T11:34:56.459Z,"48km SW of Anchor Point, Alaska",earthquake\n'+
'2014-07-31T02:37:08.540Z,-3.1203,130.1372,37.43,4.6,mb,,104,2.118,0.81,us,usb000ryre,2014-07-31T10:39:39.650Z,"137km E of Amahai, Indonesia",earthquake\n'+
'2014-07-31T02:00:36.000Z,57.8154,-154.8842,74.4,2.8,ml,,,,0.63,ak,ak11344640,2014-07-31T10:03:16.413Z,"62km WNW of Larsen Bay, Alaska",earthquake\n'+
'2014-07-31T00:59:37.000Z,58.9834,-154.5535,125.5,3.5,ml,,,,0.44,ak,ak11344507,2014-07-31T09:02:23.440Z,"87km SSE of Old Iliamna, Alaska",earthquake\n'+
'2014-07-31T00:17:52.100Z,-23.5602,-176.318,10,5.2,mb,,30,5.842,1.16,us,usb000ryr1,2014-08-02T16:57:25.000Z,"283km SSW of `Ohonua, Tonga",earthquake\n'+
'2014-07-30T23:48:03.510Z,35.7322,-97.4341,6.81,2.9,mb_lg,,72,0.066,0.48,us,usb000ryqu,2014-07-31T02:38:36.893Z,"9km NNE of Edmond, Oklahoma",earthquake\n'+
'2014-07-30T23:33:43.300Z,18.611,-64.6948,105,2.7,Md,7,262.8,0.20661252,0.1,pr,pr14211009,2014-08-07T04:54:26.000Z,"23km NNW of Road Town, British Virgin Islands",earthquake\n'+
'2014-07-30T23:09:25.000Z,62.6586,-148.7584,47.2,3.3,ml,,,,0.58,ak,ak11344402,2014-07-31T07:11:54.181Z,"79km NE of Y, Alaska",earthquake\n'+
'2014-07-30T21:36:51.550Z,52.2866,-170.7748,49.84,4.7,mb,,136,1.356,1.04,us,usb000rypl,2014-08-18T18:32:51.825Z,"38km S of Yunaska Island, Alaska",earthquake\n'+
'2014-07-30T20:59:12.780Z,35.7276,-97.4005,5,2.5,mb_lg,,50,0.079,0.64,us,usb000ryp3,2014-07-31T20:55:17.657Z,"10km NE of Edmond, Oklahoma",earthquake\n'+
'2014-07-30T20:01:53.000Z,51.6826,178.5518,93.8,2.5,ml,,,,0.39,ak,ak11344225,2014-07-31T04:04:26.484Z,"29km S of Little Sitkin Island, Alaska",earthquake\n'+
'2014-07-30T19:23:03.630Z,33.8805,-118.4963333,11.15,2.94,ml,76,79,0.08682,0.2,ci,ci15532889,2014-08-01T04:18:43.326Z,"7km W of Manhattan Beach, California",earthquake\n'+
'2014-07-30T18:11:40.000Z,67.6144,-162.1344,20,3.2,ml,,,,1.09,ak,ak11344202,2014-07-31T02:14:19.881Z,"35km E of Noatak, Alaska",earthquake\n'+
'2014-07-30T17:40:38.500Z,18.9906,-64.066,26,3.4,Md,12,320.4,0.77255114,0.3,pr,pr14211008,2014-07-31T01:43:04.887Z,"86km NE of Road Town, British Virgin Islands",earthquake\n'+
'2014-07-30T16:46:59.240Z,35.7422,-97.4247,5,3.3,mb_lg,,40,0.059,0.42,us,usb000rylj,2014-08-04T16:20:58.146Z,"11km NNE of Edmond, Oklahoma",earthquake\n'+
'2014-07-30T16:21:32.320Z,35.7305,-97.4022,4.94,3.4,mb_lg,,19,0.078,0.56,us,usb000ryl6,2014-07-31T23:53:33.571Z,"11km NE of Edmond, Oklahoma",earthquake\n'+
'2014-07-30T16:00:58.730Z,-7.1854,154.8418,10,5.7,mwb,,31,3.993,0.95,us,usb000rykv,2014-08-01T03:56:07.000Z,"119km SW of Panguna, Papua New Guinea",earthquake\n'+
'2014-07-30T15:44:20.000Z,51.8786,178.3665,126.9,2.5,ml,,,,0.62,ak,ak11344013,2014-07-30T23:47:01.744Z,"12km SW of Little Sitkin Island, Alaska",earthquake\n'+
'2014-07-30T15:20:27.000Z,67.6193,-161.9253,20,3.3,ml,,,,1.58,ak,ak11344007,2014-07-30T23:22:55.468Z,"44km E of Noatak, Alaska",earthquake\n'+
'2014-07-30T15:15:27.000Z,67.5844,-161.9348,18,3.4,ml,,,,1.07,ak,ak11344001,2014-07-30T23:18:00.775Z,"43km E of Noatak, Alaska",earthquake\n'+
'2014-07-30T14:12:45.000Z,67.614,-161.8708,20,2.8,ml,,,,1.05,ak,ak11343956,2014-07-30T22:21:56.975Z,"46km E of Noatak, Alaska",earthquake\n'+
'2014-07-30T12:57:47.820Z,36.2956667,-118.3513333,1.52,2.74,ml,30,143,0.1466,0.23,ci,ci15532777,2014-07-30T22:38:39.454Z,"43km SW of Lone Pine, California",earthquake\n'+
'2014-07-30T12:39:58.000Z,63.2264,-150.4965,119.5,3,ml,,,,0.39,ak,ak11343886,2014-07-30T20:45:24.158Z,"79km WSW of Cantwell, Alaska",earthquake\n'+
'2014-07-30T12:25:05.760Z,-18.7945,169.3068,232.51,4.6,mb,,76,4.223,0.71,us,usb000ryjq,2014-07-30T20:27:36.298Z,"83km N of Isangel, Vanuatu",earthquake\n'+
'2014-07-30T12:16:40.000Z,67.6422,-162.0073,24.4,3.4,ml,,,,1.21,ak,ak11343879,2014-07-30T20:45:04.138Z,"41km ENE of Noatak, Alaska",earthquake\n'+
'2014-07-30T12:01:10.700Z,19.0855,-64.4933,76,3.1,Md,4,331.2,0.84980626,0.33,pr,pr14211007,2014-07-30T20:03:44.578Z,"75km N of Road Town, British Virgin Islands",earthquake\n'+
'2014-07-30T09:15:18.080Z,-17.6536,-174.8265,177.7,4.3,mb,,96,4.74,0.61,us,usb000ryj6,2014-07-30T17:17:57.774Z,"141km NW of Neiafu, Tonga",earthquake\n'+
'2014-07-30T08:54:30.280Z,33.698,-116.734,19.72,2.89,ml,112,16,0.02444,0.18,ci,ci15532705,2014-07-30T21:50:55.490Z,"4km SSW of Idyllwild, California",earthquake\n'+
'2014-07-30T08:34:27.400Z,18.9207,-68.0463,70,2.9,Md,15,241.2,0.51383634,0.56,pr,pr14211005,2014-07-30T16:36:57.484Z,"53km NE of Punta Cana, Dominican Republic",earthquake\n'+
'2014-07-30T08:25:50.800Z,18.6928,-66.6095,31,2.6,Md,8,234,0.22637545,0.33,pr,pr14211004,2014-07-30T16:28:30.069Z,"26km NNE of Arecibo, Puerto Rico",earthquake\n'+
'2014-07-30T07:21:38.230Z,32.5983,-109.1111,5,2.8,ml,,82,1.121,1.24,us,usb000ryif,2014-08-02T08:47:45.360Z,"46km NW of Lordsburg, New Mexico",earthquake\n'+
'2014-07-30T05:40:30.000Z,50.1874,178.8363,32.4,3.1,ml,,,,0.46,ak,ak11343713,2014-07-30T18:24:33.780Z,"188km SW of Amatignak Island, Alaska",earthquake\n'+
'2014-07-30T03:57:21.500Z,18.5324,-68.9801,156,3.4,Md,6,342,0.56773526,0.27,pr,pr14211003,2014-07-30T11:59:59.877Z,"6km S of Guaymate, Dominican Republic",earthquake\n'+
'2014-07-30T03:46:51.000Z,53.5154,-165.3437,25.6,2.7,ml,,,,0.28,ak,ak11343746,2014-07-30T11:49:23.539Z,"74km SSE of Akutan, Alaska",earthquake\n'+
'2014-07-30T03:43:34.700Z,51.8143,178.3585,126.06,4.1,mb,,165,0.732,0.77,us,usb000ryhi,2014-07-30T11:46:02.318Z,"17km SW of Little Sitkin Island, Alaska",earthquake\n'+
'2014-07-30T02:56:27.300Z,19.4843,-155.888,14,2.5,Ml,,104.4,0.02694946,0.13,hv,hv60743496,2014-07-31T20:27:57.147Z,"3km ESE of Captain Cook, Hawaii",earthquake\n'+
'2014-07-30T02:24:26.960Z,-19.088,-12.2886,9.1,5.5,mb,,36,26.507,0.66,us,usb000ryhe,2014-07-30T13:56:08.000Z,"Southern Mid-Atlantic Ridge",earthquake\n'+
'2014-07-30T01:32:09.330Z,26.3987,53.5498,5.22,5.3,mwb,,35,2.798,0.79,us,usb000ryha,2014-07-31T14:21:36.726Z,"50km WSW of Kish, Iran",earthquake\n'+
'2014-07-29T23:17:53.000Z,59.9564,-150.2068,11.5,2.5,ml,,,,0.81,ak,ak11343221,2014-07-30T07:20:21.889Z,"45km WSW of Seward, Alaska",earthquake\n'+
'2014-07-29T22:38:26.180Z,32.1268333,-115.1398333,26.5,3.16,ml,13,244,0.1837,0.38,ci,ci15532569,2014-07-30T20:38:56.641Z,"11km SSE of Alberto Oviedo Mota, Mexico",earthquake\n'+
'2014-07-29T22:17:37.000Z,59.934,-153.3248,137.8,3.4,ml,,,,0.66,ak,ak11342984,2014-07-30T06:20:04.241Z,"69km SSW of Redoubt Volcano, Alaska",earthquake\n'+
'2014-07-29T22:08:51.000Z,52.3238,-173.6224,4.8,2.7,ml,,,,0.51,ak,ak11342978,2014-07-30T06:11:27.743Z,"41km ENE of Atka, Alaska",earthquake\n'+
'2014-07-29T22:04:44.580Z,35.4369,-36.4054,10,5.1,mb,,81,7.297,0.74,us,usb000ryg1,2014-07-30T16:32:52.000Z,"Northern Mid-Atlantic Ridge",earthquake\n'+
'2014-07-29T21:09:03.860Z,-56.1428,-27.5818,108.42,4.8,mb,,69,5.429,0.63,us,usb000ryfg,2014-07-30T05:11:38.779Z,"66km NNW of Visokoi Island, ",earthquake\n'+
'2014-07-29T20:17:00.000Z,51.8436,178.5276,108.2,2.8,ml,,,,0.48,us,usb000ryh0,2014-07-30T15:10:03.978Z,"11km S of Little Sitkin Island, Alaska",earthquake\n'+
'2014-07-29T18:04:54.190Z,-10.734,161.6955,50.95,5,mb,,28,2.149,0.99,us,usb000ryd5,2014-07-30T15:03:16.000Z,"39km SW of Kirakira, Solomon Islands",earthquake\n'+
'2014-07-29T17:19:48.000Z,18.7518,-66.7222,58,2.8,Md,19,216,0.28027437,0.33,pr,pr14210007,2014-07-30T14:02:55.000Z,"30km N of Arecibo, Puerto Rico",earthquake\n'+
'2014-07-29T16:50:13.430Z,-23.558,-176.4966,35,5.2,mb,,76,5.807,0.64,us,usb000ryc4,2014-08-14T22:17:41.104Z,"293km SSW of Vaini, Tonga",earthquake\n'+
'2014-07-29T16:49:36.530Z,5.5507,127.6425,96.04,4.3,mb,,253,4.755,0.69,us,usb000s1ea,2014-08-14T21:39:08.000Z,"185km ESE of Pondaguitan, Philippines",earthquake\n'+
'2014-07-29T15:53:11.660Z,-9.3709,118.9674,84.27,4.1,mb,,102,3.312,0.61,us,usb000s1e7,2014-08-14T21:22:28.694Z,"15km NNW of Baroh, Indonesia",earthquake\n'+
'2014-07-29T15:32:07.200Z,26.8632,54.2251,42.93,4.1,mb,,125,2.612,0.6,us,usb000s1e5,2014-08-14T20:51:55.000Z,"39km NNE of Kish, Iran",earthquake\n'+
'2014-07-29T15:28:34.260Z,-62.1453,156.3685,14.99,4.8,mb,,109,15.551,0.57,us,usb000s1e4,2014-08-14T20:26:01.329Z,"Balleny Islands region",earthquake\n'+
'2014-07-29T14:31:35.710Z,-20.902,-177.3122,529.21,4.4,mb,,146,5.386,0.44,us,usb000s1e3,2014-08-14T20:00:45.000Z,"147km E of Ndoi Island, Fiji",earthquake\n'+
'2014-07-29T13:57:04.300Z,-5.5379,35.5451,32.42,4.4,mb,,101,4.701,1.02,us,usb000s1ds,2014-08-14T19:51:01.000Z,"51km NE of Kintinku, Tanzania",earthquake\n'+
'2014-07-29T13:34:53.000Z,61.4632,-146.4795,35.7,3.3,ml,9,104.399991648001,,0.46,ak,ak11341457,2014-08-14T19:38:05.143Z,"37km N of Valdez, Alaska",earthquake\n'+
'2014-07-29T13:32:56.250Z,-3.365,146.6087,10,4.7,mb,,145,20.348,0.6,us,usb000s1e2,2014-08-14T19:21:17.417Z,"165km SSW of Lorengau, Papua New Guinea",earthquake\n'+
'2014-07-29T13:27:40.080Z,-3.422,146.769,9.77,6,mww,,14,5.436,0.86,us,usb000ry9u,2014-08-14T19:04:33.475Z,"164km SSW of Lorengau, Papua New Guinea",earthquake\n'+
'2014-07-29T13:03:17.090Z,-37.063,-70.8253,154.09,4.5,mb,,69,0.536,0.57,us,usb000ry9p,2014-08-14T17:07:18.941Z,"10km SW of Las Ovejas, Argentina",earthquake\n'+
'2014-07-29T13:01:33.690Z,-20.1471,-70.4676,27.56,4.5,mb,,96,0.495,0.95,us,usb000ry9n,2014-08-14T16:49:18.493Z,"34km WNW of Iquique, Chile",earthquake\n'+
'2014-07-29T10:46:35.400Z,18.6704,-65.101,66,3.3,Md,14,212.4,0.34585138,0.23,pr,pr14210006,2014-07-29T18:49:01.318Z,"40km NNW of Charlotte Amalie, U.S. Virgin Islands",earthquake\n'+
'2014-07-29T10:46:15.210Z,17.8419,-95.5243,95.1,6.3,mwp,,46,2.913,1.12,us,usb000ry8m,2014-08-07T17:03:01.822Z,"19km SW of Juan Rodriguez Clara, Mexico",earthquake\n'+
'2014-07-29T08:54:14.800Z,17.158,-99.918,42.2,3.9,mb,,,,1.53,us,usb000s038,2014-08-20T10:16:12.234Z,"13km NW of Xaltianguis, Mexico",earthquake\n'+
'2014-07-29T08:37:55.920Z,-25.4565,179.9591,497.11,4.1,mb,,122,7.875,1.01,us,usb000s1dq,2014-08-20T10:07:20.946Z,"South of the Fiji Islands",earthquake\n'+
'2014-07-29T08:20:14.940Z,31.497,105.2173,9.42,4.7,mb,,41,3.872,0.89,us,usb000ry8h,2014-08-20T10:03:40.602Z,"16km SSE of Wenchang, China",earthquake\n'+
'2014-07-29T07:42:41.540Z,23.7831,94.4006,41.3,4.1,mb,,160,2.917,0.64,us,usb000s1er,2014-08-20T10:01:03.856Z,"16km N of Mawlaik, Burma",earthquake\n'+
'2014-07-29T07:39:52.200Z,36.75,-98.0394,5.672,2.7,ml,,,,0.54,us,usb000ry86,2014-08-16T05:57:52.000Z,"28km E of Cherokee, Oklahoma",earthquake\n'+
'2014-07-29T07:16:40.940Z,-10.2071,87.7016,10,5.1,mb,,55,9.174,1.02,us,usb000ry7w,2014-08-20T09:49:13.000Z,"South Indian Ocean",earthquake\n'+
'2014-07-29T07:07:07.130Z,14.3603,93.0904,12,5.3,mwb,,28,2.709,1.18,us,usb000ry7u,2014-08-20T09:51:54.468Z,"297km N of Bamboo Flat, India",earthquake\n'+
'2014-07-29T07:04:14.650Z,51.939,178.346,133.1,2.7,ml,,,,0.31,us,usb000s3th,2014-08-20T09:35:38.000Z,"10km W of Little Sitkin Island, Alaska",earthquake\n'+
'2014-07-29T03:33:01.430Z,14.806,-92.4172,82.52,5.4,mb,,124,0.753,1.31,us,usb000ry71,2014-07-29T21:49:22.025Z,"7km SSE of Mazatan, Mexico",earthquake\n'+
'2014-07-29T02:46:36.100Z,36.7319,-97.9872,7.6,4.3,mwr,,80,0.226,0.73,us,usb000ry6y,2014-08-19T14:04:03.219Z,"24km WSW of Medford, Oklahoma",earthquake\n'+
'2014-07-29T02:39:51.300Z,18.951,-64.4002,33,3,Md,4,334.8,0.79411071,0.31,pr,pr14210003,2014-07-29T10:42:22.175Z,"63km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-07-29T01:31:25.100Z,19.1123,-64.614,62,3,Md,4,327.6,0.82195848,0.27,pr,pr14210002,2014-07-29T09:33:55.037Z,"76km N of Road Town, British Virgin Islands",earthquake\n'+
'2014-07-29T01:22:05.010Z,-23.5773,-63.7352,543.62,4.4,mb,,45,4.861,0.84,us,usb000ry6q,2014-07-29T09:24:44.479Z,"54km SE of Embarcacion, Argentina",earthquake\n'+
'2014-07-29T01:20:03.700Z,19.443,-68.0925,47,3.6,Md,10,331.2,1.34298135,0.18,pr,pr14210000,2014-07-29T09:22:39.528Z,"100km NNE of Punta Cana, Dominican Republic",earthquake\n'+
'2014-07-29T00:47:18.000Z,-20.132,-70.478,32.5,4.4,mwr,,,,0.71,us,usb000ry6b,2014-08-20T02:59:31.176Z,"36km WNW of Iquique, Chile",earthquake\n'+
'2014-07-29T00:41:35.460Z,-11.4124,-77.7267,50.61,4,mb,,187,10.113,0.67,us,usb000ry6f,2014-07-29T15:14:59.464Z,"36km SSW of Huacho, Peru",earthquake\n'+
'2014-07-28T23:50:57.700Z,-6.8847,143.9401,10,4.8,mb,,56,4.053,0.83,us,usb000ry65,2014-07-29T07:53:26.285Z,"66km S of Ialibu, Papua New Guinea",earthquake\n'+
'2014-07-28T23:10:25.070Z,-14.3707,-13.6208,10,4.9,mb,,96,22.641,0.77,us,usb000s194,2014-08-10T01:36:51.000Z,"Southern Mid-Atlantic Ridge",earthquake\n'+
'2014-07-28T23:00:48.530Z,-6.9048,143.8461,10,5.8,mb,,16,4.114,0.95,us,usb000ry5u,2014-07-29T18:21:35.000Z,"70km SSW of Ialibu, Papua New Guinea",earthquake\n'+
'2014-07-28T22:47:30.910Z,-6.8227,143.8801,10,4.9,mb,,100,4.138,0.73,us,usb000ry5n,2014-07-29T06:50:03.604Z,"61km SSW of Ialibu, Papua New Guinea",earthquake\n'+
'2014-07-28T22:26:51.360Z,36.732,-98.3942,5,3,mb_lg,,97,0.4,0.61,us,usb000ry5e,2014-07-30T00:54:23.535Z,"4km SW of Cherokee, Oklahoma",earthquake\n'+
'2014-07-28T20:01:14.870Z,40.5928333,-124.0966667,19.29,3.22,ml,34,122,0.1743,0.12,nc,nc72266491,2014-08-07T22:12:01.430Z,"5km E of Fortuna, California",earthquake\n'+
'2014-07-28T17:46:58.000Z,53.8936,-163.9858,52.4,2.5,ml,,,,0.3,ak,ak11340160,2014-07-29T01:50:20.348Z,"112km SSW of False Pass, Alaska",earthquake\n'+
'2014-07-28T16:58:27.550Z,16.2073,-98.525,40.2,3.9,mb,,220,0.424,0.73,us,usb000s02x,2014-08-06T22:37:29.805Z,"30km SSW of Cuajinicuilapa, Mexico",earthquake\n'+
'2014-07-28T16:20:32.280Z,-19.9144,-71.1556,13.45,4.6,mb,,168,1.022,0.53,us,usb000rxzs,2014-08-06T22:17:30.000Z,"111km WNW of Iquique, Chile",earthquake\n'+
'2014-07-28T15:53:44.800Z,18.7856,-63.9248,15,2.8,Md,3,356.4,1.06719856,0.23,pr,pr14209006,2014-08-06T22:02:33.000Z,"83km ENE of Road Town, British Virgin Islands",earthquake\n'+
'2014-07-28T15:05:54.570Z,28.0179,127.923,58.26,4.8,mb,,122,5.652,0.62,us,usb000rxz1,2014-08-06T21:57:04.000Z,"158km N of Nago, Japan",earthquake\n'+
'2014-07-28T14:14:47.000Z,58.3469,-136.9149,3.4,3.2,ml,,,,0.62,ak,ak11340054,2014-07-28T22:17:41.899Z,"69km W of Gustavus, Alaska",earthquake\n'+
'2014-07-28T14:00:06.290Z,39.3479,15.1962,269.46,4.3,mb,,38,1.215,1.29,us,usb000rxyk,2014-08-06T21:17:09.000Z,"64km WSW of Belvedere Marittimo, Italy",earthquake\n'+
'2014-07-28T12:51:29.000Z,45.34,-112.608,9.8,3.9,mc,72,34,0.413225,0.26,mb,mb30664,2014-07-30T04:58:17.103Z,"13km N of Dillon, Montana",earthquake\n'+
'2014-07-28T11:04:34.700Z,47.4582,-122.7983,26.6,3.5,Ml,,25.2,0.05389892,0.39,uw,uw60828527,2014-08-05T14:42:14.040Z,"2km ENE of Belfair, Washington",earthquake\n'+
'2014-07-28T08:05:31.700Z,34.7411,139.3323,20.75,4.5,mb,,114,1.67,0.37,us,usb000rxvv,2014-07-28T16:08:03.103Z,"33km SE of Ito, Japan",earthquake\n'+
'2014-07-28T08:03:10.760Z,-17.326,66.8344,10,4.9,mb,,66,18.706,1.45,us,usb000rxvu,2014-07-28T17:02:42.000Z,"Mauritius - Reunion region",earthquake\n'+
'2014-07-28T06:45:40.120Z,32.9875,-117.7448333,10,3.27,ml,43,146,0.4131,0.16,ci,ci15531937,2014-07-29T18:53:50.568Z,"41km SW of Oceanside, California",earthquake\n'+
'2014-07-28T05:02:12.000Z,51.4224,178.833,40,3.1,ml,,,,0.55,ak,ak11339842,2014-07-28T17:30:56.255Z,"62km SSE of Little Sitkin Island, Alaska",earthquake\n'+
'2014-07-28T04:59:53.000Z,62.3907,-149.7779,46.5,3,ml,,,,0.75,ak,ak11339835,2014-07-28T13:02:19.111Z,"18km ENE of Talkeetna, Alaska",earthquake\n'+
'2014-07-28T04:24:17.330Z,7.6155,137.1179,10,4.7,mb,,100,10.679,1.01,us,usb000s181,2014-08-10T02:05:43.573Z,"100km SSW of Ngulu, Micronesia",earthquake\n'+
'2014-07-28T03:47:04.600Z,-33.2891,-179.1602,48.08,4.4,mb,,129,4.166,1.06,us,usb000s18a,2014-08-10T02:16:11.644Z,"207km S of LEsperance Rock, New Zealand",earthquake\n'+
'2014-07-28T03:38:45.950Z,-24.0867,-66.9453,196.65,4.3,mb,,85,2.327,0.74,us,usb000rxub,2014-07-28T11:41:21.087Z,"65km WNW of San Antonio de los Cobres, Argentina",earthquake\n'+
'2014-07-28T03:36:47.620Z,7.5958,136.7312,10,5.4,mb,,74,9.97,0.94,us,usb000rxuc,2014-07-28T17:08:13.000Z,"125km SW of Ngulu, Micronesia",earthquake\n'+
'2014-07-28T03:33:41.400Z,18.8917,-64.8062,37,2.7,Md,3,338.4,0.73572022,0.18,pr,pr14209000,2014-08-07T04:58:51.000Z,"56km NNW of Road Town, British Virgin Islands",earthquake\n'+
'2014-07-28T03:26:12.940Z,58.345,-136.988,9.5,3,ml,,,,1.13,us,usb000s2nb,2014-08-17T04:25:16.637Z,"73km W of Gustavus, Alaska",earthquake\n'+
'2014-07-28T03:01:54.190Z,58.393,-137.069,6,2.6,ml,,,,1.13,us,usb000s2na,2014-08-17T04:35:46.025Z,"77km W of Gustavus, Alaska",earthquake\n'+
'2014-07-28T01:47:06.080Z,34.962,-36.2318,10,4.5,mb,,88,9.077,0.73,us,usb000s17u,2014-08-17T05:03:04.000Z,"Northern Mid-Atlantic Ridge",earthquake\n'+
'2014-07-28T00:00:46.960Z,26.9089,54.2004,39.56,4.5,mb,,80,2.66,0.47,us,usb000rxtm,2014-07-28T08:03:15.626Z,"42km NNE of Kish, Iran",earthquake\n'+
'2014-07-27T23:35:06.750Z,-10.0506,119.8982,52,4.5,mb,,78,2.703,1.03,us,usb000rxtl,2014-07-28T07:37:38.912Z,"10km SW of Tarimbang, Indonesia",earthquake\n'+
'2014-07-27T22:19:22.100Z,36.1461,-96.8378,4.52,3.2,mb_lg,,19,0.564,0.78,us,usb000rxt7,2014-07-29T05:33:16.407Z,"12km WNW of Yale, Oklahoma",earthquake\n'+
'2014-07-27T22:01:24.000Z,65.1821,-151.7358,8.6,2.7,ml,,,,1.05,ak,ak11339724,2014-07-28T06:04:04.558Z,"16km E of Tanana, Alaska",earthquake\n'+
'2014-07-27T22:00:10.000Z,51.4379,-174.5845,3.9,3.2,ml,,,,0.35,ak,ak11339722,2014-07-28T06:02:51.252Z,"88km SSW of Atka, Alaska",earthquake\n'+
'2014-07-27T21:34:21.930Z,36.0785,-117.8566667,1.52,2.77,ml,35,52,0.03919,0.13,ci,ci15531785,2014-07-28T16:06:44.623Z,"48km N of Inyokern, California",earthquake\n'+
'2014-07-27T20:39:10.450Z,36.8059,-97.858,2.71,2.9,mb_lg,,85,0.368,0.36,us,usb000rxsh,2014-07-28T00:20:56.810Z,"11km W of Medford, Oklahoma",earthquake\n'+
'2014-07-27T20:34:32.730Z,12.875,-70.0363,41.65,4.9,mb,,130,0.368,0.41,us,usb000rxsf,2014-07-27T21:34:59.896Z,"28km N of Arasji, Aruba",earthquake\n'+
'2014-07-27T20:11:54.450Z,27.6142,66.0534,33.02,4.4,mb,,134,7.364,0.72,us,usb000rxsd,2014-07-28T04:14:29.892Z,"59km WSW of Khuzdar, Pakistan",earthquake\n'+
'2014-07-27T18:09:11.300Z,35.4968,140.5976,65.56,4.6,mb,,122,2.199,0.66,us,usb000rxrz,2014-07-28T03:58:28.701Z,"20km SE of Naruto, Japan",earthquake\n'+
'2014-07-27T16:47:17.000Z,17.7852,-68.2216,49,2.9,Md,10,266.4,0.74021179,0.27,pr,pr14208008,2014-08-04T22:03:30.000Z,"77km SSE of Boca de Yuma, Dominican Republic",earthquake\n'+
'2014-07-27T13:41:09.000Z,58.9427,-155.8207,100,3.4,ml,,,,2.48,ak,ak11339397,2014-07-27T21:43:43.938Z,"56km ENE of King Salmon, Alaska",earthquake\n'+
'2014-07-27T13:29:06.020Z,16.2938,-98.5219,34.83,4.7,mb,,193,0.391,0.76,us,usb000rxr5,2014-08-04T21:54:21.358Z,"22km SSW of Cuajinicuilapa, Mexico",earthquake\n'+
'2014-07-27T13:07:56.000Z,58.3191,-136.9418,10.5,2.5,ml,,,,0.91,ak,ak11339384,2014-07-27T23:15:43.096Z,"71km W of Gustavus, Alaska",earthquake\n'+
'2014-07-27T12:52:08.700Z,51.373,-174.521,13.6,2.6,ml,,,,0.52,us,usb000rxti,2014-08-17T07:56:39.000Z,"94km SSW of Atka, Alaska",earthquake\n'+
'2014-07-27T12:45:52.610Z,-23.9251,179.8654,521.19,4.3,mb,,100,5.654,0.87,us,usb000s16v,2014-08-17T07:51:05.000Z,"South of the Fiji Islands",earthquake\n'+
'2014-07-27T12:24:09.970Z,58.339,-137.015,1.4,2.6,ml,,,,0.77,us,usb000s214,2014-08-17T07:42:47.000Z,"75km W of Gustavus, Alaska",earthquake\n'+
'2014-07-27T11:28:31.000Z,-54.3071,-119.8931,10,4.4,mb,,128,35.885,0.56,us,usb000s16t,2014-08-17T07:32:48.317Z,"Southern East Pacific Rise",earthquake\n'+
'2014-07-27T11:27:44.000Z,16.0507,120.63,52.58,4.2,mb,,133,1.959,1,us,usb000s16u,2014-08-17T07:24:02.243Z,"2km NNW of Taboy Norte, Philippines",earthquake\n'+
'2014-07-27T11:20:54.700Z,19.148,-64.3423,52,3.2,Md,6,320.4,0.77255114,0.25,pr,pr14208005,2014-08-17T07:16:07.289Z,"85km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-07-27T10:46:39.610Z,36.0765,-117.8581667,1.27,2.55,ml,30,52,0.04124,0.13,ci,ci15531617,2014-07-28T14:17:25.080Z,"47km N of Inyokern, California",earthquake\n'+
'2014-07-27T10:26:59.800Z,19.214,-64.36,48,3.2,Md,8,306,0.82914501,0.07,pr,pr14208004,2014-08-17T07:12:31.000Z,"92km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-07-27T10:22:34.350Z,-45.8073,34.4373,10,4.2,mb,,111,12.112,0.3,us,usb000s16w,2014-08-16T13:05:31.649Z,"282km WNW of Marion Island, Prince Edward Islands",earthquake\n'+
'2014-07-27T10:15:32.390Z,-2.9106,136.4798,50.59,4.7,mb,,34,4.225,1.2,us,usb000rxqg,2014-08-13T09:59:08.000Z,"112km N of Enarotali, Indonesia",earthquake\n'+
'2014-07-27T09:28:05.800Z,36.2926,-97.4699,0.703,2.8,ml,,,,0.49,us,usb000rxq9,2014-08-16T06:31:32.136Z,"16km W of Perry, Oklahoma",earthquake\n'+
'2014-07-27T09:24:15.930Z,39.6127,142.2151,50.63,4.5,mb,,123,2.504,1.46,us,usb000rxqa,2014-08-13T08:09:10.000Z,"22km E of Miyako, Japan",earthquake\n'+
'2014-07-27T09:23:38.120Z,24.4427,121.9843,30.69,4.3,mb,,112,0.445,0.71,us,usb000rxq7,2014-08-15T13:02:48.000Z,"22km SE of Suao, Taiwan",earthquake\n'+
'2014-07-27T08:50:11.100Z,19.303,-155.3877,2.9,2.5,Ml,,93.6,0.02694946,0.27,hv,hv60741681,2014-07-27T16:53:12.238Z,"14km NE of Pahala, Hawaii",earthquake\n'+
'2014-07-27T06:56:12.600Z,17.87,-66.902,124,3.1,Md,5,273.6,0.16798496,0.18,pr,pr14208003,2014-07-27T14:58:48.516Z,"11km S of Guanica, Puerto Rico",earthquake\n'+
'2014-07-27T05:00:17.000Z,54.1904,-162.5548,22.7,2.5,ml,,,,0.68,ak,ak11339180,2014-07-27T22:32:44.070Z,"92km SE of False Pass, Alaska",earthquake\n'+
'2014-07-27T04:46:40.000Z,51.7254,178.5023,96.5,2.5,ml,,,,0.32,ak,ak11339158,2014-07-27T22:32:47.477Z,"24km S of Little Sitkin Island, Alaska",earthquake\n'+
'2014-07-27T04:02:11.880Z,-24.7656,-177.3758,166.91,5.1,mb,,97,4.488,0.95,us,usb000rxp3,2014-07-27T12:04:41.647Z,"South of the Fiji Islands",earthquake\n'+
'2014-07-27T03:40:59.790Z,40.1915,143.095,47.57,4.2,mb,,170,1.822,0.69,us,usb000rxp1,2014-07-27T11:43:36.601Z,"115km ENE of Miyako, Japan",earthquake\n'+
'2014-07-27T03:38:45.000Z,51.8404,178.4299,113.6,3.5,ml,,,,0.34,ak,ak11339107,2014-07-27T22:32:41.104Z,"13km SSW of Little Sitkin Island, Alaska",earthquake\n'+
'2014-07-27T02:20:41.190Z,37.4889,72.0881,190.93,4.1,mb,,130,1.259,0.49,us,usb000rxnr,2014-07-27T10:23:21.357Z,"34km NE of Roshtqala, Tajikistan",earthquake\n'+
'2014-07-27T02:11:55.660Z,-4.4634,152.0326,10,4.4,mb,,133,0.3,1.1,us,usb000rxns,2014-07-27T10:14:27.053Z,"28km WSW of Kokopo, Papua New Guinea",earthquake\n'+
'2014-07-27T02:10:21.300Z,18.922,-64.6348,4,2.6,Md,7,295.2,0.50305656,0.27,pr,pr14208001,2014-07-27T10:12:50.688Z,"55km N of Road Town, British Virgin Islands",earthquake\n'+
'2014-07-27T01:28:38.050Z,23.7611,-45.6459,10,6,mwb,,60,16.888,1.18,us,usb000rxni,2014-07-27T23:56:07.000Z,"Northern Mid-Atlantic Ridge",earthquake\n'+
'2014-07-27T01:27:12.000Z,67.6301,-161.9748,27.9,3.7,ml,,,,1,ak,ak11339033,2014-07-27T22:31:20.947Z,"42km E of Noatak, Alaska",earthquake\n'+
'2014-07-26T22:44:29.000Z,63.5478,-149.5431,105.9,2.5,ml,,,,0.47,ak,ak11338987,2014-08-07T22:17:08.134Z,"33km WNW of Cantwell, Alaska",earthquake\n'+
'2014-07-26T21:55:56.850Z,25.2897,127.0995,41.97,4.4,mb,,136,1.866,0.94,us,usb000rxn2,2014-07-27T05:59:03.637Z,"108km SSW of Itoman, Japan",earthquake\n'+
'2014-07-26T21:25:13.510Z,-22.9725,-69.9422,56.42,4.5,mwr,,97,0.432,1.19,us,usb000rxmi,2014-07-27T19:01:07.000Z,"88km NNE of Antofagasta, Chile",earthquake\n'+
'2014-07-26T21:22:07.680Z,-52.0384,-74.3755,12.89,4.7,mb,,152,1.483,1.09,us,usb000rxmj,2014-07-27T05:24:41.041Z,"134km WSW of Puerto Natales, Chile",earthquake\n'+
'2014-07-26T21:08:33.850Z,-21.1971,-179.0905,603.38,4.7,mb,,51,8.082,0.8,us,usb000rxmv,2014-07-27T05:11:08.441Z,"72km SSW of Ndoi Island, Fiji",earthquake\n'+
'2014-07-26T21:07:21.090Z,-21.248,-179.1805,627.63,4.6,mb,,72,4.353,0.78,us,usb000rxmf,2014-07-27T05:09:55.338Z,"82km SW of Ndoi Island, Fiji",earthquake\n'+
'2014-07-26T20:53:10.000Z,58.3001,-137.0937,3.9,3.8,mwr,,,,1.06,us,usb000rxm6,2014-08-20T01:27:03.874Z,"80km W of Gustavus, Alaska",earthquake\n'+
'2014-07-26T20:49:11.480Z,-50.1072,120.0185,13.49,4.8,mb,,135,16.935,0.58,us,usb000rxm7,2014-07-27T04:51:49.093Z,"Western Indian-Antarctic Ridge",earthquake\n'+
'2014-07-26T20:38:31.410Z,36.9934,142.5887,24.48,4.6,mb,,129,3.545,0.72,us,usb000rxm5,2014-07-27T04:41:10.729Z,"151km E of Iwaki, Japan",earthquake\n'+
'2014-07-26T20:37:34.000Z,58.2827,-153.9213,76.1,2.5,ml,,,,0.44,ak,ak11338830,2014-08-07T22:16:12.768Z,"82km N of Larsen Bay, Alaska",earthquake\n'+
'2014-07-26T19:21:41.880Z,-17.1782,-179.1363,570.99,4.2,mb,,115,2.741,0.61,us,usb000rxls,2014-08-07T05:25:24.478Z,"178km ESE of Lambasa, Fiji",earthquake\n'+
'2014-07-26T17:52:44.100Z,51.7614,178.5101,98.55,3,ml,,164,0.625,0.63,us,usb000rxma,2014-08-07T22:14:10.706Z,"20km S of Little Sitkin Island, Alaska",earthquake\n'+
'2014-07-26T17:43:54.590Z,-6.8232,150.4167,27.66,4.9,mb,,41,3.14,1.16,us,usb000rxlg,2014-07-29T15:47:51.000Z,"116km SE of Kandrian, Papua New Guinea",earthquake\n'+
'2014-07-26T17:11:16.540Z,-21.1784,-15.1902,14.74,5.1,mb,,32,29.476,0.5,us,usb000rxlb,2014-07-29T15:18:51.000Z,"Southern Mid-Atlantic Ridge",earthquake\n'+
'2014-07-26T17:09:10.750Z,0.5579,98.6621,79.66,4.5,mb,,166,1.315,1.02,us,usb000rxl8,2014-07-29T15:09:53.313Z,"111km SW of Padangsidempuan, Indonesia",earthquake\n'+
'2014-07-26T16:32:03.300Z,46.2653,-111.3873,9.4,3,mc,56,143.999988480001,0.1697816,0.23,mb,mb14956348,2014-07-28T14:21:19.516Z,"11km ESE of Townsend, Montana",earthquake\n'+
'2014-07-26T16:24:57.000Z,53.5354,-166.6229,67.6,2.8,ml,,,,0.44,ak,ak11338630,2014-08-07T22:17:16.024Z,"38km S of Unalaska, Alaska",earthquake\n'+
'2014-07-26T15:59:51.150Z,-60.0831,-18.6545,10,4.9,mb,,93,13.237,1.39,us,usb000rxkq,2014-07-27T00:02:31.083Z,"East of the South Sandwich Islands",earthquake\n'+
'2014-07-26T15:53:00.000Z,59.497,-152.638,94.6,2.8,ml,,,,0.61,ak,ak11338611,2014-08-07T22:15:17.665Z,"55km SW of Anchor Point, Alaska",earthquake\n'+
'2014-07-26T15:33:14.300Z,18.3152,-68.2955,84,3,Md,7,230.4,0.21290072,0.28,pr,pr14207004,2014-07-26T23:36:03.419Z,"31km SSE of Punta Cana, Dominican Republic",earthquake\n'+
'2014-07-26T15:26:58.500Z,19.2935,-155.3833,4,2.6,Ml,,100.8,0.03593261,0.12,hv,hv60740861,2014-07-29T00:58:30.639Z,"14km NE of Pahala, Hawaii",earthquake\n'+
'2014-07-26T14:12:20.560Z,27.8789,128.2294,64.06,4.8,mb,,122,1.039,1.32,us,usb000rxkc,2014-07-26T22:14:52.070Z,"134km WSW of Naze, Japan",earthquake\n'+
'2014-07-26T13:49:37.000Z,59.9998,-153.2501,130.2,3,ml,,,,0.68,ak,ak11338535,2014-08-07T22:16:35.566Z,"60km SSW of Redoubt Volcano, Alaska",earthquake\n'+
'2014-07-26T12:17:04.500Z,17.9176,-67.1041,6,2.5,Md,10,280.8,0.07725511,0.31,pr,pr14207003,2014-07-26T20:19:42.834Z,"8km SW of La Parguera, Puerto Rico",earthquake\n'+
'2014-07-26T11:13:48.490Z,-60.0598,-18.7605,10,5.4,mb,,74,11.208,1.02,us,usb000rxjy,2014-07-29T00:56:07.000Z,"East of the South Sandwich Islands",earthquake\n'+
'2014-07-26T10:59:29.800Z,-60.1206,-18.6004,10,5.1,mb,,76,11.306,0.67,us,usb000rxjv,2014-07-26T19:02:10.466Z,"East of the South Sandwich Islands",earthquake\n'+
'2014-07-26T10:57:10.860Z,37.1165,-97.8044,2.77,3.4,mb_lg,,56,0.051,0.22,us,usb000rxjs,2014-08-01T15:21:39.089Z,"19km WNW of Caldwell, Kansas",earthquake\n'+
'2014-07-26T10:33:15.900Z,19.3859,-65.3216,86,3.1,Md,8,288,1.07258845,0.07,pr,pr14207002,2014-07-26T18:35:53.770Z,"119km NNE of Luquillo, Puerto Rico",earthquake\n'+
'2014-07-26T10:31:41.590Z,51.7223,178.4521,105.67,4.5,mb,,110,0.632,1.14,us,usb000rxjn,2014-08-07T22:17:02.841Z,"25km S of Little Sitkin Island, Alaska",earthquake\n'+
'2014-07-26T09:56:01.270Z,6.7617,-72.9671,161.06,4.5,mb,,49,0.836,1.22,us,usb000rxjg,2014-07-26T17:58:37.018Z,"9km NE of Aratoca, Colombia",earthquake\n'+
'2014-07-26T09:25:17.000Z,58.3357,-137.0003,1.1,2.7,ml,,,,0.45,ak,ak11338376,2014-08-07T22:16:30.703Z,"74km W of Gustavus, Alaska",earthquake\n'+
'2014-07-26T09:02:58.000Z,55.131,-157.0741,5.4,2.6,ml,,,,0.48,ak,ak11351470,2014-08-07T22:15:28.349Z,"119km SW of Chirikof Island, Alaska",earthquake\n'+
'2014-07-26T08:54:59.080Z,37.5571667,-118.8483333,10.44,2.9,ml,40,55,0.03618,0.05,nc,nc72264796,2014-08-07T21:54:35.502Z,"14km SE of Mammoth Lakes, California",earthquake\n'+
'2014-07-26T08:44:25.230Z,-16.1993,178.6206,10,4.2,mb,,89,1.63,1.29,us,usa000rjzy,2014-08-07T09:32:58.000Z,"84km WNW of Lambasa, Fiji",earthquake\n'+
'2014-07-26T08:40:06.580Z,20.3016,120.2648,25.18,4.6,mb,,126,2.616,1.24,us,usb000rxj9,2014-08-15T12:56:33.000Z,"167km W of Sabtang, Philippines",earthquake\n'+
'2014-07-26T08:38:13.070Z,33.0575,-115.9045,0.87,2.81,ml,51,36,0.1226,0.19,ci,ci15531225,2014-07-28T14:39:41.240Z,"26km W of Westmorland, California",earthquake\n'+
'2014-07-26T08:05:50.660Z,45.5724,150.8891,66.01,4.9,mb,,48,5.804,0.87,us,usb000rxj3,2014-08-15T12:50:17.000Z,"238km E of Kurilsk, Russia",earthquake\n'+
'2014-07-26T07:33:00.500Z,18.4153,-68.2389,95,3.4,Md,12,194.4,0.16708664,0.31,pr,pr14207000,2014-08-15T12:44:38.987Z,"25km SE of Punta Cana, Dominican Republic",earthquake\n'+
'2014-07-26T07:31:44.430Z,-30.3517,-72.2638,11.93,4.9,mb,,87,1.279,0.99,us,usb000rxiu,2014-08-15T07:47:27.316Z,"99km WSW of Coquimbo, Chile",earthquake\n'+
'2014-07-26T07:29:03.230Z,4.8359,123.1885,589.08,4.4,mb,,84,3.252,0.91,us,usb000rxix,2014-08-15T07:22:46.757Z,"188km SW of Palimbang, Philippines",earthquake\n'+
'2014-07-26T07:22:41.570Z,74.4279,8.826,10,4.2,mb,,57,4.171,1.43,us,usb000rxiv,2014-08-15T06:47:02.091Z,"Greenland Sea",earthquake\n'+
'2014-07-26T07:19:38.850Z,5.5433,126.2428,80.72,4.4,mb,,135,1.653,0.71,us,usb000s0s1,2014-08-15T06:42:12.129Z,"78km ESE of Caburan, Philippines",earthquake\n'+
'2014-07-26T07:10:29.550Z,5.6277,126.585,74.58,4.5,mb,,128,1.747,0.78,us,usb000s0rm,2014-08-15T06:32:51.323Z,"92km SSE of Pondaguitan, Philippines",earthquake\n'+
'2014-07-26T06:24:12.200Z,18.2791,-67.1425,118,2.6,Md,8,194.4,0.11498436,0.34,pr,pr14207001,2014-08-14T13:50:41.000Z,"0km SW of Anasco, Puerto Rico",earthquake\n'+
'2014-07-26T06:21:25.740Z,51.8,178.194,134.8,2.6,ml,,,,0.27,us,usb000rxm2,2014-08-14T13:46:17.000Z,"27km SW of Little Sitkin Island, Alaska",earthquake\n'+
'2014-07-26T06:17:56.000Z,58.3419,-137.0238,3.9,2.6,ml,,,,1.14,us,usb000s1a9,2014-08-14T13:41:49.000Z,"75km W of Gustavus, Alaska",earthquake\n'+
'2014-07-26T05:57:54.460Z,-6.9946,111.4824,247.59,4.2,mb,,76,1.035,0.57,us,usb000s0rq,2014-08-14T13:37:27.000Z,"0km S of Semampir, Indonesia",earthquake\n'+
'2014-07-26T05:49:51.950Z,9.8303,-83.9783,10.11,4.5,mwr,,183,0.215,1.44,us,usb000rxie,2014-08-14T07:06:17.000Z,"1km SE of Tobosi, Costa Rica",earthquake\n'+
'2014-07-26T05:34:42.550Z,-4.1851,136.6248,33.85,4,mb,,104,4.397,0.71,us,usb000rxid,2014-08-14T07:03:39.769Z,"42km SE of Enarotali, Indonesia",earthquake\n'+
'2014-07-26T04:37:56.000Z,60.0237,-153.1276,113.4,2.5,ml,,,,0.54,ak,ak11338277,2014-08-07T22:17:37.192Z,"55km SSW of Redoubt Volcano, Alaska",earthquake\n'+
'2014-07-26T03:28:05.000Z,58.4381,-136.9369,6.9,2.6,ml,,,,0.56,ak,ak11338266,2014-08-07T22:16:22.283Z,"70km W of Gustavus, Alaska",earthquake\n'+
'2014-07-26T02:45:48.000Z,51.1112,-179.9578,16.4,2.9,ml,,,,0.45,ak,ak11338260,2014-08-07T22:16:21.006Z,"61km WSW of Amatignak Island, Alaska",earthquake\n'+
'2014-07-26T02:03:25.000Z,58.2942,-137.0318,5.8,2.6,ml,,,,0.26,ak,ak11351422,2014-08-07T22:15:47.130Z,"76km W of Gustavus, Alaska",earthquake\n'+
'2014-07-26T01:40:20.000Z,58.0769,-137.2307,8.8,3,ml,,,,0.63,ak,ak11338253,2014-08-07T22:16:19.653Z,"95km WSW of Gustavus, Alaska",earthquake\n'+
'2014-07-26T00:34:14.000Z,51.3872,-178.9292,16.3,2.5,ml,,,,0.77,ak,ak11338235,2014-08-07T22:16:12.905Z,"18km NE of Amatignak Island, Alaska",earthquake\n'+
'2014-07-26T00:21:33.000Z,58.023,-137.1964,27.3,2.7,ml,,,,0.81,ak,ak11338226,2014-08-07T22:16:11.403Z,"96km WSW of Gustavus, Alaska",earthquake\n'+
'2014-07-25T23:22:10.310Z,43.5234,147.3025,51.69,5.1,mb,,126,3.403,0.81,us,usb000rxg5,2014-07-26T07:24:41.641Z,"56km ESE of Shikotan, Russia",earthquake\n'+
'2014-07-25T23:22:09.830Z,18.5277,145.5776,183.59,5,mb,,80,0.474,0.81,us,usb000rxg7,2014-07-26T07:24:35.872Z,"28km SSW of Agrihan, Northern Mariana Islands",earthquake\n'+
'2014-07-25T21:49:42.000Z,58.3204,-136.8854,10.2,2.8,ml,,,,0.87,ak,ak11337849,2014-07-26T05:52:09.466Z,"68km W of Gustavus, Alaska",earthquake\n'+
'2014-07-25T20:03:47.490Z,37.2803,99.0353,14.99,4.5,mb,,45,8.675,1.05,us,usb000rxc9,2014-07-26T17:58:32.278Z,"54km N of Chaka, China",earthquake\n'+
'2014-07-25T19:40:35.160Z,-2.7903,138.7315,59.64,4.8,mb,,37,6.476,0.91,us,usb000rxbu,2014-07-26T17:49:18.000Z,"206km W of Abepura, Indonesia",earthquake\n'+
'2014-07-25T18:28:53.000Z,65.6466,-144.8305,17.2,3.6,ml,,,,0.71,ak,ak11337197,2014-08-05T17:38:47.957Z,"21km NNW of Circle Hot Springs Station, Alaska",earthquake\n'+
'2014-07-25T17:35:32.360Z,35.5441667,-121.2565,3.23,2.68,md,90,192,0.1439,0.08,nc,nc72264461,2014-08-07T21:53:39.971Z,"12km SSW of San Simeon, California",earthquake\n'+
'2014-07-25T17:05:46.190Z,28.7894,143.6604,34.21,5,mb,,41,2.133,0.72,us,usb000rxa3,2014-07-26T15:40:49.000Z,"236km NE of Chichi-shima, Japan",earthquake\n'+
'2014-07-25T17:00:36.000Z,58.227,-137.0558,8.9,3.1,ml,,,,0.66,ak,ak11337019,2014-08-05T17:38:03.207Z,"80km WSW of Gustavus, Alaska",earthquake\n'+
'2014-07-25T16:43:24.000Z,67.5901,-161.8702,18.8,3.8,ml,,,,0.77,ak,ak11337003,2014-08-05T18:45:33.998Z,"46km E of Noatak, Alaska",earthquake\n'+
'2014-07-25T16:22:32.000Z,51.7422,178.5329,88.1,2.5,ml,,,,0.2,ak,ak11336964,2014-08-05T17:36:46.433Z,"23km S of Little Sitkin Island, Alaska",earthquake\n'+
'2014-07-25T16:02:48.000Z,51.8097,178.3597,113.3,2.5,ml,,,,0.48,ak,ak11336924,2014-08-05T17:36:45.125Z,"18km SSW of Little Sitkin Island, Alaska",earthquake\n'+
'2014-07-25T16:01:36.300Z,18.2794,-67.2462,81,2.8,Md,15,140.4,0.18415463,0.23,pr,pr14206002,2014-07-26T00:04:11.123Z,"4km S of Stella, Puerto Rico",earthquake\n'+
'2014-07-25T16:00:40.110Z,58.278,-137.0385,10,3.8,ml,,146,1.187,0.93,us,usb000rx93,2014-08-05T18:41:17.299Z,"77km W of Gustavus, Alaska",earthquake\n'+
'2014-07-25T15:12:53.100Z,58.5163,-136.7296,10,3.7,ml,,167,0.984,1.01,us,usb000rx7j,2014-08-05T18:36:32.468Z,"59km WNW of Gustavus, Alaska",earthquake\n'+
'2014-07-25T14:04:00.000Z,58.2659,-137.0722,17.6,2.9,ml,,,,0.63,ak,ak11336736,2014-08-05T17:38:18.177Z,"79km WSW of Gustavus, Alaska",earthquake\n'+
'2014-07-25T14:02:11.000Z,58.2117,-137.1301,5.8,2.5,ml,,,,0.53,ak,ak11336735,2014-08-05T17:36:35.301Z,"84km WSW of Gustavus, Alaska",earthquake\n'+
'2014-07-25T13:52:33.160Z,36.1383333,-120.1938333,11.2,2.7,md,78,57,0.103,0.08,nc,nc72264361,2014-08-07T21:52:06.869Z,"10km SW of Huron, California",earthquake\n'+
'2014-07-25T13:24:17.000Z,58.3034,-137.0773,0,2.7,ml,,,,0.38,ak,ak11336716,2014-08-05T17:36:28.110Z,"79km W of Gustavus, Alaska",earthquake\n'+
'2014-07-25T13:19:49.000Z,58.4551,-136.7781,14.8,2.5,ml,,,,0.89,ak,ak11336678,2014-08-05T17:38:01.886Z,"60km W of Gustavus, Alaska",earthquake\n'+
'2014-07-25T13:06:30.690Z,58.2016,-136.9131,10,3.8,ml,,147,1.147,0.73,us,usb000rx72,2014-08-05T18:31:06.876Z,"72km WSW of Gustavus, Alaska",earthquake\n'+
'2014-07-25T12:48:44.160Z,17.8826,145.3945,323.64,4.4,mb,,89,4.298,0.91,us,usb000rx6z,2014-07-25T20:51:23.051Z,"47km WSW of Pagan, Northern Mariana Islands",earthquake\n'+
'2014-07-25T12:39:42.000Z,58.2411,-137.0885,5.1,2.7,ml,,,,0.46,ak,ak11349683,2014-08-05T17:39:26.199Z,"81km WSW of Gustavus, Alaska",earthquake\n'+
'2014-07-25T12:38:39.000Z,58.2245,-137.0968,4,2.5,ml,,,,0.69,ak,ak11349682,2014-08-05T17:39:24.289Z,"82km WSW of Gustavus, Alaska",earthquake\n'+
'2014-07-25T12:28:44.000Z,58.2682,-137.022,10,2.5,ml,,,,0.62,ak,ak11349678,2014-08-05T17:39:17.876Z,"76km WSW of Gustavus, Alaska",earthquake\n'+
'2014-07-25T12:20:45.000Z,58.1962,-137.0623,10,2.8,ml,,,,1,ak,ak11336593,2014-08-05T17:38:16.830Z,"81km WSW of Gustavus, Alaska",earthquake\n'+
'2014-07-25T12:18:44.000Z,58.232,-137.0616,10,2.8,ml,,,,0.58,ak,ak11336590,2014-08-05T17:36:26.357Z,"80km WSW of Gustavus, Alaska",earthquake\n'+
'2014-07-25T12:16:11.000Z,58.3312,-137.0523,10,2.9,ml,,,,0.93,ak,ak11349672,2014-08-05T17:39:10.025Z,"77km W of Gustavus, Alaska",earthquake\n'+
'2014-07-25T12:13:07.000Z,58.166,-136.9942,10,3.5,ml,,,,0.77,ak,ak11349671,2014-08-05T17:39:08.464Z,"78km WSW of Gustavus, Alaska",earthquake\n'+
'2014-07-25T12:11:49.000Z,58.2451,-137.106,3.9,3.7,ml,,,,0.67,ak,ak11336580,2014-08-05T18:25:52.959Z,"82km WSW of Gustavus, Alaska",earthquake\n'+
'2014-07-25T12:03:13.000Z,58.2607,-137.0184,10,2.9,ml,,,,0.62,ak,ak11349669,2014-08-05T17:39:07.172Z,"76km WSW of Gustavus, Alaska",earthquake\n'+
'2014-07-25T11:59:55.280Z,58.3339,-137.0391,10,3.8,mb,,118,1.173,1.35,us,usb000rx6n,2014-08-05T18:21:19.757Z,"76km W of Gustavus, Alaska",earthquake\n'+
'2014-07-25T11:53:19.830Z,58.2667,-137.0251,10,3.9,ml,,140,1.183,0.68,us,usb000rx6l,2014-08-05T18:16:47.797Z,"77km WSW of Gustavus, Alaska",earthquake\n'+
'2014-07-25T11:52:35.000Z,58.381,-136.996,0.5,3.4,ml,,,,0.57,ak,ak11349665,2014-08-05T17:39:04.428Z,"73km W of Gustavus, Alaska",earthquake\n'+
'2014-07-25T11:38:48.000Z,58.1962,-137.1413,0.5,2.8,ml,,,,0.78,ak,ak11336528,2014-08-05T17:36:21.687Z,"85km WSW of Gustavus, Alaska",earthquake\n'+
'2014-07-25T11:33:55.670Z,58.2984,-136.9996,10,4,mb,,118,1.162,0.85,us,usb000rx69,2014-08-05T18:12:00.902Z,"75km W of Gustavus, Alaska",earthquake\n'+
'2014-07-25T11:26:10.000Z,58.2579,-137.0604,7.5,2.7,ml,,,,0.44,ak,ak11336513,2014-08-05T17:36:19.713Z,"79km WSW of Gustavus, Alaska",earthquake\n'+
'2014-07-25T11:19:36.760Z,58.4795,-137.0551,10,4.4,mb,,83,1.158,1.31,us,usb000rx63,2014-08-05T18:07:20.779Z,"77km W of Gustavus, Alaska",earthquake\n'+
'2014-07-25T11:18:28.000Z,58.0565,-137.1553,27.8,2.9,ml,,,,1.14,ak,ak11336472,2014-08-05T17:36:18.537Z,"92km WSW of Gustavus, Alaska",earthquake\n'+
'2014-07-25T11:15:35.000Z,58.3074,-137.0672,1,3.2,ml,,,,0.65,ak,ak11336469,2014-08-05T17:36:17.278Z,"78km W of Gustavus, Alaska",earthquake\n'+
'2014-07-25T11:09:06.090Z,-29.609,-177.4089,39.18,4.9,mb,,129,0.58,0.65,us,usb000rx6j,2014-07-25T19:11:41.551Z,"60km SE of Raoul Island, New Zealand",earthquake\n'+
'2014-07-25T11:08:39.490Z,58.2832,-137.1205,10,4.5,mb,,128,1.227,0.86,us,usb000rx5r,2014-08-05T18:02:40.648Z,"82km W of Gustavus, Alaska",earthquake\n'+
'2014-07-25T11:05:06.000Z,58.3705,-136.9414,10,3.3,ml,,,,0.76,ak,ak11336439,2014-08-05T17:38:14.079Z,"70km W of Gustavus, Alaska",earthquake\n'+
'2014-07-25T10:59:34.000Z,57.7962,-154.7902,86.1,4.6,ml,,,,0.71,ak,ak11336425,2014-08-05T17:54:46.597Z,"56km WNW of Larsen Bay, Alaska",earthquake\n'+
'2014-07-25T10:59:32.000Z,58.3753,-136.9509,9.6,4.1,ml,,,,0.54,ak,ak11349644,2014-08-05T17:38:56.734Z,"71km W of Gustavus, Alaska",earthquake\n'+
'2014-07-25T10:57:11.000Z,58.3283,-137.008,10,4.6,ml,,,,0.52,ak,ak11349643,2014-08-05T17:39:11.712Z,"74km W of Gustavus, Alaska",earthquake\n'+
'2014-07-25T10:54:49.780Z,58.358,-137.1301,10,5.9,mwp,,56,1.215,1.11,us,usb000rx5i,2014-08-05T17:38:36.861Z,"81km W of Gustavus, Alaska",earthquake\n'+
'2014-07-25T10:54:47.000Z,19.3327,-155.1932,7.8,2.5,Ml,,82.8,0.04491576,0.07,hv,hv60738871,2014-07-25T21:30:03.863Z,"11km SSE of Volcano, Hawaii",earthquake\n'+
'2014-07-25T10:54:06.050Z,58.2784,-137.0757,10,4.7,mb,,84,1.206,0.98,us,usb000rx5g,2014-08-05T17:35:51.511Z,"79km W of Gustavus, Alaska",earthquake\n'+
'2014-07-25T10:43:53.850Z,-15.2045,-72.0776,165.13,4.6,mb,,127,3.56,1.1,us,usb000rx5e,2014-07-25T18:46:33.070Z,"29km ENE of Orcopampa, Peru",earthquake\n'+
'2014-07-25T10:01:05.700Z,47.7385,-121.996,0.1,2.9,Ml,,50.4,0.03593261,0.43,uw,uw60826997,2014-07-28T11:17:07.589Z,"0km WSW of Duvall, Washington",earthquake\n'+
'2014-07-25T09:58:01.580Z,36.7314,71.2885,186.94,4.5,mb,,75,0.693,1.25,us,usb000rx57,2014-07-25T18:00:34.592Z,"22km WNW of Ashkasham, Afghanistan",earthquake\n'+
'2014-07-25T08:32:40.500Z,-25.4063,-175.2115,30.97,5,mb,,113,4.523,0.84,us,usb000rx37,2014-08-14T06:46:39.000Z,"South of Tonga",earthquake\n'+
'2014-07-25T07:38:31.600Z,19.1035,-66.5055,23,2.6,Md,15,252,0.62343081,0.37,pr,pr14206001,2014-08-01T09:34:00.000Z,"71km N of Tierras Nuevas Poniente, Puerto Rico",earthquake\n'+
'2014-07-25T07:10:29.030Z,14.4101,-89.9424,254.54,4.3,mb,,114,0.563,0.9,us,usb000rx2t,2014-08-13T13:37:17.976Z,"11km NW of El Progreso, Guatemala",earthquake\n'+
'2014-07-25T07:05:21.200Z,17.9528,-68.3655,55,3.1,Md,9,270,0.55695548,0.4,pr,pr14206000,2014-08-01T09:29:33.000Z,"53km SSE of Boca de Yuma, Dominican Republic",earthquake\n'+
'2014-07-25T05:07:01.690Z,48.9293,155.2755,64.25,4.4,mb,,53,4.455,0.81,us,usb000s0bx,2014-08-13T12:47:45.760Z,"203km SSW of Severo-Kurilsk, Russia",earthquake\n'+
'2014-07-25T04:56:52.300Z,36.6411,-98.2422,5,3.3,mb_lg,,54,0.248,0.73,us,usb000rx2d,2014-07-26T05:01:20.057Z,"10km NNE of Helena, Oklahoma",earthquake\n'+
'2014-07-25T04:52:57.900Z,-23.1958,-66.1502,176.08,4.5,mb,,175,2.611,1.36,us,usb000rx2c,2014-07-25T12:55:30.539Z,"47km W of El Aguilar, Argentina",earthquake\n'+
'2014-07-25T04:18:17.240Z,41.5893,142.0446,69.71,5.1,mb,,116,0.934,0.74,us,usb000rx2a,2014-07-25T15:15:32.389Z,"76km ENE of Mutsu, Japan",earthquake\n'+
'2014-07-25T03:50:20.000Z,63.1458,-151.353,7.9,2.9,ml,,,,1,ak,ak11336251,2014-08-05T17:36:47.108Z,"111km NW of Talkeetna, Alaska",earthquake\n'+
'2014-07-25T03:22:36.000Z,62.8814,-148.2608,60,3.7,ml,,,,0.78,ak,ak11336230,2014-08-05T17:36:30.950Z,"66km SSE of Cantwell, Alaska",earthquake\n'+
'2014-07-25T01:41:37.000Z,62.6224,-149.3425,9,2.8,ml,,,,0.83,ak,ak11336204,2014-08-05T17:35:05.853Z,"51km NE of Talkeetna, Alaska",earthquake\n'+
'2014-07-25T00:02:39.650Z,-21.4084,-179.2981,615.94,4.6,mb,,53,4.418,0.63,us,usb000rx1k,2014-07-25T08:05:20.759Z,"104km SW of Ndoi Island, Fiji",earthquake\n'+
'2014-07-24T23:57:28.400Z,10.4125,125.2667,37.99,5.3,mb,,87,3.335,0.97,us,usb000rx1j,2014-07-26T14:12:35.000Z,"6km NNE of Hinundayan, Philippines",earthquake\n'+
'2014-07-24T23:09:04.010Z,28.4955,-43.7391,10,4.7,mb,,134,24.005,0.53,us,usb000rx1f,2014-07-25T07:11:30.643Z,"Northern Mid-Atlantic Ridge",earthquake\n'+
'2014-07-24T21:51:10.400Z,-36.6247,-73.6893,13.01,4.6,mb,,124,0.576,0.62,us,usb000rx12,2014-07-25T05:53:49.918Z,"52km W of Talcahuano, Chile",earthquake\n'+
'2014-07-24T19:20:14.640Z,32.9038333,-116.268,8.78,3.52,ml,58,47,0.01782,0.21,ci,ci15530681,2014-07-25T19:21:21.121Z,"26km ENE of Pine Valley, California",earthquake\n'+
'2014-07-24T18:48:27.300Z,10.0536,-84.2402,10,4,mb,,177,0.136,0.71,us,usb000rx2l,2014-08-14T07:06:34.652Z,"3km SW of Sabanilla, Costa Rica",earthquake\n'+
'2014-07-24T18:06:01.000Z,62.0928,-149.7051,26,2.8,ml,,,,0.61,ak,ak11335668,2014-07-25T02:08:43.676Z,"10km SE of Y, Alaska",earthquake\n'+
'2014-07-24T17:12:43.200Z,17.7486,-63.5962,136,3.6,Md,11,158.4,0.35932611,0.17,pr,pr14205002,2014-07-25T01:15:12.050Z,"39km WNW of The Bottom, Bonaire, Saint Eustatius and Saba ",earthquake\n'+
'2014-07-24T17:10:20.440Z,-5.6091,145.3914,75.18,5.4,mb,,32,4.158,1.07,us,usb000rwxu,2014-07-24T17:42:12.295Z,"52km N of Goroka, Papua New Guinea",earthquake\n'+
'2014-07-24T16:51:15.720Z,42.3019,144.8227,53.84,4.4,mb,,115,1.271,0.88,us,usb000rwxf,2014-07-25T15:03:39.000Z,"83km SSE of Kushiro, Japan",earthquake\n'+
'2014-07-24T16:51:08.630Z,41.0428333,-125.194,0.63,2.51,md,30,291,0.9106,0.22,nc,nc72263886,2014-08-07T21:43:17.690Z,"90km WNW of Eureka, California",earthquake\n'+
'2014-07-24T16:04:30.000Z,60.1158,-153.3056,100,3.1,ml,,,,0.95,ak,ak11335609,2014-07-25T13:57:32.000Z,"51km SW of Redoubt Volcano, Alaska",earthquake\n'+
'2014-07-24T15:44:53.140Z,35.7305,-121.1171667,6.54,2.85,ml,91,49,0.03133,0.07,nc,nc72263841,2014-08-07T21:42:41.059Z,"11km NE of San Simeon, California",earthquake\n'+
'2014-07-24T15:20:51.870Z,35.7288333,-121.1191667,6.72,2.63,md,76,49,0.03155,0.05,nc,nc72263801,2014-08-07T21:42:04.274Z,"11km NE of San Simeon, California",earthquake\n'+
'2014-07-24T14:49:48.630Z,-9.3255,115.4015,65.31,4,mb,,71,1.498,0.77,us,usb000rx2g,2014-07-25T05:11:26.000Z,"61km SSE of Bualu, Indonesia",earthquake\n'+
'2014-07-24T14:39:46.000Z,51.4289,-174.6408,26.5,3.7,ml,,,,0.5,ak,ak11335546,2014-07-24T22:42:15.857Z,"90km SSW of Atka, Alaska",earthquake\n'+
'2014-07-24T14:30:35.000Z,60.08,-153.3,100,3,ml,,,,0.98,ak,ak11335536,2014-07-24T22:33:04.252Z,"54km SW of Redoubt Volcano, Alaska",earthquake\n'+
'2014-07-24T11:20:38.000Z,63.1892,-152.8643,1.4,2.7,ml,,,,0.8,ak,ak11335497,2014-07-24T19:23:04.369Z,"140km ENE of McGrath, Alaska",earthquake\n'+
'2014-07-24T11:15:58.000Z,59.8709,-152.8732,97.3,2.6,ml,,,,0.54,ak,ak11335475,2014-07-24T19:18:39.329Z,"59km W of Anchor Point, Alaska",earthquake\n'+
'2014-07-24T11:08:17.700Z,18.6786,-67.9954,90,3.2,Md,11,208.8,0.3997503,0.28,pr,pr14205001,2014-07-24T19:10:49.960Z,"44km ENE of Punta Cana, Dominican Republic",earthquake\n'+
'2014-07-24T10:58:08.400Z,18.9655,-67.8499,50,3.3,Md,9,241.2,0.67373646,0.28,pr,pr14205000,2014-07-24T19:00:46.420Z,"72km NE of Punta Cana, Dominican Republic",earthquake\n'+
'2014-07-24T10:27:28.000Z,35.7853,-97.507,6.42,2.7,mb_lg,,107,0.043,0.51,us,usb000rx2j,2014-07-25T05:23:07.861Z,"12km SW of Guthrie, Oklahoma",earthquake\n'+
'2014-07-24T10:14:39.200Z,19.4303,-155.6172,44.7,2.5,Ml,,64.8,0.02694946,0.23,hv,hv60738091,2014-07-24T22:13:17.805Z,"26km E of Honaunau-Napoopoo, Hawaii",earthquake\n'+
'2014-07-24T08:41:06.770Z,-9.2046,111.5343,36.44,5,mb,,89,1.627,0.99,us,usb000rwt6,2014-07-24T15:07:21.262Z,"100km S of Ngulung Wetan, Indonesia",earthquake\n'+
'2014-07-24T08:16:51.650Z,-9.3158,113.0204,37.01,4.5,mb,,79,1.398,1.32,us,usb000rwt4,2014-07-24T16:19:34.222Z,"105km S of Pujiharjo, Indonesia",earthquake\n'+
'2014-07-24T05:21:56.620Z,-18.3513,-71.4262,28.48,4.2,mwr,,155,1.029,0.87,us,usb000rwsh,2014-07-24T13:24:23.533Z,"79km S of Ilo, Peru",earthquake\n'+
'2014-07-24T04:49:16.460Z,-19.5592,168.6275,41.8,4.7,mb,,82,3.228,1.16,us,usb000rwsb,2014-07-24T12:51:44.322Z,"67km W of Isangel, Vanuatu",earthquake\n'+
'2014-07-24T03:08:18.740Z,39.2304,81.155,10,4.6,mb,,95,3.852,0.56,us,usb000rwrz,2014-07-24T11:10:54.633Z,"119km NW of Darya Boyi, China",earthquake\n'+
'2014-07-24T02:40:49.066Z,41.9329,-119.6472,1.4448,3.09,ml,7,118.94,0.489,0.127,nn,nn00453018,2014-07-24T17:12:37.055Z,"64km ESE of Lakeview, Oregon",earthquake\n'+
'2014-07-24T02:11:25.920Z,37.9663333,-122.0438333,12.65,2.5,md,91,37,0.01381,0.1,nc,nc72263481,2014-08-07T21:38:50.894Z,"1km SW of Concord, California",earthquake\n'+
'2014-07-24T02:05:51.000Z,51.8367,178.3818,111.5,2.6,ml,,,,0.31,ak,ak11335358,2014-07-24T16:52:10.995Z,"15km SW of Little Sitkin Island, Alaska",earthquake\n'+
'2014-07-24T01:49:46.092Z,41.8777,-119.6378,1.0025,2.81,ml,5,123.49,0.496,0.1643,nn,nn00453012,2014-07-24T18:33:24.692Z,"69km SE of Lakeview, Oregon",earthquake\n'+
'2014-07-23T23:55:59.500Z,46.271,-111.379,9.7,3.6,mc,61,80,0.1616968,0.2,mb,mb30652,2014-07-29T14:03:16.229Z,"12km ESE of Townsend, Montana",earthquake\n'+
'2014-07-23T22:25:05.500Z,19.2031,-66.6252,25,2.8,Md,9,284.4,0.72763538,0.15,pr,pr14204006,2014-08-17T05:09:30.000Z,"81km N of Arecibo, Puerto Rico",earthquake\n'+
'2014-07-23T22:13:08.000Z,62.3935,-147.7335,18.9,2.7,ml,,,,0.75,ak,ak11335283,2014-08-17T05:51:31.504Z,"82km NE of Sutton-Alpine, Alaska",earthquake\n'+
'2014-07-23T21:39:08.040Z,-20.2438,-68.702,114.98,5.5,mb,,34,0.436,1.2,us,usb000rwqe,2014-07-24T15:54:19.000Z,"150km E of Iquique, Chile",earthquake\n'+
'2014-07-23T21:00:46.980Z,-21.1744,-68.754,135.03,4.2,mb,,46,0.697,0.9,us,usb000rwq1,2014-07-24T05:03:25.473Z,"144km N of Calama, Chile",earthquake\n'+
'2014-07-23T17:57:50.200Z,18.7833,-67.8345,21,2.8,Md,4,331.2,0.52012455,0.07,pr,pr14204005,2014-07-24T02:00:23.381Z,"64km ENE of Punta Cana, Dominican Republic",earthquake\n'+
'2014-07-23T17:23:59.980Z,-6.4837,152.682,29.25,4.9,mb,,49,2.335,0.96,us,usb000rwmx,2014-07-24T01:26:30.499Z,"226km S of Taron, Papua New Guinea",earthquake\n'+
'2014-07-23T16:26:42.700Z,48.983,-2.333,2,4,ml,,,,0.28,us,usb000rwp1,2014-07-24T21:43:20.409Z,"28km SW of Saint Helier, Jersey",earthquake\n'+
'2014-07-23T15:34:33.400Z,18.8708,-64.4275,29,2.7,Md,4,324,0.48509025,0.1,pr,pr14204004,2014-07-23T23:37:12.650Z,"54km NNE of Road Town, British Virgin Islands",earthquake\n'+
'2014-07-23T14:20:38.910Z,14.1851,-91.6607,69.48,4.3,mb,,236,0.336,0.92,us,usb000rwke,2014-07-23T22:23:20.909Z,"30km ESE of Champerico, Guatemala",earthquake\n'+
'2014-07-23T14:03:47.500Z,35.8787,-97.3048,5.099,3.2,ml,,60,,0.36,us,usb000rwk6,2014-07-24T04:38:38.919Z,"8km SSW of Langston, Oklahoma",earthquake\n'+
'2014-07-23T13:57:23.480Z,13.6547,144.7893,110.29,4.6,mb,,66,0.1,0.54,us,usb000rwsa,2014-07-26T18:50:27.372Z,"16km NNW of Dededo Village, Guam",earthquake\n'+
'2014-07-23T12:29:07.700Z,-19.601,-178.286,597.39,4.3,mb,,123,3.931,1.02,us,usb000rwjh,2014-07-23T20:31:46.564Z,"123km NNE of Ndoi Island, Fiji",earthquake\n'+
'2014-07-23T09:57:47.530Z,-5.6047,-80.8777,34.2,4.6,mb,,117,7.49,0.7,us,usb000rwgu,2014-07-23T10:32:02.929Z,"8km SW of Sechura, Peru",earthquake\n'+
'2014-07-23T06:54:39.716Z,41.8719,-119.6356,0.8332,2.57,ml,4,221.28,0.498,0.1767,nn,nn00452926,2014-07-23T21:48:16.697Z,"71km SE of Lakeview, Oregon",earthquake\n'+
'2014-07-23T05:52:28.760Z,0.3888,67.1053,10,5,mb,,131,12.657,0.76,us,usb000rwdr,2014-07-23T16:11:38.000Z,"Carlsberg Ridge",earthquake\n'+
'2014-07-23T03:48:51.000Z,51.2579,-174.9626,25.7,2.5,ml,,,,0.45,ak,ak11334893,2014-07-23T17:16:10.510Z,"116km SSW of Atka, Alaska",earthquake\n'+
'2014-07-23T03:13:33.000Z,51.4513,-175.6754,27.8,2.5,ml,,,,0.82,ak,ak11334873,2014-07-23T17:16:14.069Z,"83km SE of Adak, Alaska",earthquake\n'+
'2014-07-23T02:47:23.200Z,18.877,-64.527,10,2.6,Md,7,306,0.464429,0.23,pr,pr14204001,2014-07-23T10:49:59.869Z,"51km N of Road Town, British Virgin Islands",earthquake\n'+
'2014-07-23T02:02:26.580Z,35.9019,-97.3081,5,3.3,mb_lg,,41,0.158,0.41,us,usb000rwcu,2014-07-23T17:18:30.015Z,"6km SW of Langston, Oklahoma",earthquake\n'+
'2014-07-23T00:28:19.720Z,16.905,-100.2033,36.05,5,mb,,151,1.695,0.8,us,usb000rwc3,2014-07-23T02:31:13.292Z,"20km SW of Coyuca de Benitez, Mexico",earthquake\n'+
'2014-07-23T00:27:01.380Z,-20.5949,-177.6158,472.67,5,mb,,87,4.979,0.84,us,usb000rwc5,2014-07-23T08:29:31.102Z,"113km E of Ndoi Island, Fiji",earthquake\n'+
'2014-07-23T00:25:14.700Z,35.8344,-97.4364,5,2.5,mb_lg,,68,0.04,0.39,us,usb000rwdj,2014-07-29T03:19:42.934Z,"5km SSW of Guthrie, Oklahoma",earthquake\n'+
'2014-07-22T23:48:34.000Z,64.1216,-150.1468,5.2,2.8,ml,,,,0.74,ak,ak11334697,2014-07-23T07:51:03.742Z,"64km WNW of Healy, Alaska",earthquake\n'+
'2014-07-22T23:46:51.970Z,25.7484,-110.4158,10,4.1,mb,,146,2.097,1.34,us,usb000rwbv,2014-07-23T07:49:34.048Z,"98km ESE of Loreto, Mexico",earthquake\n'+
'2014-07-22T23:35:14.620Z,26.1322,89.6037,14.65,4,mb,,170,2.106,0.8,us,usb000rwbx,2014-07-23T07:37:51.038Z,"13km E of Dinhata, India",earthquake\n'+
'2014-07-22T22:58:31.040Z,26.216,89.6763,14.98,4.2,mb,,188,2.067,0.89,us,usb000rwbn,2014-07-23T00:04:29.205Z,"11km S of Tufanganj, India",earthquake\n'+
'2014-07-22T22:37:12.000Z,59.9209,-153.5005,100,2.9,ml,,,,0.98,ak,ak11334633,2014-07-23T06:39:44.822Z,"75km SW of Redoubt Volcano, Alaska",earthquake\n'+
'2014-07-22T21:56:14.410Z,16.8443,-100.086,14.51,4.5,mb,,254,1.618,0.84,us,usb000rwb2,2014-07-22T23:12:14.898Z,"17km SW of Bajos del Ejido, Mexico",earthquake\n'+
'2014-07-22T20:50:13.150Z,53.1259,-168.5298,80.76,3.7,mb,,164,0.249,1.48,us,usb000rwa2,2014-07-23T14:00:16.000Z,"30km NE of Nikolski, Alaska",earthquake\n'+
'2014-07-22T20:15:12.010Z,51.6797,-173.4769,36.15,4.1,mb,,177,0.687,1.1,us,usb000rw98,2014-07-23T13:52:19.000Z,"76km SE of Atka, Alaska",earthquake\n'+
'2014-07-22T17:50:29.800Z,36.6548,-98.2137,4.245,2.6,ml,,101,,1.32,us,usb000rw7l,2014-07-23T13:42:33.000Z,"13km NNE of Helena, Oklahoma",earthquake\n'+
'2014-07-22T17:28:09.700Z,35.814,-97.4137,4.182,2.6,ml,,52,,1.04,us,usb000rw7t,2014-07-23T13:23:08.000Z,"7km S of Guthrie, Oklahoma",earthquake\n'+
'2014-07-22T17:05:43.000Z,61.7457,-152.1126,0.4,2.7,ml,,,,0.82,ak,ak11334458,2014-07-23T01:08:17.353Z,"109km W of Willow, Alaska",earthquake\n'+
'2014-07-22T16:14:36.560Z,32.2855,-115.25,9.7,2.96,ml,13,277,0.1415,0.22,ci,ci37249624,2014-07-23T00:17:17.038Z,"9km NW of Alberto Oviedo Mota, Mexico",earthquake\n'+
'2014-07-22T15:32:28.000Z,51.8176,178.4004,118.6,2.5,ml,,,,0.35,ak,ak11334388,2014-07-22T23:35:08.768Z,"16km SSW of Little Sitkin Island, Alaska",earthquake\n'+
'2014-07-22T15:30:23.450Z,35.8511667,-119.804,7.53,2.81,md,121,40,0.231,0.28,nc,nc72262506,2014-08-07T22:07:27.314Z,"22km SE of Kettleman City, California",earthquake\n'+
'2014-07-22T15:22:38.790Z,27.5361,57.3325,10,5.1,mb,,76,2.771,0.65,us,usb000rw57,2014-07-22T23:25:15.630Z,"49km NNE of Minab, Iran",earthquake\n'+
'2014-07-22T14:56:56.000Z,52.8328,-169.7706,116.7,2.6,ml,,,,0.31,ak,ak11334374,2014-07-22T22:59:32.545Z,"61km W of Nikolski, Alaska",earthquake\n'+
'2014-07-22T14:11:15.300Z,-20.2979,-176.1736,208.16,5,mb,,31,6.009,0.84,us,usb000rw4q,2014-07-22T22:13:48.089Z,"137km NW of Nuku`alofa, Tonga",earthquake\n'+
'2014-07-22T12:32:55.500Z,18.1569,-64.2317,45,2.8,Md,5,320.4,0.4464627,0.3,pr,pr14203003,2014-07-22T20:35:27.433Z,"49km SE of Road Town, British Virgin Islands",earthquake\n'+
'2014-07-22T10:49:56.090Z,12.0007,142.3571,59.89,5,mb,,53,2.914,0.84,us,usb000rw44,2014-07-22T18:52:26.735Z,"287km WSW of Merizo Village, Guam",earthquake\n'+
'2014-07-22T09:45:09.440Z,36.6865,-121.3165,4.76,2.75,md,74,27,0.03131,0.05,nc,nc72262326,2014-08-07T22:07:15.297Z,"14km SSE of Ridgemark, California",earthquake\n'+
'2014-07-22T09:05:31.000Z,59.7625,-151.9013,47.8,2.5,ml,,,,0.55,ak,ak11334230,2014-07-22T17:08:05.693Z,"4km WSW of Anchor Point, Alaska",earthquake\n'+
'2014-07-22T08:55:05.510Z,-19.557,-66.5391,255.96,4.1,mb,,69,2.505,1.2,us,usb000rz6t,2014-08-10T12:22:55.689Z,"76km SSE of Challapata, Bolivia",earthquake\n'+
'2014-07-22T08:45:40.520Z,-10.8241,161.9672,10,4.5,mb,,82,2.418,1.37,us,usb000rz6u,2014-08-10T11:54:38.100Z,"41km S of Kirakira, Solomon Islands",earthquake\n'+
'2014-07-22T08:35:04.350Z,31.6155,-114.4635,10,2.86,ml,3,248,0.6647,0.31,ci,ci37249432,2014-07-22T16:37:46.548Z,"78km NNE of San Felipe, Mexico",earthquake\n'+
'2014-07-22T08:34:51.040Z,31.663,-114.498,10,2.5,ml,5,128,0.6928,0.2,ci,ci37206365,2014-07-22T18:33:35.082Z,"75km SE of Estacion Coahuila, Mexico",earthquake\n'+
'2014-07-22T08:04:17.530Z,34.1625,26.2431,25.62,4.8,mb,,135,1.574,1.35,us,usb000rw3d,2014-08-02T13:04:45.000Z,"100km SSE of Makry Gialos, Greece",earthquake\n'+
'2014-07-22T08:01:55.200Z,26.897,54.32,12,4.4,mb,,,,1.41,us,usb000rz71,2014-08-10T11:25:49.809Z,"48km NE of Kish, Iran",earthquake\n'+
'2014-07-22T07:31:06.530Z,-12.5548,165.8569,50.68,4.5,mb,,81,3.158,1.07,us,usb000rz6r,2014-08-10T06:20:17.000Z,"203km S of Lata, Solomon Islands",earthquake\n'+
'2014-07-22T07:11:06.170Z,36.6856667,-121.3158333,5.05,2.76,md,74,27,0.03229,0.05,nc,nc72262166,2014-08-07T22:07:01.080Z,"14km SSE of Ridgemark, California",earthquake\n'+
'2014-07-22T06:50:31.930Z,26.071,-110.1439,10,4.8,mb,,182,4.105,1.37,us,usb000rw32,2014-07-22T14:52:59.123Z,"87km W of Higuera de Zaragoza, Mexico",earthquake\n'+
'2014-07-22T05:08:38.000Z,60.3604,-140.2886,1.7,2.7,ml,,,,0.71,ak,ak11334117,2014-07-22T13:11:09.268Z,"95km NNW of Yakutat, Alaska",earthquake\n'+
'2014-07-22T03:03:58.650Z,30.6537,31.7603,5.83,4.3,mb,,238,4.494,1.13,us,usb000rw2e,2014-07-22T16:54:33.859Z,"4km NNE of Al Qurayn, Egypt",earthquake\n'+
'2014-07-22T02:16:43.300Z,17.794,-68.2611,91,3.6,Md,12,331.2,1.1166059,0.33,pr,pr14203000,2014-07-22T10:19:26.100Z,"74km SSE of Boca de Yuma, Dominican Republic",earthquake\n'+
'2014-07-22T02:15:07.300Z,19.3463,-65.1545,38,2.7,Md,3,334.8,1.0402491,0.28,pr,pr14203001,2014-07-22T10:17:39.089Z,"113km NNW of Charlotte Amalie, U.S. Virgin Islands",earthquake\n'+
'2014-07-22T02:08:33.290Z,35.5907,-97.4124,5,2.6,mb_lg,,52,0.012,0.44,us,usb000rw2y,2014-08-19T13:01:33.510Z,"8km NNW of Spencer, Oklahoma",earthquake\n'+
'2014-07-22T01:23:10.000Z,60.3451,-140.2595,2.2,3.7,ml,,,,0.88,ak,ak11334025,2014-08-13T00:34:34.515Z,"88km NNW of Yakutat, Alaska",earthquake\n'+
'2014-07-22T00:53:02.180Z,-6.1224,-72.0249,564.5,4.2,mb,,56,6.406,0.71,us,usb000rz6m,2014-08-19T22:37:48.665Z,"181km NNE of Cruzeiro Do Sul, Brazil",earthquake\n'+
'2014-07-22T00:45:35.000Z,67.6703,-161.9948,14.1,2.9,ml,,,,1.02,ak,ak11334011,2014-08-19T21:55:09.052Z,"43km E of Noatak, Alaska",earthquake\n'+
'2014-07-22T00:39:56.500Z,0.0044,98.2814,50.83,4.4,mb,,80,1.471,0.78,us,usb000rz6n,2014-08-15T04:01:05.316Z,"147km NNW of Sikabaluan, Indonesia",earthquake\n'+
'2014-07-22T00:33:01.000Z,67.0507,-147.9548,0,2.8,ml,,,,0.82,ak,ak11334005,2014-07-22T08:35:32.629Z,"99km ESE of Coldfoot, Alaska",earthquake\n'+
'2014-07-21T23:38:17.690Z,35.4366,141.1269,30.73,4.5,mb,,118,2.558,0.9,us,usb000rz64,2014-08-10T03:03:20.000Z,"42km SE of Hasaki, Japan",earthquake\n'+
'2014-07-21T23:23:13.840Z,52.004,177.4,3.2,3.5,ml,,,,1.36,us,usb000s213,2014-08-15T01:59:13.000Z,"17km SW of Kiska Volcano, Alaska",earthquake\n'+
'2014-07-21T23:22:48.890Z,52.055,177.408,10.9,3,ml,,,,0.47,us,usb000s212,2014-08-15T04:13:34.992Z,"14km WSW of Kiska Volcano, Alaska",earthquake\n'+
'2014-07-21T23:01:10.030Z,51.148,-174.821,10.1,3,ml,,,,0.75,us,usb000s211,2014-08-19T22:42:41.000Z,"124km SSW of Atka, Alaska",earthquake\n'+
'2014-07-21T22:50:28.140Z,-1.1638,-23.874,10,4.3,mb,,92,11.622,1.08,us,usb000rz62,2014-08-19T22:59:09.000Z,"Central Mid-Atlantic Ridge",earthquake\n'+
'2014-07-21T22:37:24.490Z,-4.169,151.0741,10,4.4,mb,,125,1.087,0.58,us,usb000rz61,2014-08-15T02:29:01.000Z,"121km W of Rabaul, Papua New Guinea",earthquake\n'+
'2014-07-21T22:04:17.600Z,51.884,178.207,133,2.9,ml,,,,0.4,us,usb000rvcy,2014-08-13T05:49:26.000Z,"21km WSW of Little Sitkin Island, Alaska",earthquake\n'+
'2014-07-21T21:51:22.010Z,52.0829,-171.1676,50.46,4,mb,,141,1.67,1.01,us,usb000rz5y,2014-08-19T23:21:01.000Z,"45km S of Amukta Island, Alaska",earthquake\n'+
'2014-07-21T21:44:28.640Z,-14.8195,-175.4913,10,4.6,mb,,53,3.711,0.98,us,usb000rz5x,2014-08-15T03:28:06.000Z,"185km SSE of Mata-Utu, Wallis and Futuna",earthquake\n'+
'2014-07-21T21:40:51.300Z,-9.1867,158.1736,32.06,4.5,mb,,46,1.768,0.74,us,usb000rvbq,2014-08-19T23:53:08.000Z,"157km SW of Dadali, Solomon Islands",earthquake\n'+
'2014-07-21T21:27:46.600Z,18.7695,-64.363,24,2.9,Md,5,309.6,0.69619435,0.07,pr,pr14202003,2014-08-13T05:55:04.000Z,"47km NE of Road Town, British Virgin Islands",earthquake\n'+
'2014-07-21T21:16:27.490Z,83.8315,112.4032,10,4.4,mb,,77,12.646,0.58,us,usb000rz5w,2014-08-20T03:32:20.000Z,"North of Severnaya Zemlya",earthquake\n'+
'2014-07-21T20:39:50.120Z,51.4002,-175.0371,37.81,4.7,mb,,140,0.941,1.19,us,usb000rvap,2014-07-22T04:42:30.701Z,"105km SSW of Atka, Alaska",earthquake\n'+
'2014-07-21T20:35:56.330Z,51.306,-174.9905,36.48,4.6,mb,,143,1.023,1.01,us,usb000rvak,2014-07-22T04:38:23.998Z,"113km SSW of Atka, Alaska",earthquake\n'+
'2014-07-21T19:47:28.000Z,57.4681,-154.4461,100,2.5,ml,,,,0.96,ak,ak11333674,2014-07-22T03:50:06.569Z,"29km WSW of Larsen Bay, Alaska",earthquake\n'+
'2014-07-21T19:37:33.000Z,51.3047,-174.932,25.6,4.2,ml,,,,0.38,ak,ak11333803,2014-07-22T03:40:12.949Z,"111km SSW of Atka, Alaska",earthquake\n'+
'2014-07-21T19:36:43.860Z,51.2819,-174.9341,10,4.8,mb,,77,1.028,0.72,us,usb000rv9m,2014-07-22T03:39:33.702Z,"113km SSW of Atka, Alaska",earthquake\n'+
'2014-07-21T18:50:15.900Z,43.6657,-121.4503,0,2.6,Ml,,280.8,0.07186522,0.15,uw,uw60823807,2014-07-22T02:52:42.675Z,"4km E of La Pine, Oregon",quarry\n'+
'2014-07-21T17:48:01.000Z,51.0386,178.505,1.5,2.7,ml,,,,0.44,ak,ak11333627,2014-07-22T01:50:39.772Z,"101km S of Little Sitkin Island, Alaska",earthquake\n'+
'2014-07-21T17:21:25.200Z,18.868,-65.22,45,3.1,Md,9,234,0.56054874,0.15,pr,pr14202002,2014-07-22T01:24:00.485Z,"63km N of Culebra, Puerto Rico",earthquake\n'+
'2014-07-21T16:49:00.420Z,-1.4714,-77.6465,178.56,4.1,mb,,160,3.457,0.64,us,usb000rv8d,2014-07-22T00:51:38.410Z,"37km E of Puyo, Ecuador",earthquake\n'+
'2014-07-21T14:54:41.000Z,-19.8294,-178.4637,616.44,6.9,mww,,15,3.897,0.88,us,usb000ruzk,2014-07-21T22:57:16.259Z,"94km NNE of Ndoi Island, Fiji",earthquake\n'+
'2014-07-21T13:21:45.000Z,63.8348,-149.3085,119.6,3.3,ml,,,,0.88,ak,ak11333469,2014-07-21T21:24:25.427Z,"17km W of Healy, Alaska",earthquake\n'+
'2014-07-21T13:02:12.400Z,19.0674,-66.1275,46,3,Md,5,259.2,0.92975632,0.23,pr,pr14202001,2014-07-21T21:04:47.598Z,"66km N of San Juan, Puerto Rico",earthquake\n';

  csv = d3.csv.parse(csv);
  callback(null, csv);
}