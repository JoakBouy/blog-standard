import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from '../components/AppLayout';

export default function TokenTopup(props) {
    console.log('NEW POST PROPS:', props);
    return (
        <div>
            <h1>This is the TokenTopup page</h1>
        </div>
    );
}

TokenTopup.getLayout = function getLayout(page, pageProps) {
    return <AppLayout {...pageProps}>{page}</AppLayout>;
  };


export const getServerSideProps = withPageAuthRequired (() => {
    return {
        props: {},
    };
});