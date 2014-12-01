package com.improjam

class TwitterAuthToken {
    static belongsTo = [user: User]
    String access_token
    String secret
    Boolean active
    Date dateCreated

    static mapping = {
        datasource "trans"
    }




    static constraints = {
    }
}
