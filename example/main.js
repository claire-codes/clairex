( function( clairex ) {
    var result = document.getElementById( "result" );

    function writeQuoteToDom() {
        result.innerHTML = clairex.getFoo();
    }

    writeQuoteToDom();
} )( clairex );
