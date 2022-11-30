/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/": {
        /** get the status of server. */
        get: {
            responses: {
                /** OK */
                200: {
                    schema: { [key: string]: unknown };
                };
            };
        };
    };
    "/auth": {
        /** authenticate the user for the given public key. */
        post: {
            parameters: {
                body: {
                    /** query params */
                    request: definitions["types.AuthRequest"];
                };
            };
            responses: {
                /** OK */
                200: {
                    schema: definitions["types.AuthResponse"];
                };
            };
        };
    };
    "/config": {
        /** It is called by the containerssh webhook. and is not expected to be used externally. */
        post: {
            parameters: {
                body: {
                    /** query params */
                    request: definitions["config.Request"];
                };
            };
            responses: {
                /** OK */
                200: unknown;
            };
        };
    };
    "/pubkey": {
        /** It is called by the containerssh webhook. and is not expected to be used externally. */
        post: {
            parameters: {
                body: {
                    /** query params */
                    request: definitions["auth.PublicKeyAuthRequest"];
                };
            };
            responses: {
                /** OK */
                200: {
                    schema: definitions["auth.ResponseBody"];
                };
            };
        };
    };
    "/users/{identity_token}/environments": {
        /** List the environment. */
        get: {
            parameters: {
                path: {
                    /** identity token */
                    identity_token: string;
                };
            };
            responses: {
                /** OK */
                200: {
                    schema: definitions["types.EnvironmentListResponse"];
                };
            };
        };
        /** Create the environment. */
        post: {
            parameters: {
                path: {
                    /** identity token */
                    identity_token: string;
                };
                body: {
                    /** query params */
                    request: definitions["types.EnvironmentCreateRequest"];
                };
            };
            responses: {
                /** Created */
                201: {
                    schema: definitions["types.EnvironmentCreateResponse"];
                };
            };
        };
    };
    "/users/{identity_token}/environments/{name}": {
        /** Get the environment with the given environment name. */
        get: {
            parameters: {
                path: {
                    /** identity token */
                    identity_token: string;
                    /** environment name */
                    name: string;
                };
            };
            responses: {
                /** OK */
                200: {
                    schema: definitions["types.EnvironmentGetResponse"];
                };
            };
        };
        /** Remove the environment. */
        delete: {
            parameters: {
                path: {
                    /** identity token */
                    identity_token: string;
                    /** environment name */
                    name: string;
                };
            };
            responses: {
                /** OK */
                200: {
                    schema: definitions["types.EnvironmentRemoveResponse"];
                };
            };
        };
    };
    "/users/{identity_token}/images": {
        /** List the images. */
        get: {
            parameters: {
                path: {
                    /** identity token */
                    identity_token: string;
                    /** image name */
                    name: string;
                };
            };
            responses: {
                /** OK */
                200: {
                    schema: definitions["types.ImageListResponse"];
                };
            };
        };
    };
    "/users/{identity_token}/images/{name}": {
        /** Get the image with the given image name. */
        get: {
            parameters: {
                path: {
                    /** identity token */
                    identity_token: string;
                    /** image name */
                    name: string;
                };
            };
            responses: {
                /** OK */
                200: {
                    schema: definitions["types.ImageGetResponse"];
                };
            };
        };
    };
}

