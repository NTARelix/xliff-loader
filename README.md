# Xliff Loader

Loads an Xliff file in Webpack and turns it into an object where `resname`s are keys and `target`s are values.

## Example

### ./i18n.xlf
```
<xliff>
    <file>
        <body>
            <trans-unit id="appFooter" resname="appFooter">
                <source>This is the app footer text</source>
                <target>C'est le texte du bas de page de l'application</target>
            </trans-unit>
        </body>
    </file>
</xliff>
```

### ./a.js
```
const i18n = require('xliff-loader!./i18n.xlf');
```

### Result

The following object is output

```
{
    "appFooter": "C'est le texte du bas de page de l'application"
}
```
