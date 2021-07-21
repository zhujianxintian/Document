interface Result {
    success: boolean;
    code: number;
    message: string;
    data: unknown;
    error: unknown;
}

interface UrlFunction {
    (url: string): Result;
}

const remote: UrlFunction = () => {
    // console.log(url);
    return {
        success: true,
        code: 200,
        message: 'query success',
        data: [],
        error: null,
    };
};

remote('');