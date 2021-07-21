import Tina, { GlobalFormPlugin, Form } from "tinacms";

const TinaLoader = ({ pageProps, children }) => {
  return (
    <Tina
      useUnstable={true}
      config={{
        branch: "main",
        clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
        isLocalClient: !process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
      }}
      cms={(cms) => {
        return cms;
      }}
      formify={(args, cms) => {
        if (
          [
            "getNavigationDocument",
            "getFooterDocument",
            "getThemeDocument",
            // "getPageDocument",
          ].includes(args.formConfig.id)
        ) {
          // console.log("client", Client);
          const form = new Form(args.formConfig);
          // The site nav will be a global plugin
          cms.plugins.add(new GlobalFormPlugin(form));
          return form;
        }
        return args.createForm(args.formConfig);
      }}
      {...pageProps}
    >
      {(livePageProps) => children(livePageProps)}
    </Tina>
  );
};

export default TinaLoader;
