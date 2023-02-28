'use strict';
(function () {

    function counter(count = 0) {

        const increase = () => {
            count += 1;
            return count;
        }

        const decrease = () => {
            count -= 1;
            return count;
        }

        const value = () => {
            return count;
        }
        return {
            increase,
            decrease,
            value
        }
    }
    const start = counter(4);

    console.log(start.increase())
    console.log(start.decrease())

})();