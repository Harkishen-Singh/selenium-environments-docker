#### global dependencies required

``` sudo npm install -g mocha selenium-browser chromedriver geckodriver ```

#### local dependencies

``` npm install ```

#### using mochawesome for visualisation of test cases

``` sudo npm install -g mochawesome ```

and executing the tests using reporters as

``` mocha <tests folder> --reporter mochawesome --reporter-options autoOpen=true ```
