(function () {
    var defaults = {
            colWidth: 2,
        };

    // The actual plugin constructor
    function Equalizer(selector, timeout) {
        this.element = document.querySelector(selector);
        this._defaults = defaults;
        this.timeout = timeout;
        this.init();
    }
    // Additional function
    function getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    Equalizer.prototype = {

        init: function() {
            this.createColumns();
        },

        createColumns: function() {
            var colQuantity = Math.round(this.element.offsetWidth/this._defaults.colWidth) - 1,
                colHeight = this.element.offsetHeight,
                cols = new Array(colQuantity),
                domFragment = document.createDocumentFragment(),
                allSpanElements;

            for(var i = 0, len = cols.length; i < len; i++) {
                var spanElement = document.createElement('span');
                spanElement.className = 'col';
                spanElement.style.width = this._defaults.colWidth + 'px';
                spanElement.style.transition = 'height ' + this.timeout/1000/2 + 's ease';
                domFragment.appendChild(spanElement);
            }

            allSpanElements = domFragment.querySelectorAll('span');

            this.element.appendChild(domFragment);

            this.animateEqualizer(allSpanElements, this.timeout, colHeight, true);
        },

        animateEqualizer: function(allSpanElements, timeout, colHeight, isCentered) {
            var that = this;

            for(var i = 0, len = allSpanElements.length; i < len; i++) {
                var randomHeight = getRandom(0, colHeight);
                if (isCentered) {
                    allSpanElements[i].style.height = randomHeight + 'px';
                } else {
                    allSpanElements[i].style.height = colHeight/2 + 'px';
                }
            }

            setTimeout(function() {
               that.animateEqualizer(allSpanElements, timeout, colHeight, !isCentered)
            }, timeout/2);
        }
    };

    window.onload = function() {
      var ezualizer1 = new Equalizer('#eq_1 .equalizer', 1000),
          ezualizer2 = new Equalizer('#eq_2 .equalizer', 1000),
          ezualizer3 = new Equalizer('#eq_3 .equalizer', 1000);
    }
})();
