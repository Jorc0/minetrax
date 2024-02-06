import{A as w}from"./AppLayout-e134b68d.js";import F from"./DeleteUserForm-2154c74c.js";import{J as y}from"./SectionBorder-cc69772a.js";import $ from"./LogoutOtherBrowserSessionsForm-3dab101a.js";import k from"./TwoFactorAuthenticationForm-a03b9fc5.js";import v from"./UpdatePasswordForm-8a4e7f01.js";import P from"./UpdateProfileInformationForm-fc74c4f1.js";import b from"./UpdateNotificationPreferencesForm-13752f56.js";import{_ as j,l as t,o as s,c as B,w as p,a as n,t as U,b as o,d as a,e as m,F as x}from"./app-abc2c6f9.js";import"./useAuthorizable-bbacc5be.js";import"./ActionSection-1d746bf0.js";import"./SectionTitle-617de07e.js";import"./DialogModal-4d5171fb.js";import"./Modal-93060732.js";import"./DangerButton-5c657c10.js";import"./Input-8a723310.js";import"./InputError-2d1d42cf.js";import"./SecondaryButton-3b27014c.js";import"./ActionMessage-29637a41.js";import"./Button-4892a8de.js";import"./XInput-cfa04922.js";import"./FormSection-7faeb04b.js";import"./PasswordStrengthMeter-bf1f826d.js";import"./Label-abebaf8a.js";import"./index.es-2acd1d49.js";import"./XCheckbox-cd23e68a.js";import"./XSelect-b0a796d4.js";import"./XTextarea-721502fd.js";const A={components:{UpdateNotificationPreferencesForm:b,AppLayout:w,DeleteUserForm:F,JetSectionBorder:y,LogoutOtherBrowserSessionsForm:$,TwoFactorAuthenticationForm:k,UpdatePasswordForm:v,UpdateProfileInformationForm:P},props:["sessions"]},S={class:"font-semibold text-xl text-gray-800 leading-tight"},N={class:"max-w-7xl mx-auto py-10 px-2 sm:px-6 lg:px-8"},C={key:0},D={key:1},V={key:2};function I(e,J,i,L,T,q){const c=t("app-head"),_=t("update-profile-information-form"),r=t("jet-section-border"),l=t("update-notification-preferences-form"),f=t("update-password-form"),u=t("two-factor-authentication-form"),d=t("logout-other-browser-sessions-form"),h=t("delete-user-form"),g=t("app-layout");return s(),B(g,null,{header:p(()=>[n("h2",S,U(e.__("Profile")),1)]),default:p(()=>[o(c,{title:e.__("Your Profile Settings")},null,8,["title"]),n("div",null,[n("div",N,[e.$page.props.jetstream.canUpdateProfileInformation?(s(),a("div",C,[o(_,{user:e.$page.props.auth.user},null,8,["user"]),o(r)])):m("",!0),n("div",null,[o(l,{user:e.$page.props.auth.user},null,8,["user"]),o(r)]),e.$page.props.jetstream.canUpdatePassword?(s(),a("div",D,[o(f,{class:"mt-10 sm:mt-0"}),o(r)])):m("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(s(),a("div",V,[o(u,{class:"mt-10 sm:mt-0","requires-confirmation":!0}),o(r)])):m("",!0),o(d,{sessions:i.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(s(),a(x,{key:3},[o(r),o(h,{class:"mt-10 sm:mt-0"})],64)):m("",!0)])])]),_:1})}const ho=j(A,[["render",I]]);export{ho as default};