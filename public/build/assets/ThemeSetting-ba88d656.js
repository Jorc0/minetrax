import{L as P}from"./LoadingButton-0621580c.js";import{X as B}from"./XSelect-7581d402.js";import{X as S}from"./XCheckbox-88bc1094.js";import{X as D}from"./XTextarea-11321f19.js";import{X as j}from"./XInput-275b2fcc.js";import{_ as F}from"./InputError-9f54c14e.js";import{_ as z}from"./SecondaryButton-38d55cb1.js";import{_ as U,T as C,l as d,o as _,c as A,w as f,b as l,a as s,t as m,i as b,j as g,d as i,m as c,p as w,f as p,e as a}from"./app-20450175.js";import{_ as T}from"./AdminLayout-af1206f9.js";import"./AppLayout-759a67c4.js";import"./useAuthorizable-8850b194.js";import"./CloudArrowDownIcon-d93a676b.js";const N={components:{AdminLayout:T,XCheckbox:S,XSelect:B,XTextarea:D,LoadingButton:P,XInput:j,JetInputError:F,JetSecondaryButton:z},props:{settings:Object,themeList:Object,fontList:Object,isVideoHomeHeroBgImagePathLight:Boolean,isVideoHomeHeroBgImagePathDark:Boolean},data(){return{form:C({color_mode:this.settings.color_mode,theme_name:this.settings.theme_name,primary_font:this.settings.primary_font,secondary_font:this.settings.secondary_font,enable_home_hero_section:this.settings.enable_home_hero_section,home_hero_bg_size_css:this.settings.home_hero_bg_size_css,home_hero_bg_position_css:this.settings.home_hero_bg_position_css,home_hero_bg_repeat_css:this.settings.home_hero_bg_repeat_css,home_hero_bg_attachment_css:this.settings.home_hero_bg_attachment_css,home_hero_bg_height_css:this.settings.home_hero_bg_height_css,show_join_box_in_home_hero:this.settings.show_join_box_in_home_hero,home_hero_bg_image_light:null,home_hero_bg_image_dark:null,show_fg_image_box_in_home_hero:this.settings.show_fg_image_box_in_home_hero,show_discord_box_in_home_hero:this.settings.show_discord_box_in_home_hero,home_hero_bg_particles:this.settings.home_hero_bg_particles,home_hero_fg_image_light:null,home_hero_fg_image_dark:null}),homeHeroFgImageLightPreview:null,homeHeroFgImageDarkPreview:null,homeHeroBgImageLightPreview:null,homeHeroBgImageLightPreviewIsVideo:!1,homeHeroBgImageDarkPreview:null,homeHeroBgImageDarkPreviewIsVideo:!1,backgroundPositionList:["left top","left center","left bottom","right top","right center","right bottom","center top","center center","center bottom"],backgroundRepeatList:["no-repeat","repeat","repeat-x","repeat-y","space","round"],backgroundSizeList:["none","fill","auto","contain","cover"],backgroundAttachmentList:["scroll","fixed","local"]}},methods:{updateHomeHeroBgImageLightPreview(){const o=new FileReader;o.onload=r=>{this.homeHeroBgImageLightPreview=r.target.result,this.$refs.home_hero_bg_image_light.files[0].type.includes("video")?this.homeHeroBgImageLightPreviewIsVideo=!0:this.homeHeroBgImageLightPreviewIsVideo=!1},o.readAsDataURL(this.$refs.home_hero_bg_image_light.files[0])},selectHomeHeroBgImageLight(){this.$refs.home_hero_bg_image_light.click()},updateHomeHeroBgImageDarkPreview(){const o=new FileReader;o.onload=r=>{this.homeHeroBgImageDarkPreview=r.target.result,this.$refs.home_hero_bg_image_dark.files[0].type.includes("video")?this.homeHeroBgImageDarkPreviewIsVideo=!0:this.homeHeroBgImageDarkPreviewIsVideo=!1},o.readAsDataURL(this.$refs.home_hero_bg_image_dark.files[0])},selectHomeHeroBgImageDark(){this.$refs.home_hero_bg_image_dark.click()},updateHomeHeroFgImageDarkPreview(){const o=new FileReader;o.onload=r=>{this.homeHeroFgImageDarkPreview=r.target.result},o.readAsDataURL(this.$refs.home_hero_fg_image_dark.files[0])},selectHomeHeroFgImageDark(){this.$refs.home_hero_fg_image_dark.click()},updateHomeHeroFgImageLightPreview(){const o=new FileReader;o.onload=r=>{this.homeHeroFgImageLightPreview=r.target.result},o.readAsDataURL(this.$refs.home_hero_fg_image_light.files[0])},selectHomeHeroFgImageLight(){this.$refs.home_hero_fg_image_light.click()},saveThemeSetting(){this.$refs.home_hero_bg_image_light&&(this.form.home_hero_bg_image_light=this.$refs.home_hero_bg_image_light.files[0]),this.$refs.home_hero_bg_image_dark&&(this.form.home_hero_bg_image_dark=this.$refs.home_hero_bg_image_dark.files[0]),this.$refs.home_hero_fg_image_light&&(this.form.home_hero_fg_image_light=this.$refs.home_hero_fg_image_light.files[0]),this.$refs.home_hero_fg_image_dark&&(this.form.home_hero_fg_image_dark=this.$refs.home_hero_fg_image_dark.files[0]),this.form.post(route("admin.setting.theme.update"),{preserveScroll:!0,onSuccess:()=>{this.$inertia.replace(route("admin.setting.theme.show"),{preserveState:!1,preserveScroll:!0})}})}}},R={class:"py-12 px-10 max-w-6xl mx-auto flex"},X={class:"flex-1"},E={class:"flex flex-col w-full"},M={class:"bg-white dark:bg-cool-gray-800 shadow w-full rounded"},O={class:"px-6 py-4 border-b dark:border-gray-700 dark:text-gray-300 font-bold"},J={class:"mt-10 sm:mt-0"},G={class:"md:grid md:grid-cols-3 md:gap-6"},q={class:"mt-5 md:mt-0 md:col-span-3"},K={class:"shadow overflow-hidden sm:rounded-md"},Q={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},W={class:"grid grid-cols-6 gap-6"},Y={class:"col-span-6 sm:col-span-6"},Z={class:"col-span-6 sm:col-span-3"},$={class:"col-span-6 sm:col-span-3"},ee={class:"col-span-6 sm:col-span-3"},oe={class:"flex items-center col-span-6 sm:col-span-6 border-t border-gray-300 dark:border-gray-700 pt-4"},re={key:0,class:"col-span-6 sm:col-span-3"},se={for:"home_hero_fg_image_light",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},te={class:"mt-2 flex justify-center items-center h-40"},_e=["src"],ie={key:1,class:"text-gray-400 italic text-xs"},le={class:"mt-2"},me={class:"mt-2 text-xs text-gray-400"},he={key:1,class:"col-span-6 sm:col-span-3"},ae={for:"home_hero_fg_image_dark",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},ne={class:"mt-2 flex justify-center items-center h-40"},ge=["src"],ce={key:1,class:"text-gray-400 italic text-xs"},de={class:"mt-2"},ue={class:"mt-2 text-xs text-gray-400"},fe={key:2,class:"col-span-6 sm:col-span-3"},be={for:"home_hero_bg_image_light",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},pe={class:"mt-2"},ke=["src"],ve={key:1,id:"home_hero_bg_image_light_video",class:"rounded h-40 object-cover w-full",autoplay:"",loop:"",muted:""},ye=["src"],we={class:"mt-2"},He={key:1,class:"h-40 flex items-center justify-center text-gray-400 text-sm italic"},Ie={class:"mt-2 text-xs text-gray-400"},xe={key:3,class:"col-span-6 sm:col-span-3"},Ve={for:"home_hero_bg_image_dark",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},Le={class:"mt-2"},Pe=["src"],Be={key:1,id:"home_hero_bg_image_light_video",class:"rounded h-40 object-cover w-full",autoplay:"",loop:"",muted:""},Se=["src"],De={class:"mt-2"},je={key:1,class:"h-40 flex items-center justify-center text-gray-400 text-sm italic"},Fe={class:"mt-2 text-xs text-gray-400"},ze={key:4,class:"col-span-6 sm:col-span-3"},Ue={key:5,class:"col-span-6 sm:col-span-3"},Ce={key:6,class:"col-span-6 sm:col-span-3"},Ae={key:7,class:"col-span-6 sm:col-span-3"},Te={key:8,class:"col-span-3 sm:col-span-3"},Ne={key:9,class:"flex items-center col-span-3 sm:col-span-3"},Re={key:10,class:"flex items-center col-span-3 sm:col-span-3"},Xe={key:11,class:"flex items-center col-span-3 sm:col-span-3"},Ee={key:12,class:"col-span-6 sm:col-span-6"},Me={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"};function Oe(o,r,n,Je,e,h){const H=d("app-head"),u=d("x-select"),k=d("x-checkbox"),v=d("jet-secondary-button"),y=d("jet-input-error"),I=d("x-input"),x=d("x-textarea"),V=d("loading-button"),L=d("AdminLayout");return _(),A(L,null,{default:f(()=>[l(H,{title:o.__("Theme Settings")},null,8,["title"]),s("div",R,[s("div",X,[s("div",E,[s("div",M,[s("div",O,m(o.__("Theme Settings")),1),s("div",J,[s("div",G,[s("div",q,[s("form",{autocomplete:"off",onSubmit:r[18]||(r[18]=b((...t)=>h.saveThemeSetting&&h.saveThemeSetting(...t),["prevent"]))},[s("div",K,[s("div",Q,[s("div",W,[s("div",Y,[l(u,{id:"color_mode",modelValue:e.form.color_mode,"onUpdate:modelValue":r[0]||(r[0]=t=>e.form.color_mode=t),name:"color_mode",error:e.form.errors.color_mode,label:o.__("Default Color Mode"),placeholder:o.__("Select default color mode.."),"disable-null":!0,"select-list":{dark:o.__("Dark"),light:o.__("Light")}},null,8,["modelValue","error","label","placeholder","select-list"])]),g(s("div",Z,[l(u,{id:"theme_name",modelValue:e.form.theme_name,"onUpdate:modelValue":r[1]||(r[1]=t=>e.form.theme_name=t),name:"theme_name",error:e.form.errors.theme_name,label:o.__("Color Theme"),placeholder:o.__("Select theme.."),"disable-null":!0,"select-list":n.themeList},null,8,["modelValue","error","label","placeholder","select-list"])],512),[[c,!1]]),g(s("div",$,[l(u,{id:"primary_font",modelValue:e.form.primary_font,"onUpdate:modelValue":r[2]||(r[2]=t=>e.form.primary_font=t),name:"primary_font",error:e.form.errors.primary_font,label:o.__("Primary Font"),placeholder:o.__("Select primary font.."),"disable-null":!0,"select-list":n.fontList},null,8,["modelValue","error","label","placeholder","select-list"])],512),[[c,!1]]),g(s("div",ee,[l(u,{id:"secondary_font",modelValue:e.form.secondary_font,"onUpdate:modelValue":r[3]||(r[3]=t=>e.form.secondary_font=t),name:"secondary_font",error:e.form.errors.secondary_font,label:o.__("Secondary Font"),placeholder:o.__("Select secondary font.."),"disable-null":!0,"select-list":n.fontList},null,8,["modelValue","error","label","placeholder","select-list"])],512),[[c,!1]]),s("div",oe,[l(k,{id:"enable_home_hero_section",modelValue:e.form.enable_home_hero_section,"onUpdate:modelValue":r[4]||(r[4]=t=>e.form.enable_home_hero_section=t),label:o.__("Hero Section at Homepage"),help:o.__("Enable hero image section on home page."),name:"enable_home_hero_section",error:e.form.errors.enable_home_hero_section},null,8,["modelValue","label","help","error"])]),e.form.enable_home_hero_section?(_(),i("div",re,[s("input",{id:"home_hero_fg_image_light",ref:"home_hero_fg_image_light",type:"file",class:"hidden",onChange:r[5]||(r[5]=(...t)=>h.updateHomeHeroFgImageLightPreview&&h.updateHomeHeroFgImageLightPreview(...t))},null,544),s("label",se,m(o.__("Hero Foreground Image Light")),1),g(s("div",te,[n.settings.home_hero_fg_image_path_light?(_(),i("img",{key:0,src:n.settings.home_hero_fg_image_path_light,alt:"home_hero_fg_image_light",class:"rounded h-40"},null,8,_e)):(_(),i("span",ie,m(o.__("No Foreground Image.")),1))],512),[[c,!e.homeHeroFgImageLightPreview]]),g(s("div",le,[s("span",{class:"block rounded h-40",style:w(`background-size: contain; background-repeat: no-repeat; background-position: center center; background-image: url(${e.homeHeroFgImageLightPreview});`)},null,4)],512),[[c,e.homeHeroFgImageLightPreview]]),l(v,{class:"mt-2 mr-2",type:"button",onClick:b(h.selectHomeHeroFgImageLight,["prevent"])},{default:f(()=>[p(m(o.__("Select A New Image")),1)]),_:1},8,["onClick"]),s("div",me,m(o.__("Allowed"))+": jpg, jpeg, png, bmp, gif, svg, webp ",1),l(y,{message:e.form.errors.home_hero_fg_image_light,class:"mt-2"},null,8,["message"])])):a("",!0),e.form.enable_home_hero_section?(_(),i("div",he,[s("input",{id:"home_hero_fg_image_dark",ref:"home_hero_fg_image_dark",type:"file",class:"hidden",onChange:r[6]||(r[6]=(...t)=>h.updateHomeHeroFgImageDarkPreview&&h.updateHomeHeroFgImageDarkPreview(...t))},null,544),s("label",ae,m(o.__("Hero Foreground Image Dark")),1),g(s("div",ne,[n.settings.home_hero_fg_image_path_dark?(_(),i("img",{key:0,src:n.settings.home_hero_fg_image_path_dark,alt:"home_hero_fg_image_dark",class:"rounded h-40 object-center"},null,8,ge)):(_(),i("span",ce,m(o.__("No Foreground Image.")),1))],512),[[c,!e.homeHeroFgImageDarkPreview]]),g(s("div",de,[s("span",{class:"block rounded h-40",style:w(`background-size: contain; background-repeat: no-repeat; background-position: center center; background-image: url(${e.homeHeroFgImageDarkPreview});`)},null,4)],512),[[c,e.homeHeroFgImageDarkPreview]]),l(v,{class:"mt-2 mr-2",type:"button",onClick:b(h.selectHomeHeroFgImageDark,["prevent"])},{default:f(()=>[p(m(o.__("Select A New Image")),1)]),_:1},8,["onClick"]),s("div",ue,m(o.__("Allowed"))+": jpg, jpeg, png, bmp, gif, svg, webp ",1),l(y,{message:e.form.errors.home_hero_fg_image_dark,class:"mt-2"},null,8,["message"])])):a("",!0),e.form.enable_home_hero_section?(_(),i("div",fe,[s("input",{id:"home_hero_bg_image_light",ref:"home_hero_bg_image_light",type:"file",class:"hidden",onChange:r[7]||(r[7]=(...t)=>h.updateHomeHeroBgImageLightPreview&&h.updateHomeHeroBgImageLightPreview(...t))},null,544),s("label",be,m(o.__("Hero Background Image Light")),1),g(s("div",pe,[n.isVideoHomeHeroBgImagePathLight?(_(),i("video",ve,[s("source",{src:n.settings.home_hero_bg_image_path_light,type:"video/webm"},null,8,ye)])):(_(),i("img",{key:0,src:n.settings.home_hero_bg_image_path_light,alt:"home_hero_bg_image_light",class:"rounded h-40 object-cover w-full"},null,8,ke))],512),[[c,!e.homeHeroBgImageLightPreview]]),g(s("div",we,[e.homeHeroBgImageLightPreviewIsVideo?(_(),i("div",He,m(o.__("Upload preview not available for this type. Please save to see the changes.")),1)):(_(),i("span",{key:0,class:"block rounded h-40",style:w(`background-size: ${e.form.home_hero_bg_size_css}; background-repeat: ${e.form.home_hero_bg_repeat_css}; background-position: ${e.form.home_hero_bg_position_css}; background-image: url(${e.homeHeroBgImageLightPreview});`)},null,4))],512),[[c,e.homeHeroBgImageLightPreview]]),l(v,{class:"mt-2 mr-2",type:"button",onClick:b(h.selectHomeHeroBgImageLight,["prevent"])},{default:f(()=>[p(m(o.__("Select A New Image")),1)]),_:1},8,["onClick"]),s("div",Ie,m(o.__("Allowed"))+": jpg, jpeg, png, bmp, gif, svg, webp, webm ",1),l(y,{message:e.form.errors.home_hero_bg_image_light,class:"mt-2"},null,8,["message"])])):a("",!0),e.form.enable_home_hero_section?(_(),i("div",xe,[s("input",{id:"home_hero_bg_image_dark",ref:"home_hero_bg_image_dark",type:"file",class:"hidden",onChange:r[8]||(r[8]=(...t)=>h.updateHomeHeroBgImageDarkPreview&&h.updateHomeHeroBgImageDarkPreview(...t))},null,544),s("label",Ve,m(o.__("Hero Background Image Dark")),1),g(s("div",Le,[n.isVideoHomeHeroBgImagePathDark?(_(),i("video",Be,[s("source",{src:n.settings.home_hero_bg_image_path_dark,type:"video/webm"},null,8,Se)])):(_(),i("img",{key:0,src:n.settings.home_hero_bg_image_path_dark,alt:"home_hero_bg_image_dark",class:"rounded h-40 object-cover w-full"},null,8,Pe))],512),[[c,!e.homeHeroBgImageDarkPreview]]),g(s("div",De,[e.homeHeroBgImageDarkPreviewIsVideo?(_(),i("div",je,m(o.__("Upload preview not available for this type. Please save to see the changes.")),1)):(_(),i("span",{key:0,class:"block rounded h-40",style:w(`background-size: ${e.form.home_hero_bg_size_css}; background-repeat: ${e.form.home_hero_bg_repeat_css}; background-position: ${e.form.home_hero_bg_position_css}; background-image: url(${e.homeHeroBgImageDarkPreview});`)},null,4))],512),[[c,e.homeHeroBgImageDarkPreview]]),l(v,{class:"mt-2 mr-2",type:"button",onClick:b(h.selectHomeHeroBgImageDark,["prevent"])},{default:f(()=>[p(m(o.__("Select A New Image")),1)]),_:1},8,["onClick"]),s("div",Fe,m(o.__("Max Size"))+": 2 MB ",1),l(y,{message:e.form.errors.home_hero_bg_image_dark,class:"mt-2"},null,8,["message"])])):a("",!0),e.form.enable_home_hero_section?(_(),i("div",ze,[l(u,{id:"home_hero_bg_size_css",modelValue:e.form.home_hero_bg_size_css,"onUpdate:modelValue":r[9]||(r[9]=t=>e.form.home_hero_bg_size_css=t),name:"home_hero_bg_size_css",error:e.form.errors.home_hero_bg_size_css,label:o.__("Hero background size"),placeholder:o.__("Select background size.."),"disable-null":!0,"select-list":e.backgroundSizeList},null,8,["modelValue","error","label","placeholder","select-list"])])):a("",!0),e.form.enable_home_hero_section?(_(),i("div",Ue,[l(u,{id:"home_hero_bg_position_css",modelValue:e.form.home_hero_bg_position_css,"onUpdate:modelValue":r[10]||(r[10]=t=>e.form.home_hero_bg_position_css=t),name:"home_hero_bg_position_css",error:e.form.errors.home_hero_bg_position_css,label:o.__("Hero background position"),placeholder:o.__("Select background position.."),"disable-null":!0,"select-list":e.backgroundPositionList},null,8,["modelValue","error","label","placeholder","select-list"])])):a("",!0),e.form.enable_home_hero_section?(_(),i("div",Ce,[l(u,{id:"home_hero_bg_repeat_css",modelValue:e.form.home_hero_bg_repeat_css,"onUpdate:modelValue":r[11]||(r[11]=t=>e.form.home_hero_bg_repeat_css=t),name:"home_hero_bg_repeat_css",error:e.form.errors.home_hero_bg_repeat_css,label:o.__("Hero background repeat"),placeholder:o.__("Select background repeat.."),"disable-null":!0,"select-list":e.backgroundRepeatList},null,8,["modelValue","error","label","placeholder","select-list"])])):a("",!0),e.form.enable_home_hero_section?(_(),i("div",Ae,[l(u,{id:"home_hero_bg_attachment_css",modelValue:e.form.home_hero_bg_attachment_css,"onUpdate:modelValue":r[12]||(r[12]=t=>e.form.home_hero_bg_attachment_css=t),name:"home_hero_bg_attachment_css",error:e.form.errors.home_hero_bg_attachment_css,label:o.__("Hero background attachment"),placeholder:o.__("Select background attachment type.."),"disable-null":!0,"select-list":e.backgroundAttachmentList},null,8,["modelValue","error","label","placeholder","select-list"])])):a("",!0),e.form.enable_home_hero_section?(_(),i("div",Te,[l(I,{id:"home_hero_bg_height_css",modelValue:e.form.home_hero_bg_height_css,"onUpdate:modelValue":r[13]||(r[13]=t=>e.form.home_hero_bg_height_css=t),label:o.__("Hero background height"),error:e.form.errors.home_hero_bg_height_css,type:"text",name:"home_hero_bg_height_css"},null,8,["modelValue","label","error"])])):a("",!0),e.form.enable_home_hero_section?(_(),i("div",Ne,[l(k,{id:"show_join_box_in_home_hero",modelValue:e.form.show_join_box_in_home_hero,"onUpdate:modelValue":r[14]||(r[14]=t=>e.form.show_join_box_in_home_hero=t),label:o.__("Show Join Box in Hero Section"),help:o.__("If enabled, will show server join details like player count & join hostname in hero section. (left side)"),name:"show_join_box_in_home_hero",error:e.form.errors.show_join_box_in_home_hero},null,8,["modelValue","label","help","error"])])):a("",!0),e.form.enable_home_hero_section?(_(),i("div",Re,[l(k,{id:"show_fg_image_box_in_home_hero",modelValue:e.form.show_fg_image_box_in_home_hero,"onUpdate:modelValue":r[15]||(r[15]=t=>e.form.show_fg_image_box_in_home_hero=t),label:o.__("Show Foreground Image Box in Hero Section"),help:o.__("If enabled, will show middle foreground image box in hero section (middle)."),name:"show_fg_image_box_in_home_hero",error:e.form.errors.show_fg_image_box_in_home_hero},null,8,["modelValue","label","help","error"])])):a("",!0),e.form.enable_home_hero_section?(_(),i("div",Xe,[l(k,{id:"show_discord_box_in_home_hero",modelValue:e.form.show_discord_box_in_home_hero,"onUpdate:modelValue":r[16]||(r[16]=t=>e.form.show_discord_box_in_home_hero=t),label:o.__("Show Discord Box in Hero Section"),help:o.__("If enabled, will show discord box in hero section (right side). Make sure to add Discord Invite URL & Discord Server ID in General Settings."),name:"show_discord_box_in_home_hero",error:e.form.errors.show_discord_box_in_home_hero},null,8,["modelValue","label","help","error"])])):a("",!0),e.form.enable_home_hero_section?(_(),i("div",Ee,[l(x,{id:"home_hero_bg_particles",modelValue:e.form.home_hero_bg_particles,"onUpdate:modelValue":r[17]||(r[17]=t=>e.form.home_hero_bg_particles=t),"auto-resize":!1,label:o.__("Particle Effect Options"),help:o.__("tsParticles Options json. See https://minetrax.github.io/docs/web/theme-settings for more info. (Set it empty to disable particles effect)"),error:e.form.errors.home_hero_bg_particles,name:"home_hero_bg_particles"},null,8,["modelValue","label","help","error"])])):a("",!0)])]),s("div",Me,[l(V,{loading:e.form.processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-bold rounded-md text-white bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50 dark:bg-cool-gray-700 dark:hover:bg-cool-gray-600",type:"submit"},{default:f(()=>[p(m(o.__("Save Theme Settings")),1)]),_:1},8,["loading"])])])],32),a("",!0)])])])])])])])]),_:1})}const to=U(N,[["render",Oe]]);export{to as default};