export interface definitions {
    "auth.PublicKeyAuthRequest": {
        /**
         * @description ClientVersion contains the version string the connecting client sent if any. May be empty if the client did not
         * provide a client version.
         *
         * required: false
         * in: body
         */
        clientVersion?: string;
        /**
         * @description ConnectionID is an opaque ID to identify the SSH connection in question.
         *
         * required: true
         * in: body
         */
        connectionId?: string;
        /**
         * @description Environment is a set of key-value pairs provided by the authentication or configuration system and may be
         * exposed by the backend.
         *
         * required: false
         * in: body
         */
        environment?: { [key: string]: definitions["metadata.Value"] };
        /**
         * @description Files is a key-value pair of file names and their content set by the authentication or configuration system
         * and consumed by the backend.
         *
         * required: false
         * in: body
         */
        files?: { [key: string]: definitions["metadata.BinaryValue"] };
        /**
         * @description Metadata is a set of key-value pairs that carry additional information from the authentication and configuration
         * system to the backends. Backends can expose this information as container labels, environment variables, or
         * other places.
         *
         * required: false
         * in: body
         */
        metadata?: { [key: string]: definitions["metadata.Value"] };
        /**
         * @description PublicKey is the key in the authorized key format.
         *
         * required: true
         */
        publicKey?: string;
        /**
         * @description RemoteAddress is the IP address and port of the user trying to authenticate.
         *
         * required: true
         * in: body
         */
        remoteAddress?: string;
        /**
         * @description Username is the username provided on login by the client. This may, but must not necessarily match the
         * authenticated username.
         *
         * required: true
         * in: body
         */
        username?: string;
    };
    "auth.ResponseBody": {
        /**
         * @description AuthenticatedUsername contains the username that was actually verified. This may differ from LoginUsername when,
         * for example OAuth2 or Kerberos authentication is used. This field is empty until the authentication phase is
         * completed.
         *
         * required: false
         * in: body
         */
        authenticatedUsername?: string;
        /**
         * @description ClientVersion contains the version string the connecting client sent if any. May be empty if the client did not
         * provide a client version.
         *
         * required: false
         * in: body
         */
        clientVersion?: string;
        /**
         * @description ConnectionID is an opaque ID to identify the SSH connection in question.
         *
         * required: true
         * in: body
         */
        connectionId?: string;
        /**
         * @description Environment is a set of key-value pairs provided by the authentication or configuration system and may be
         * exposed by the backend.
         *
         * required: false
         * in: body
         */
        environment?: { [key: string]: definitions["metadata.Value"] };
        /**
         * @description Files is a key-value pair of file names and their content set by the authentication or configuration system
         * and consumed by the backend.
         *
         * required: false
         * in: body
         */
        files?: { [key: string]: definitions["metadata.BinaryValue"] };
        /**
         * @description Metadata is a set of key-value pairs that carry additional information from the authentication and configuration
         * system to the backends. Backends can expose this information as container labels, environment variables, or
         * other places.
         *
         * required: false
         * in: body
         */
        metadata?: { [key: string]: definitions["metadata.Value"] };
        /**
         * @description RemoteAddress is the IP address and port of the user trying to authenticate.
         *
         * required: true
         * in: body
         */
        remoteAddress?: string;
        /**
         * @description Success indicates if the authentication was successful.
         *
         * required: true
         * in: body
         */
        success?: boolean;
        /**
         * @description Username is the username provided on login by the client. This may, but must not necessarily match the
         * authenticated username.
         *
         * required: true
         * in: body
         */
        username?: string;
    };
    "config.Request": {
        /**
         * @description AuthenticatedUsername contains the username that was actually verified. This may differ from LoginUsername when,
         * for example OAuth2 or Kerberos authentication is used. This field is empty until the authentication phase is
         * completed.
         *
         * required: false
         * in: body
         */
        authenticatedUsername?: string;
        /**
         * @description ClientVersion contains the version string the connecting client sent if any. May be empty if the client did not
         * provide a client version.
         *
         * required: false
         * in: body
         */
        clientVersion?: string;
        /**
         * @description ConnectionID is an opaque ID to identify the SSH connection in question.
         *
         * required: true
         * in: body
         */
        connectionId?: string;
        /**
         * @description Environment is a set of key-value pairs provided by the authentication or configuration system and may be
         * exposed by the backend.
         *
         * required: false
         * in: body
         */
        environment?: { [key: string]: definitions["metadata.Value"] };
        /**
         * @description Files is a key-value pair of file names and their content set by the authentication or configuration system
         * and consumed by the backend.
         *
         * required: false
         * in: body
         */
        files?: { [key: string]: definitions["metadata.BinaryValue"] };
        /**
         * @description Metadata is a set of key-value pairs that carry additional information from the authentication and configuration
         * system to the backends. Backends can expose this information as container labels, environment variables, or
         * other places.
         *
         * required: false
         * in: body
         */
        metadata?: { [key: string]: definitions["metadata.Value"] };
        /**
         * @description RemoteAddress is the IP address and port of the user trying to authenticate.
         *
         * required: true
         * in: body
         */
        remoteAddress?: string;
        /**
         * @description Username is the username provided on login by the client. This may, but must not necessarily match the
         * authenticated username.
         *
         * required: true
         * in: body
         */
        username?: string;
    };
    "metadata.BinaryValue": {
        /**
         * @description Sensitive indicates that the metadata value contains sensitive data and should not be transmitted to
         * servers unnecessarily.
         *
         * required: false
         * in: body
         */
        sensitive?: boolean;
        /**
         * @description Value contains the binary data for the current value.
         *
         * required: true
         * in: body
         * swagger:strfmt: byte
         */
        value?: number[];
    };
    "metadata.Value": {
        /**
         * @description Sensitive indicates that the metadata value contains sensitive data and should not be transmitted to
         * servers unnecessarily.
         */
        sensitive?: boolean;
        /** @description Value contains the string for the current value. */
        value?: string;
    };
    "types.AuthRequest": {
        /**
         * @description IdentityToken is used to authenticate the user and get
         * an access token for the registry.
         * Required: true
         * @example a332139d39b89a241400013700e665a3
         */
        identity_token?: string;
        /**
         * @description Username  string `json:"username,omitempty"`
         * Password  string `json:"password,omitempty"`
         */
        public_key?: string;
    };
    "types.AuthResponse": {
        /**
         * @description An opaque token used to authenticate a user after a successful login
         * Required: true
         * @example a332139d39b89a241400013700e665a3
         */
        identity_token?: string;
        /**
         * @description The status of the authentication
         * Required: true
         * @example Login successfully
         */
        status?: string;
    };
    "types.Environment": {
        labels?: { [key: string]: string };
        name?: string;
        spec?: definitions["types.EnvironmentSpec"];
        status?: definitions["types.EnvironmentStatus"];
    };
    "types.EnvironmentCreateRequest": {
        labels?: { [key: string]: string };
        name?: string;
        spec?: definitions["types.EnvironmentSpec"];
        status?: definitions["types.EnvironmentStatus"];
    };
    "types.EnvironmentCreateResponse": {
        environment?: definitions["types.Environment"];
        /**
         * @description Warnings encountered when creating the pod
         * Required: true
         */
        warnings?: string[];
    };
    "types.EnvironmentGetResponse": {
        labels?: { [key: string]: string };
        name?: string;
        spec?: definitions["types.EnvironmentSpec"];
        status?: definitions["types.EnvironmentStatus"];
    };
    "types.EnvironmentListResponse": {
        items?: definitions["types.Environment"][];
    };
    "types.EnvironmentPort": {
        name?: string;
        port?: number;
    };
    "types.EnvironmentRemoveResponse": { [key: string]: unknown };
    "types.EnvironmentSpec": {
        cmd?: string[];
        env?: string[];
        image?: string;
        owner?: string;
        ports?: definitions["types.EnvironmentPort"][];
    };
    "types.EnvironmentStatus": {
        jupyter_addr?: string;
        phase?: string;
        rstudio_server_addr?: string;
    };
    "types.ImageGetResponse": {
        created?: number;
        digest?: string;
        labels?: { [key: string]: string };
        /** @example pytorch-cuda:dev */
        name?: string;
        size?: number;
    };
    "types.ImageListResponse": {
        items?: definitions["types.ImageMeta"][];
    };
    "types.ImageMeta": {
        created?: number;
        digest?: string;
        labels?: { [key: string]: string };
        /** @example pytorch-cuda:dev */
        name?: string;
        size?: number;
    };
}

export interface operations { }

export interface external { }