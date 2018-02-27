import fs from 'fs';
import stylelint from 'stylelint';
import test from 'ava';
import config from '../';
import standard from 'stylelint-config-standard';

const good = fs.readFileSync('./test/fixtures/Good.js', 'utf-8');

test('Nothing wrong with Good.js', t => {
  return stylelint.lint({code: good, config})
    .then(data => {
      const { errored, results } = data;
      const { warnings } = results[0];

      t.falsy(errored, 'no errored');

      t.is(warnings.length, 0);
    });
});

const bad = fs.readFileSync('./test/fixtures/Bad.js', 'utf-8');

test('Warnings in Bad.js', t => {
  return stylelint.lint({code: bad, config})
    .then(data => {
      const { errored, results } = data;
      const { warnings } = results[0];

      t.truthy(errored, 'errored');

      t.is(warnings.length, 3);

      t.is(warnings[0].rule, 'number-leading-zero');
      t.is(warnings[1].rule, 'declaration-colon-space-before');
      t.is(warnings[2].rule, 'indentation');
    });
});

test('stylelint config standard', t => {
  t.deepEqual(
    {
      "extends": "stylelint-config-recommended",
      "rules": {
        "at-rule-empty-line-before": [ "always", {
          except: [
            "blockless-after-same-name-blockless",
            "first-nested",
          ],
          ignore: ["after-comment"],
        } ],
        "at-rule-name-case": "lower",
        "at-rule-name-space-after": "always-single-line",
        "at-rule-semicolon-newline-after": "always",
        "block-closing-brace-empty-line-before": "never",
        "block-closing-brace-newline-after": "always",
        "block-closing-brace-newline-before": "always-multi-line",
        "block-closing-brace-space-before": "always-single-line",
        "block-opening-brace-newline-after": "always-multi-line",
        "block-opening-brace-space-after": "always-single-line",
        "block-opening-brace-space-before": "always",
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "comment-empty-line-before": [ "always", {
          except: ["first-nested"],
          ignore: ["stylelint-commands"],
        } ],
        "comment-whitespace-inside": "always",
        "custom-property-empty-line-before": [ "always", {
          except: [
            "after-custom-property",
            "first-nested",
          ],
          ignore: [
            "after-comment",
            "inside-single-line-block",
          ],
        } ],
        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-block-semicolon-newline-after": "always-multi-line",
        "declaration-block-semicolon-space-after": "always-single-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-single-line-max-declarations": 1,
        "declaration-block-trailing-semicolon": "always",
        "declaration-colon-newline-after": "always-multi-line",
        "declaration-colon-space-after": "always-single-line",
        "declaration-colon-space-before": "never",
        "declaration-empty-line-before": [ "always", {
          except: [
            "after-declaration",
            "first-nested",
          ],
          ignore: [
            "after-comment",
            "inside-single-line-block",
          ],
        } ],
        "function-comma-newline-after": "always-multi-line",
        "function-comma-space-after": "always-single-line",
        "function-comma-space-before": "never",
        "function-max-empty-lines": 0,
        "function-name-case": "lower",
        "function-parentheses-newline-inside": "always-multi-line",
        "function-parentheses-space-inside": "never-single-line",
        "function-whitespace-after": "always",
        "indentation": 2,
        "length-zero-no-unit": true,
        "max-empty-lines": 1,
        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-name-case": "lower",
        "media-feature-parentheses-space-inside": "never",
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",
        "media-query-list-comma-newline-after": "always-multi-line",
        "media-query-list-comma-space-after": "always-single-line",
        "media-query-list-comma-space-before": "never",
        "no-eol-whitespace": true,
        "no-missing-end-of-source-newline": true,
        "number-leading-zero": "always",
        "number-no-trailing-zeros": true,
        "property-case": "lower",
        "rule-empty-line-before": [ "always-multi-line", {
          except: ["first-nested"],
          ignore: ["after-comment"],
        } ],
        "selector-attribute-brackets-space-inside": "never",
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-operator-space-before": "never",
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-descendant-combinator-no-non-space": true,
        "selector-list-comma-newline-after": "always",
        "selector-list-comma-space-before": "never",
        "selector-max-empty-lines": 0,
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": "double",
        "selector-type-case": "lower",
        "unit-case": "lower",
        "value-list-comma-newline-after": "always-multi-line",
        "value-list-comma-space-after": "always-single-line",
        "value-list-comma-space-before": "never",
        "value-list-max-empty-lines": 0,
      },
    },
    standard
  );
});
