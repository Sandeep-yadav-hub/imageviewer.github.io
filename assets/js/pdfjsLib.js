/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2022 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */
!(function webpackUniversalModuleDefinition(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("pdfjs-dist/build/pdf", [], t)
    : "object" == typeof exports
    ? (exports["pdfjs-dist/build/pdf"] = t())
    : (e["pdfjs-dist/build/pdf"] = e.pdfjsLib = t());
})(this, function () {
  return (() => {
    "use strict";
    var __webpack_modules__ = [
        ,
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.VerbosityLevel =
            t.Util =
            t.UnknownErrorException =
            t.UnexpectedResponseException =
            t.UNSUPPORTED_FEATURES =
            t.TextRenderingMode =
            t.StreamType =
            t.RenderingIntentFlag =
            t.PermissionFlag =
            t.PasswordResponses =
            t.PasswordException =
            t.PageActionEventType =
            t.OPS =
            t.MissingPDFException =
            t.IsLittleEndianCached =
            t.IsEvalSupportedCached =
            t.InvalidPDFException =
            t.ImageKind =
            t.IDENTITY_MATRIX =
            t.FormatError =
            t.FontType =
            t.FONT_IDENTITY_MATRIX =
            t.DocumentActionEventType =
            t.CMapCompressionType =
            t.BaseException =
            t.AnnotationType =
            t.AnnotationStateModelType =
            t.AnnotationReviewState =
            t.AnnotationReplyType =
            t.AnnotationMode =
            t.AnnotationMarkedState =
            t.AnnotationFlag =
            t.AnnotationFieldFlag =
            t.AnnotationBorderStyleType =
            t.AnnotationActionEventType =
            t.AbortException =
              void 0;
          t.arrayByteLength = arrayByteLength;
          t.arraysToBytes = function arraysToBytes(e) {
            const t = e.length;
            if (1 === t && e[0] instanceof Uint8Array) return e[0];
            let n = 0;
            for (let s = 0; s < t; s++) n += arrayByteLength(e[s]);
            let s = 0;
            const r = new Uint8Array(n);
            for (let n = 0; n < t; n++) {
              let t = e[n];
              t instanceof Uint8Array ||
                (t =
                  "string" == typeof t ? stringToBytes(t) : new Uint8Array(t));
              const a = t.byteLength;
              r.set(t, s);
              s += a;
            }
            return r;
          };
          t.assert = function assert(e, t) {
            e || unreachable(t);
          };
          t.bytesToString = function bytesToString(e) {
            ("object" == typeof e && null !== e && void 0 !== e.length) ||
              unreachable("Invalid argument for bytesToString");
            const t = e.length,
              n = 8192;
            if (t < n) return String.fromCharCode.apply(null, e);
            const s = [];
            for (let r = 0; r < t; r += n) {
              const a = Math.min(r + n, t),
                i = e.subarray(r, a);
              s.push(String.fromCharCode.apply(null, i));
            }
            return s.join("");
          };
          t.createPromiseCapability = function createPromiseCapability() {
            const e = Object.create(null);
            let t = !1;
            Object.defineProperty(e, "settled", { get: () => t });
            e.promise = new Promise(function (n, s) {
              e.resolve = function (e) {
                t = !0;
                n(e);
              };
              e.reject = function (e) {
                t = !0;
                s(e);
              };
            });
            return e;
          };
          t.createValidAbsoluteUrl = function createValidAbsoluteUrl(
            e,
            t = null,
            n = null
          ) {
            if (!e) return null;
            try {
              if (n && "string" == typeof e) {
                if (n.addDefaultProtocol && e.startsWith("www.")) {
                  const t = e.match(/\./g);
                  t && t.length >= 2 && (e = `http://${e}`);
                }
                if (n.tryConvertEncoding)
                  try {
                    e = stringToUTF8String(e);
                  } catch (e) {}
              }
              const s = t ? new URL(e, t) : new URL(e);
              if (
                (function _isValidProtocol(e) {
                  if (!e) return !1;
                  switch (e.protocol) {
                    case "http:":
                    case "https:":
                    case "ftp:":
                    case "mailto:":
                    case "tel:":
                      return !0;
                    default:
                      return !1;
                  }
                })(s)
              )
                return s;
            } catch (e) {}
            return null;
          };
          t.escapeString = function escapeString(e) {
            return e.replace(/([()\\\n\r])/g, (e) =>
              "\n" === e ? "\\n" : "\r" === e ? "\\r" : `\\${e}`
            );
          };
          t.getModificationDate = function getModificationDate(e = new Date()) {
            return [
              e.getUTCFullYear().toString(),
              (e.getUTCMonth() + 1).toString().padStart(2, "0"),
              e.getUTCDate().toString().padStart(2, "0"),
              e.getUTCHours().toString().padStart(2, "0"),
              e.getUTCMinutes().toString().padStart(2, "0"),
              e.getUTCSeconds().toString().padStart(2, "0"),
            ].join("");
          };
          t.getVerbosityLevel = function getVerbosityLevel() {
            return r;
          };
          t.info = function info(e) {
            r >= s.INFOS && console.log(`Info: ${e}`);
          };
          t.isArrayBuffer = function isArrayBuffer(e) {
            return (
              "object" == typeof e && null !== e && void 0 !== e.byteLength
            );
          };
          t.isArrayEqual = function isArrayEqual(e, t) {
            if (e.length !== t.length) return !1;
            for (let n = 0, s = e.length; n < s; n++)
              if (e[n] !== t[n]) return !1;
            return !0;
          };
          t.isAscii = function isAscii(e) {
            return /^[\x00-\x7F]*$/.test(e);
          };
          t.isSameOrigin = function isSameOrigin(e, t) {
            let n;
            try {
              n = new URL(e);
              if (!n.origin || "null" === n.origin) return !1;
            } catch (e) {
              return !1;
            }
            const s = new URL(t, n);
            return n.origin === s.origin;
          };
          t.objectFromMap = function objectFromMap(e) {
            const t = Object.create(null);
            for (const [n, s] of e) t[n] = s;
            return t;
          };
          t.objectSize = function objectSize(e) {
            return Object.keys(e).length;
          };
          t.setVerbosityLevel = function setVerbosityLevel(e) {
            Number.isInteger(e) && (r = e);
          };
          t.shadow = shadow;
          t.string32 = function string32(e) {
            return String.fromCharCode(
              (e >> 24) & 255,
              (e >> 16) & 255,
              (e >> 8) & 255,
              255 & e
            );
          };
          t.stringToBytes = stringToBytes;
          t.stringToPDFString = function stringToPDFString(e) {
            if (e[0] >= "ï") {
              let t;
              "þ" === e[0] && "ÿ" === e[1]
                ? (t = "utf-16be")
                : "ÿ" === e[0] && "þ" === e[1]
                ? (t = "utf-16le")
                : "ï" === e[0] && "»" === e[1] && "¿" === e[2] && (t = "utf-8");
              if (t)
                try {
                  const n = new TextDecoder(t, { fatal: !0 }),
                    s = stringToBytes(e);
                  return n.decode(s);
                } catch (e) {
                  warn(`stringToPDFString: "${e}".`);
                }
            }
            const t = [];
            for (let n = 0, s = e.length; n < s; n++) {
              const s = c[e.charCodeAt(n)];
              t.push(s ? String.fromCharCode(s) : e.charAt(n));
            }
            return t.join("");
          };
          t.stringToUTF16BEString = function stringToUTF16BEString(e) {
            const t = ["þÿ"];
            for (let n = 0, s = e.length; n < s; n++) {
              const s = e.charCodeAt(n);
              t.push(
                String.fromCharCode((s >> 8) & 255),
                String.fromCharCode(255 & s)
              );
            }
            return t.join("");
          };
          t.stringToUTF8String = stringToUTF8String;
          t.unreachable = unreachable;
          t.utf8StringToString = function utf8StringToString(e) {
            return unescape(encodeURIComponent(e));
          };
          t.warn = warn;
          n(2);
          t.IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
          t.FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
          t.RenderingIntentFlag = {
            ANY: 1,
            DISPLAY: 2,
            PRINT: 4,
            ANNOTATIONS_FORMS: 16,
            ANNOTATIONS_STORAGE: 32,
            ANNOTATIONS_DISABLE: 64,
            OPLIST: 256,
          };
          t.AnnotationMode = {
            DISABLE: 0,
            ENABLE: 1,
            ENABLE_FORMS: 2,
            ENABLE_STORAGE: 3,
          };
          t.PermissionFlag = {
            PRINT: 4,
            MODIFY_CONTENTS: 8,
            COPY: 16,
            MODIFY_ANNOTATIONS: 32,
            FILL_INTERACTIVE_FORMS: 256,
            COPY_FOR_ACCESSIBILITY: 512,
            ASSEMBLE: 1024,
            PRINT_HIGH_QUALITY: 2048,
          };
          t.TextRenderingMode = {
            FILL: 0,
            STROKE: 1,
            FILL_STROKE: 2,
            INVISIBLE: 3,
            FILL_ADD_TO_PATH: 4,
            STROKE_ADD_TO_PATH: 5,
            FILL_STROKE_ADD_TO_PATH: 6,
            ADD_TO_PATH: 7,
            FILL_STROKE_MASK: 3,
            ADD_TO_PATH_FLAG: 4,
          };
          t.ImageKind = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 };
          t.AnnotationType = {
            TEXT: 1,
            LINK: 2,
            FREETEXT: 3,
            LINE: 4,
            SQUARE: 5,
            CIRCLE: 6,
            POLYGON: 7,
            POLYLINE: 8,
            HIGHLIGHT: 9,
            UNDERLINE: 10,
            SQUIGGLY: 11,
            STRIKEOUT: 12,
            STAMP: 13,
            CARET: 14,
            INK: 15,
            POPUP: 16,
            FILEATTACHMENT: 17,
            SOUND: 18,
            MOVIE: 19,
            WIDGET: 20,
            SCREEN: 21,
            PRINTERMARK: 22,
            TRAPNET: 23,
            WATERMARK: 24,
            THREED: 25,
            REDACT: 26,
          };
          t.AnnotationStateModelType = { MARKED: "Marked", REVIEW: "Review" };
          t.AnnotationMarkedState = { MARKED: "Marked", UNMARKED: "Unmarked" };
          t.AnnotationReviewState = {
            ACCEPTED: "Accepted",
            REJECTED: "Rejected",
            CANCELLED: "Cancelled",
            COMPLETED: "Completed",
            NONE: "None",
          };
          t.AnnotationReplyType = { GROUP: "Group", REPLY: "R" };
          t.AnnotationFlag = {
            INVISIBLE: 1,
            HIDDEN: 2,
            PRINT: 4,
            NOZOOM: 8,
            NOROTATE: 16,
            NOVIEW: 32,
            READONLY: 64,
            LOCKED: 128,
            TOGGLENOVIEW: 256,
            LOCKEDCONTENTS: 512,
          };
          t.AnnotationFieldFlag = {
            READONLY: 1,
            REQUIRED: 2,
            NOEXPORT: 4,
            MULTILINE: 4096,
            PASSWORD: 8192,
            NOTOGGLETOOFF: 16384,
            RADIO: 32768,
            PUSHBUTTON: 65536,
            COMBO: 131072,
            EDIT: 262144,
            SORT: 524288,
            FILESELECT: 1048576,
            MULTISELECT: 2097152,
            DONOTSPELLCHECK: 4194304,
            DONOTSCROLL: 8388608,
            COMB: 16777216,
            RICHTEXT: 33554432,
            RADIOSINUNISON: 33554432,
            COMMITONSELCHANGE: 67108864,
          };
          t.AnnotationBorderStyleType = {
            SOLID: 1,
            DASHED: 2,
            BEVELED: 3,
            INSET: 4,
            UNDERLINE: 5,
          };
          t.AnnotationActionEventType = {
            E: "Mouse Enter",
            X: "Mouse Exit",
            D: "Mouse Down",
            U: "Mouse Up",
            Fo: "Focus",
            Bl: "Blur",
            PO: "PageOpen",
            PC: "PageClose",
            PV: "PageVisible",
            PI: "PageInvisible",
            K: "Keystroke",
            F: "Format",
            V: "Validate",
            C: "Calculate",
          };
          t.DocumentActionEventType = {
            WC: "WillClose",
            WS: "WillSave",
            DS: "DidSave",
            WP: "WillPrint",
            DP: "DidPrint",
          };
          t.PageActionEventType = { O: "PageOpen", C: "PageClose" };
          t.StreamType = {
            UNKNOWN: "UNKNOWN",
            FLATE: "FLATE",
            LZW: "LZW",
            DCT: "DCT",
            JPX: "JPX",
            JBIG: "JBIG",
            A85: "A85",
            AHX: "AHX",
            CCF: "CCF",
            RLX: "RLX",
          };
          t.FontType = {
            UNKNOWN: "UNKNOWN",
            TYPE1: "TYPE1",
            TYPE1STANDARD: "TYPE1STANDARD",
            TYPE1C: "TYPE1C",
            CIDFONTTYPE0: "CIDFONTTYPE0",
            CIDFONTTYPE0C: "CIDFONTTYPE0C",
            TRUETYPE: "TRUETYPE",
            CIDFONTTYPE2: "CIDFONTTYPE2",
            TYPE3: "TYPE3",
            OPENTYPE: "OPENTYPE",
            TYPE0: "TYPE0",
            MMTYPE1: "MMTYPE1",
          };
          const s = { ERRORS: 0, WARNINGS: 1, INFOS: 5 };
          t.VerbosityLevel = s;
          t.CMapCompressionType = { NONE: 0, BINARY: 1, STREAM: 2 };
          t.OPS = {
            dependency: 1,
            setLineWidth: 2,
            setLineCap: 3,
            setLineJoin: 4,
            setMiterLimit: 5,
            setDash: 6,
            setRenderingIntent: 7,
            setFlatness: 8,
            setGState: 9,
            save: 10,
            restore: 11,
            transform: 12,
            moveTo: 13,
            lineTo: 14,
            curveTo: 15,
            curveTo2: 16,
            curveTo3: 17,
            closePath: 18,
            rectangle: 19,
            stroke: 20,
            closeStroke: 21,
            fill: 22,
            eoFill: 23,
            fillStroke: 24,
            eoFillStroke: 25,
            closeFillStroke: 26,
            closeEOFillStroke: 27,
            endPath: 28,
            clip: 29,
            eoClip: 30,
            beginText: 31,
            endText: 32,
            setCharSpacing: 33,
            setWordSpacing: 34,
            setHScale: 35,
            setLeading: 36,
            setFont: 37,
            setTextRenderingMode: 38,
            setTextRise: 39,
            moveText: 40,
            setLeadingMoveText: 41,
            setTextMatrix: 42,
            nextLine: 43,
            showText: 44,
            showSpacedText: 45,
            nextLineShowText: 46,
            nextLineSetSpacingShowText: 47,
            setCharWidth: 48,
            setCharWidthAndBounds: 49,
            setStrokeColorSpace: 50,
            setFillColorSpace: 51,
            setStrokeColor: 52,
            setStrokeColorN: 53,
            setFillColor: 54,
            setFillColorN: 55,
            setStrokeGray: 56,
            setFillGray: 57,
            setStrokeRGBColor: 58,
            setFillRGBColor: 59,
            setStrokeCMYKColor: 60,
            setFillCMYKColor: 61,
            shadingFill: 62,
            beginInlineImage: 63,
            beginImageData: 64,
            endInlineImage: 65,
            paintXObject: 66,
            markPoint: 67,
            markPointProps: 68,
            beginMarkedContent: 69,
            beginMarkedContentProps: 70,
            endMarkedContent: 71,
            beginCompat: 72,
            endCompat: 73,
            paintFormXObjectBegin: 74,
            paintFormXObjectEnd: 75,
            beginGroup: 76,
            endGroup: 77,
            beginAnnotations: 78,
            endAnnotations: 79,
            beginAnnotation: 80,
            endAnnotation: 81,
            paintJpegXObject: 82,
            paintImageMaskXObject: 83,
            paintImageMaskXObjectGroup: 84,
            paintImageXObject: 85,
            paintInlineImageXObject: 86,
            paintInlineImageXObjectGroup: 87,
            paintImageXObjectRepeat: 88,
            paintImageMaskXObjectRepeat: 89,
            paintSolidColorImageMask: 90,
            constructPath: 91,
          };
          t.UNSUPPORTED_FEATURES = {
            unknown: "unknown",
            forms: "forms",
            javaScript: "javaScript",
            signatures: "signatures",
            smask: "smask",
            shadingPattern: "shadingPattern",
            font: "font",
            errorTilingPattern: "errorTilingPattern",
            errorExtGState: "errorExtGState",
            errorXObject: "errorXObject",
            errorFontLoadType3: "errorFontLoadType3",
            errorFontState: "errorFontState",
            errorFontMissing: "errorFontMissing",
            errorFontTranslate: "errorFontTranslate",
            errorColorSpace: "errorColorSpace",
            errorOperatorList: "errorOperatorList",
            errorFontToUnicode: "errorFontToUnicode",
            errorFontLoadNative: "errorFontLoadNative",
            errorFontBuildPath: "errorFontBuildPath",
            errorFontGetPath: "errorFontGetPath",
            errorMarkedContent: "errorMarkedContent",
            errorContentSubStream: "errorContentSubStream",
          };
          t.PasswordResponses = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
          let r = s.WARNINGS;
          function warn(e) {
            r >= s.WARNINGS && console.log(`Warning: ${e}`);
          }
          function unreachable(e) {
            throw new Error(e);
          }
          function shadow(e, t, n) {
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !1,
            });
            return n;
          }
          const a = (function BaseExceptionClosure() {
            function BaseException(e, t) {
              this.constructor === BaseException &&
                unreachable("Cannot initialize BaseException.");
              this.message = e;
              this.name = t;
            }
            BaseException.prototype = new Error();
            BaseException.constructor = BaseException;
            return BaseException;
          })();
          t.BaseException = a;
          t.PasswordException = class PasswordException extends a {
            constructor(e, t) {
              super(e, "PasswordException");
              this.code = t;
            }
          };
          t.UnknownErrorException = class UnknownErrorException extends a {
            constructor(e, t) {
              super(e, "UnknownErrorException");
              this.details = t;
            }
          };
          t.InvalidPDFException = class InvalidPDFException extends a {
            constructor(e) {
              super(e, "InvalidPDFException");
            }
          };
          t.MissingPDFException = class MissingPDFException extends a {
            constructor(e) {
              super(e, "MissingPDFException");
            }
          };
          t.UnexpectedResponseException = class UnexpectedResponseException extends (
            a
          ) {
            constructor(e, t) {
              super(e, "UnexpectedResponseException");
              this.status = t;
            }
          };
          t.FormatError = class FormatError extends a {
            constructor(e) {
              super(e, "FormatError");
            }
          };
          t.AbortException = class AbortException extends a {
            constructor(e) {
              super(e, "AbortException");
            }
          };
          function stringToBytes(e) {
            "string" != typeof e &&
              unreachable("Invalid argument for stringToBytes");
            const t = e.length,
              n = new Uint8Array(t);
            for (let s = 0; s < t; ++s) n[s] = 255 & e.charCodeAt(s);
            return n;
          }
          function arrayByteLength(e) {
            if (void 0 !== e.length) return e.length;
            if (void 0 !== e.byteLength) return e.byteLength;
            unreachable("Invalid argument for arrayByteLength");
          }
          const i = {
            get value() {
              return shadow(
                this,
                "value",
                (function isLittleEndian() {
                  const e = new Uint8Array(4);
                  e[0] = 1;
                  return 1 === new Uint32Array(e.buffer, 0, 1)[0];
                })()
              );
            },
          };
          t.IsLittleEndianCached = i;
          const o = {
            get value() {
              return shadow(
                this,
                "value",
                (function isEvalSupported() {
                  try {
                    new Function("");
                    return !0;
                  } catch (e) {
                    return !1;
                  }
                })()
              );
            },
          };
          t.IsEvalSupportedCached = o;
          const l = [...Array(256).keys()].map((e) =>
            e.toString(16).padStart(2, "0")
          );
          class Util {
            static makeHexColor(e, t, n) {
              return `#${l[e]}${l[t]}${l[n]}`;
            }
            static transform(e, t) {
              return [
                e[0] * t[0] + e[2] * t[1],
                e[1] * t[0] + e[3] * t[1],
                e[0] * t[2] + e[2] * t[3],
                e[1] * t[2] + e[3] * t[3],
                e[0] * t[4] + e[2] * t[5] + e[4],
                e[1] * t[4] + e[3] * t[5] + e[5],
              ];
            }
            static applyTransform(e, t) {
              return [
                e[0] * t[0] + e[1] * t[2] + t[4],
                e[0] * t[1] + e[1] * t[3] + t[5],
              ];
            }
            static applyInverseTransform(e, t) {
              const n = t[0] * t[3] - t[1] * t[2];
              return [
                (e[0] * t[3] - e[1] * t[2] + t[2] * t[5] - t[4] * t[3]) / n,
                (-e[0] * t[1] + e[1] * t[0] + t[4] * t[1] - t[5] * t[0]) / n,
              ];
            }
            static getAxialAlignedBoundingBox(e, t) {
              const n = Util.applyTransform(e, t),
                s = Util.applyTransform(e.slice(2, 4), t),
                r = Util.applyTransform([e[0], e[3]], t),
                a = Util.applyTransform([e[2], e[1]], t);
              return [
                Math.min(n[0], s[0], r[0], a[0]),
                Math.min(n[1], s[1], r[1], a[1]),
                Math.max(n[0], s[0], r[0], a[0]),
                Math.max(n[1], s[1], r[1], a[1]),
              ];
            }
            static inverseTransform(e) {
              const t = e[0] * e[3] - e[1] * e[2];
              return [
                e[3] / t,
                -e[1] / t,
                -e[2] / t,
                e[0] / t,
                (e[2] * e[5] - e[4] * e[3]) / t,
                (e[4] * e[1] - e[5] * e[0]) / t,
              ];
            }
            static apply3dTransform(e, t) {
              return [
                e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
                e[3] * t[0] + e[4] * t[1] + e[5] * t[2],
                e[6] * t[0] + e[7] * t[1] + e[8] * t[2],
              ];
            }
            static singularValueDecompose2dScale(e) {
              const t = [e[0], e[2], e[1], e[3]],
                n = e[0] * t[0] + e[1] * t[2],
                s = e[0] * t[1] + e[1] * t[3],
                r = e[2] * t[0] + e[3] * t[2],
                a = e[2] * t[1] + e[3] * t[3],
                i = (n + a) / 2,
                o = Math.sqrt((n + a) ** 2 - 4 * (n * a - r * s)) / 2,
                l = i + o || 1,
                c = i - o || 1;
              return [Math.sqrt(l), Math.sqrt(c)];
            }
            static normalizeRect(e) {
              const t = e.slice(0);
              if (e[0] > e[2]) {
                t[0] = e[2];
                t[2] = e[0];
              }
              if (e[1] > e[3]) {
                t[1] = e[3];
                t[3] = e[1];
              }
              return t;
            }
            static intersect(e, t) {
              function compare(e, t) {
                return e - t;
              }
              const n = [e[0], e[2], t[0], t[2]].sort(compare),
                s = [e[1], e[3], t[1], t[3]].sort(compare),
                r = [];
              e = Util.normalizeRect(e);
              t = Util.normalizeRect(t);
              if (
                !(
                  (n[0] === e[0] && n[1] === t[0]) ||
                  (n[0] === t[0] && n[1] === e[0])
                )
              )
                return null;
              r[0] = n[1];
              r[2] = n[2];
              if (
                !(
                  (s[0] === e[1] && s[1] === t[1]) ||
                  (s[0] === t[1] && s[1] === e[1])
                )
              )
                return null;
              r[1] = s[1];
              r[3] = s[2];
              return r;
            }
            static bezierBoundingBox(e, t, n, s, r, a, i, o) {
              const l = [],
                c = [[], []];
              let h, d, u, p, g, f, m, _;
              for (let c = 0; c < 2; ++c) {
                if (0 === c) {
                  d = 6 * e - 12 * n + 6 * r;
                  h = -3 * e + 9 * n - 9 * r + 3 * i;
                  u = 3 * n - 3 * e;
                } else {
                  d = 6 * t - 12 * s + 6 * a;
                  h = -3 * t + 9 * s - 9 * a + 3 * o;
                  u = 3 * s - 3 * t;
                }
                if (Math.abs(h) < 1e-12) {
                  if (Math.abs(d) < 1e-12) continue;
                  p = -u / d;
                  0 < p && p < 1 && l.push(p);
                } else {
                  m = d * d - 4 * u * h;
                  _ = Math.sqrt(m);
                  if (!(m < 0)) {
                    g = (-d + _) / (2 * h);
                    0 < g && g < 1 && l.push(g);
                    f = (-d - _) / (2 * h);
                    0 < f && f < 1 && l.push(f);
                  }
                }
              }
              let A,
                b = l.length;
              const y = b;
              for (; b--; ) {
                p = l[b];
                A = 1 - p;
                c[0][b] =
                  A * A * A * e +
                  3 * A * A * p * n +
                  3 * A * p * p * r +
                  p * p * p * i;
                c[1][b] =
                  A * A * A * t +
                  3 * A * A * p * s +
                  3 * A * p * p * a +
                  p * p * p * o;
              }
              c[0][y] = e;
              c[1][y] = t;
              c[0][y + 1] = i;
              c[1][y + 1] = o;
              c[0].length = c[1].length = y + 2;
              return [
                Math.min(...c[0]),
                Math.min(...c[1]),
                Math.max(...c[0]),
                Math.max(...c[1]),
              ];
            }
          }
          t.Util = Util;
          const c = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224,
            8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222,
            8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352,
            376, 381, 305, 322, 339, 353, 382, 0, 8364,
          ];
          function stringToUTF8String(e) {
            return decodeURIComponent(escape(e));
          }
        },
        (e, t, n) => {
          n(3);
        },
        (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.isNodeJS = void 0;
          const n = !(
            "object" != typeof process ||
            process + "" != "[object process]" ||
            process.versions.nw ||
            (process.versions.electron &&
              process.type &&
              "browser" !== process.type)
          );
          t.isNodeJS = n;
        },
        (__unused_webpack_module, exports, __w_pdfjs_require__) => {
          Object.defineProperty(exports, "__esModule", { value: !0 });
          exports.build =
            exports.RenderTask =
            exports.PDFWorker =
            exports.PDFPageProxy =
            exports.PDFDocumentProxy =
            exports.PDFDocumentLoadingTask =
            exports.PDFDataRangeTransport =
            exports.LoopbackPort =
            exports.DefaultStandardFontDataFactory =
            exports.DefaultCanvasFactory =
            exports.DefaultCMapReaderFactory =
              void 0;
          exports.getDocument = getDocument;
          exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory;
          exports.version = void 0;
          var _util = __w_pdfjs_require__(1),
            _display_utils = __w_pdfjs_require__(5),
            _font_loader = __w_pdfjs_require__(7),
            _node_utils = __w_pdfjs_require__(8),
            _annotation_storage = __w_pdfjs_require__(9),
            _canvas = __w_pdfjs_require__(10),
            _worker_options = __w_pdfjs_require__(12),
            _is_node = __w_pdfjs_require__(3),
            _message_handler = __w_pdfjs_require__(13),
            _metadata = __w_pdfjs_require__(14),
            _optional_content_config = __w_pdfjs_require__(15),
            _transport_stream = __w_pdfjs_require__(16),
            _xfa_text = __w_pdfjs_require__(17);
          const DEFAULT_RANGE_CHUNK_SIZE = 65536,
            RENDERING_CANCELLED_TIMEOUT = 100,
            DefaultCanvasFactory = _is_node.isNodeJS
              ? _node_utils.NodeCanvasFactory
              : _display_utils.DOMCanvasFactory;
          exports.DefaultCanvasFactory = DefaultCanvasFactory;
          const DefaultCMapReaderFactory = _is_node.isNodeJS
            ? _node_utils.NodeCMapReaderFactory
            : _display_utils.DOMCMapReaderFactory;
          exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
          const DefaultStandardFontDataFactory = _is_node.isNodeJS
            ? _node_utils.NodeStandardFontDataFactory
            : _display_utils.DOMStandardFontDataFactory;
          exports.DefaultStandardFontDataFactory =
            DefaultStandardFontDataFactory;
          let createPDFNetworkStream;
          function setPDFNetworkStreamFactory(e) {
            createPDFNetworkStream = e;
          }
          function getDocument(e) {
            const t = new PDFDocumentLoadingTask();
            let n;
            if ("string" == typeof e || e instanceof URL) n = { url: e };
            else if ((0, _util.isArrayBuffer)(e)) n = { data: e };
            else if (e instanceof PDFDataRangeTransport) n = { range: e };
            else {
              if ("object" != typeof e)
                throw new Error(
                  "Invalid parameter in getDocument, need either string, URL, Uint8Array, or parameter object."
                );
              if (!e.url && !e.data && !e.range)
                throw new Error(
                  "Invalid parameter object: need either .data, .range or .url"
                );
              n = e;
            }
            const s = Object.create(null);
            let r = null,
              a = null;
            for (const e in n) {
              const t = n[e];
              switch (e) {
                case "url":
                  if ("undefined" != typeof window)
                    try {
                      s[e] = new URL(t, window.location).href;
                      continue;
                    } catch (e) {
                      (0, _util.warn)(`Cannot create valid URL: "${e}".`);
                    }
                  else if ("string" == typeof t || t instanceof URL) {
                    s[e] = t.toString();
                    continue;
                  }
                  throw new Error(
                    "Invalid PDF url data: either string or URL-object is expected in the url property."
                  );
                case "range":
                  r = t;
                  continue;
                case "worker":
                  a = t;
                  continue;
                case "data":
                  if (
                    _is_node.isNodeJS &&
                    "undefined" != typeof Buffer &&
                    t instanceof Buffer
                  )
                    s[e] = new Uint8Array(t);
                  else {
                    if (t instanceof Uint8Array) break;
                    if ("string" == typeof t)
                      s[e] = (0, _util.stringToBytes)(t);
                    else if (
                      "object" != typeof t ||
                      null === t ||
                      isNaN(t.length)
                    ) {
                      if (!(0, _util.isArrayBuffer)(t))
                        throw new Error(
                          "Invalid PDF binary data: either typed array, string, or array-like object is expected in the data property."
                        );
                      s[e] = new Uint8Array(t);
                    } else s[e] = new Uint8Array(t);
                  }
                  continue;
              }
              s[e] = t;
            }
            s.rangeChunkSize = s.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;
            s.CMapReaderFactory =
              s.CMapReaderFactory || DefaultCMapReaderFactory;
            s.StandardFontDataFactory =
              s.StandardFontDataFactory || DefaultStandardFontDataFactory;
            s.ignoreErrors = !0 !== s.stopAtErrors;
            s.fontExtraProperties = !0 === s.fontExtraProperties;
            s.pdfBug = !0 === s.pdfBug;
            s.enableXfa = !0 === s.enableXfa;
            ("string" != typeof s.docBaseUrl ||
              (0, _display_utils.isDataScheme)(s.docBaseUrl)) &&
              (s.docBaseUrl = null);
            Number.isInteger(s.maxImageSize) || (s.maxImageSize = -1);
            "boolean" != typeof s.useWorkerFetch &&
              (s.useWorkerFetch =
                s.CMapReaderFactory === _display_utils.DOMCMapReaderFactory &&
                s.StandardFontDataFactory ===
                  _display_utils.DOMStandardFontDataFactory);
            "boolean" != typeof s.isEvalSupported && (s.isEvalSupported = !0);
            "boolean" != typeof s.disableFontFace &&
              (s.disableFontFace = _is_node.isNodeJS);
            "boolean" != typeof s.useSystemFonts &&
              (s.useSystemFonts = !_is_node.isNodeJS && !s.disableFontFace);
            void 0 === s.ownerDocument &&
              (s.ownerDocument = globalThis.document);
            "boolean" != typeof s.disableRange && (s.disableRange = !1);
            "boolean" != typeof s.disableStream && (s.disableStream = !1);
            "boolean" != typeof s.disableAutoFetch && (s.disableAutoFetch = !1);
            (0, _util.setVerbosityLevel)(s.verbosity);
            if (!a) {
              const e = {
                verbosity: s.verbosity,
                port: _worker_options.GlobalWorkerOptions.workerPort,
              };
              a = e.port ? PDFWorker.fromPort(e) : new PDFWorker(e);
              t._worker = a;
            }
            const i = t.docId;
            a.promise
              .then(function () {
                if (t.destroyed) throw new Error("Loading aborted");
                const e = _fetchDocument(a, s, r, i),
                  n = new Promise(function (e) {
                    let t;
                    r
                      ? (t = new _transport_stream.PDFDataTransportStream(
                          {
                            length: s.length,
                            initialData: s.initialData,
                            progressiveDone: s.progressiveDone,
                            contentDispositionFilename:
                              s.contentDispositionFilename,
                            disableRange: s.disableRange,
                            disableStream: s.disableStream,
                          },
                          r
                        ))
                      : s.data ||
                        (t = createPDFNetworkStream({
                          url: s.url,
                          length: s.length,
                          httpHeaders: s.httpHeaders,
                          withCredentials: s.withCredentials,
                          rangeChunkSize: s.rangeChunkSize,
                          disableRange: s.disableRange,
                          disableStream: s.disableStream,
                        }));
                    e(t);
                  });
                return Promise.all([e, n]).then(function ([e, n]) {
                  if (t.destroyed) throw new Error("Loading aborted");
                  const r = new _message_handler.MessageHandler(i, e, a.port),
                    o = new WorkerTransport(r, t, n, s);
                  t._transport = o;
                  r.send("Ready", null);
                });
              })
              .catch(t._capability.reject);
            return t;
          }
          async function _fetchDocument(e, t, n, s) {
            if (e.destroyed) throw new Error("Worker was destroyed");
            if (n) {
              t.length = n.length;
              t.initialData = n.initialData;
              t.progressiveDone = n.progressiveDone;
              t.contentDispositionFilename = n.contentDispositionFilename;
            }
            const r = await e.messageHandler.sendWithPromise("GetDocRequest", {
              docId: s,
              apiVersion: "2.13.216",
              source: {
                data: t.data,
                url: t.url,
                password: t.password,
                disableAutoFetch: t.disableAutoFetch,
                rangeChunkSize: t.rangeChunkSize,
                length: t.length,
              },
              maxImageSize: t.maxImageSize,
              disableFontFace: t.disableFontFace,
              docBaseUrl: t.docBaseUrl,
              ignoreErrors: t.ignoreErrors,
              isEvalSupported: t.isEvalSupported,
              fontExtraProperties: t.fontExtraProperties,
              enableXfa: t.enableXfa,
              useSystemFonts: t.useSystemFonts,
              cMapUrl: t.useWorkerFetch ? t.cMapUrl : null,
              standardFontDataUrl: t.useWorkerFetch
                ? t.standardFontDataUrl
                : null,
            });
            if (e.destroyed) throw new Error("Worker was destroyed");
            return r;
          }
          class PDFDocumentLoadingTask {
            static get idCounters() {
              return (0, _util.shadow)(this, "idCounters", { doc: 0 });
            }
            constructor() {
              this._capability = (0, _util.createPromiseCapability)();
              this._transport = null;
              this._worker = null;
              this.docId = "d" + PDFDocumentLoadingTask.idCounters.doc++;
              this.destroyed = !1;
              this.onPassword = null;
              this.onProgress = null;
              this.onUnsupportedFeature = null;
            }
            get promise() {
              return this._capability.promise;
            }
            async destroy() {
              this.destroyed = !0;
              await this._transport?.destroy();
              this._transport = null;
              if (this._worker) {
                this._worker.destroy();
                this._worker = null;
              }
            }
          }
          exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
          class PDFDataRangeTransport {
            constructor(e, t, n = !1, s = null) {
              this.length = e;
              this.initialData = t;
              this.progressiveDone = n;
              this.contentDispositionFilename = s;
              this._rangeListeners = [];
              this._progressListeners = [];
              this._progressiveReadListeners = [];
              this._progressiveDoneListeners = [];
              this._readyCapability = (0, _util.createPromiseCapability)();
            }
            addRangeListener(e) {
              this._rangeListeners.push(e);
            }
            addProgressListener(e) {
              this._progressListeners.push(e);
            }
            addProgressiveReadListener(e) {
              this._progressiveReadListeners.push(e);
            }
            addProgressiveDoneListener(e) {
              this._progressiveDoneListeners.push(e);
            }
            onDataRange(e, t) {
              for (const n of this._rangeListeners) n(e, t);
            }
            onDataProgress(e, t) {
              this._readyCapability.promise.then(() => {
                for (const n of this._progressListeners) n(e, t);
              });
            }
            onDataProgressiveRead(e) {
              this._readyCapability.promise.then(() => {
                for (const t of this._progressiveReadListeners) t(e);
              });
            }
            onDataProgressiveDone() {
              this._readyCapability.promise.then(() => {
                for (const e of this._progressiveDoneListeners) e();
              });
            }
            transportReady() {
              this._readyCapability.resolve();
            }
            requestDataRange(e, t) {
              (0, _util.unreachable)(
                "Abstract method PDFDataRangeTransport.requestDataRange"
              );
            }
            abort() {}
          }
          exports.PDFDataRangeTransport = PDFDataRangeTransport;
          class PDFDocumentProxy {
            constructor(e, t) {
              this._pdfInfo = e;
              this._transport = t;
              Object.defineProperty(this, "fingerprint", {
                get() {
                  (0, _display_utils.deprecated)(
                    "`PDFDocumentProxy.fingerprint`, please use `PDFDocumentProxy.fingerprints` instead."
                  );
                  return this.fingerprints[0];
                },
              });
              Object.defineProperty(this, "getStats", {
                value: async () => {
                  (0, _display_utils.deprecated)(
                    "`PDFDocumentProxy.getStats`, please use the `PDFDocumentProxy.stats`-getter instead."
                  );
                  return this.stats || { streamTypes: {}, fontTypes: {} };
                },
              });
            }
            get annotationStorage() {
              return this._transport.annotationStorage;
            }
            get numPages() {
              return this._pdfInfo.numPages;
            }
            get fingerprints() {
              return this._pdfInfo.fingerprints;
            }
            get stats() {
              return this._transport.stats;
            }
            get isPureXfa() {
              return !!this._transport._htmlForXfa;
            }
            get allXfaHtml() {
              return this._transport._htmlForXfa;
            }
            getPage(e) {
              return this._transport.getPage(e);
            }
            getPageIndex(e) {
              return this._transport.getPageIndex(e);
            }
            getDestinations() {
              return this._transport.getDestinations();
            }
            getDestination(e) {
              return this._transport.getDestination(e);
            }
            getPageLabels() {
              return this._transport.getPageLabels();
            }
            getPageLayout() {
              return this._transport.getPageLayout();
            }
            getPageMode() {
              return this._transport.getPageMode();
            }
            getViewerPreferences() {
              return this._transport.getViewerPreferences();
            }
            getOpenAction() {
              return this._transport.getOpenAction();
            }
            getAttachments() {
              return this._transport.getAttachments();
            }
            getJavaScript() {
              return this._transport.getJavaScript();
            }
            getJSActions() {
              return this._transport.getDocJSActions();
            }
            getOutline() {
              return this._transport.getOutline();
            }
            getOptionalContentConfig() {
              return this._transport.getOptionalContentConfig();
            }
            getPermissions() {
              return this._transport.getPermissions();
            }
            getMetadata() {
              return this._transport.getMetadata();
            }
            getMarkInfo() {
              return this._transport.getMarkInfo();
            }
            getData() {
              return this._transport.getData();
            }
            getDownloadInfo() {
              return this._transport.downloadInfoCapability.promise;
            }
            cleanup(e = !1) {
              return this._transport.startCleanup(e || this.isPureXfa);
            }
            destroy() {
              return this.loadingTask.destroy();
            }
            get loadingParams() {
              return this._transport.loadingParams;
            }
            get loadingTask() {
              return this._transport.loadingTask;
            }
            saveDocument() {
              this._transport.annotationStorage.size <= 0 &&
                (0, _display_utils.deprecated)(
                  "saveDocument called while `annotationStorage` is empty, please use the getData-method instead."
                );
              return this._transport.saveDocument();
            }
            getFieldObjects() {
              return this._transport.getFieldObjects();
            }
            hasJSActions() {
              return this._transport.hasJSActions();
            }
            getCalculationOrderIds() {
              return this._transport.getCalculationOrderIds();
            }
          }
          exports.PDFDocumentProxy = PDFDocumentProxy;
          class PDFPageProxy {
            constructor(e, t, n, s, r = !1) {
              this._pageIndex = e;
              this._pageInfo = t;
              this._ownerDocument = s;
              this._transport = n;
              this._stats = r ? new _display_utils.StatTimer() : null;
              this._pdfBug = r;
              this.commonObjs = n.commonObjs;
              this.objs = new PDFObjects();
              this.cleanupAfterRender = !1;
              this.pendingCleanup = !1;
              this._intentStates = new Map();
              this._annotationPromises = new Map();
              this.destroyed = !1;
            }
            get pageNumber() {
              return this._pageIndex + 1;
            }
            get rotate() {
              return this._pageInfo.rotate;
            }
            get ref() {
              return this._pageInfo.ref;
            }
            get userUnit() {
              return this._pageInfo.userUnit;
            }
            get view() {
              return this._pageInfo.view;
            }
            getViewport({
              scale: e,
              rotation: t = this.rotate,
              offsetX: n = 0,
              offsetY: s = 0,
              dontFlip: r = !1,
            } = {}) {
              return new _display_utils.PageViewport({
                viewBox: this.view,
                scale: e,
                rotation: t,
                offsetX: n,
                offsetY: s,
                dontFlip: r,
              });
            }
            getAnnotations({ intent: e = "display" } = {}) {
              const t = this._transport.getRenderingIntent(e);
              let n = this._annotationPromises.get(t.cacheKey);
              if (!n) {
                n = this._transport.getAnnotations(
                  this._pageIndex,
                  t.renderingIntent
                );
                this._annotationPromises.set(t.cacheKey, n);
                n = n.then((e) => {
                  for (const t of e) {
                    void 0 !== t.titleObj &&
                      Object.defineProperty(t, "title", {
                        get() {
                          (0, _display_utils.deprecated)(
                            "`title`-property on annotation, please use `titleObj` instead."
                          );
                          return t.titleObj.str;
                        },
                      });
                    void 0 !== t.contentsObj &&
                      Object.defineProperty(t, "contents", {
                        get() {
                          (0, _display_utils.deprecated)(
                            "`contents`-property on annotation, please use `contentsObj` instead."
                          );
                          return t.contentsObj.str;
                        },
                      });
                  }
                  return e;
                });
              }
              return n;
            }
            getJSActions() {
              return (this._jsActionsPromise ||=
                this._transport.getPageJSActions(this._pageIndex));
            }
            async getXfa() {
              return (
                this._transport._htmlForXfa?.children[this._pageIndex] || null
              );
            }
            render({
              canvasContext: e,
              viewport: t,
              intent: n = "display",
              annotationMode: s = _util.AnnotationMode.ENABLE,
              transform: r = null,
              imageLayer: a = null,
              canvasFactory: i = null,
              background: o = null,
              optionalContentConfigPromise: l = null,
              annotationCanvasMap: c = null,
            }) {
              if (void 0 !== arguments[0]?.renderInteractiveForms) {
                (0, _display_utils.deprecated)(
                  "render no longer accepts the `renderInteractiveForms`-option, please use the `annotationMode`-option instead."
                );
                !0 === arguments[0].renderInteractiveForms &&
                  s === _util.AnnotationMode.ENABLE &&
                  (s = _util.AnnotationMode.ENABLE_FORMS);
              }
              if (void 0 !== arguments[0]?.includeAnnotationStorage) {
                (0, _display_utils.deprecated)(
                  "render no longer accepts the `includeAnnotationStorage`-option, please use the `annotationMode`-option instead."
                );
                !0 === arguments[0].includeAnnotationStorage &&
                  s === _util.AnnotationMode.ENABLE &&
                  (s = _util.AnnotationMode.ENABLE_STORAGE);
              }
              this._stats && this._stats.time("Overall");
              const h = this._transport.getRenderingIntent(n, s);
              this.pendingCleanup = !1;
              l || (l = this._transport.getOptionalContentConfig());
              let d = this._intentStates.get(h.cacheKey);
              if (!d) {
                d = Object.create(null);
                this._intentStates.set(h.cacheKey, d);
              }
              if (d.streamReaderCancelTimeout) {
                clearTimeout(d.streamReaderCancelTimeout);
                d.streamReaderCancelTimeout = null;
              }
              const u =
                  i ||
                  new DefaultCanvasFactory({
                    ownerDocument: this._ownerDocument,
                  }),
                p = !!(h.renderingIntent & _util.RenderingIntentFlag.PRINT);
              if (!d.displayReadyCapability) {
                d.displayReadyCapability = (0, _util.createPromiseCapability)();
                d.operatorList = { fnArray: [], argsArray: [], lastChunk: !1 };
                this._stats && this._stats.time("Page Request");
                this._pumpOperatorList(h);
              }
              const complete = (e) => {
                  d.renderTasks.delete(g);
                  (this.cleanupAfterRender || p) && (this.pendingCleanup = !0);
                  this._tryCleanup();
                  if (e) {
                    g.capability.reject(e);
                    this._abortOperatorList({
                      intentState: d,
                      reason: e instanceof Error ? e : new Error(e),
                    });
                  } else g.capability.resolve();
                  if (this._stats) {
                    this._stats.timeEnd("Rendering");
                    this._stats.timeEnd("Overall");
                  }
                },
                g = new InternalRenderTask({
                  callback: complete,
                  params: {
                    canvasContext: e,
                    viewport: t,
                    transform: r,
                    imageLayer: a,
                    background: o,
                  },
                  objs: this.objs,
                  commonObjs: this.commonObjs,
                  annotationCanvasMap: c,
                  operatorList: d.operatorList,
                  pageIndex: this._pageIndex,
                  canvasFactory: u,
                  useRequestAnimationFrame: !p,
                  pdfBug: this._pdfBug,
                });
              (d.renderTasks ||= new Set()).add(g);
              const f = g.task;
              Promise.all([d.displayReadyCapability.promise, l])
                .then(([e, t]) => {
                  if (this.pendingCleanup) complete();
                  else {
                    this._stats && this._stats.time("Rendering");
                    g.initializeGraphics({
                      transparency: e,
                      optionalContentConfig: t,
                    });
                    g.operatorListChanged();
                  }
                })
                .catch(complete);
              return f;
            }
            getOperatorList({
              intent: e = "display",
              annotationMode: t = _util.AnnotationMode.ENABLE,
            } = {}) {
              const n = this._transport.getRenderingIntent(e, t, !0);
              let s,
                r = this._intentStates.get(n.cacheKey);
              if (!r) {
                r = Object.create(null);
                this._intentStates.set(n.cacheKey, r);
              }
              if (!r.opListReadCapability) {
                s = Object.create(null);
                s.operatorListChanged = function operatorListChanged() {
                  if (r.operatorList.lastChunk) {
                    r.opListReadCapability.resolve(r.operatorList);
                    r.renderTasks.delete(s);
                  }
                };
                r.opListReadCapability = (0, _util.createPromiseCapability)();
                (r.renderTasks ||= new Set()).add(s);
                r.operatorList = { fnArray: [], argsArray: [], lastChunk: !1 };
                this._stats && this._stats.time("Page Request");
                this._pumpOperatorList(n);
              }
              return r.opListReadCapability.promise;
            }
            streamTextContent({
              disableCombineTextItems: e = !1,
              includeMarkedContent: t = !1,
            } = {}) {
              return this._transport.messageHandler.sendWithStream(
                "GetTextContent",
                {
                  pageIndex: this._pageIndex,
                  combineTextItems: !0 !== e,
                  includeMarkedContent: !0 === t,
                },
                { highWaterMark: 100, size: (e) => e.items.length }
              );
            }
            getTextContent(e = {}) {
              if (this._transport._htmlForXfa)
                return this.getXfa().then((e) =>
                  _xfa_text.XfaText.textContent(e)
                );
              const t = this.streamTextContent(e);
              return new Promise(function (e, n) {
                const s = t.getReader(),
                  r = { items: [], styles: Object.create(null) };
                !(function pump() {
                  s.read().then(function ({ value: t, done: n }) {
                    if (n) e(r);
                    else {
                      Object.assign(r.styles, t.styles);
                      r.items.push(...t.items);
                      pump();
                    }
                  }, n);
                })();
              });
            }
            getStructTree() {
              return (this._structTreePromise ||= this._transport.getStructTree(
                this._pageIndex
              ));
            }
            _destroy() {
              this.destroyed = !0;
              const e = [];
              for (const t of this._intentStates.values()) {
                this._abortOperatorList({
                  intentState: t,
                  reason: new Error("Page was destroyed."),
                  force: !0,
                });
                if (!t.opListReadCapability)
                  for (const n of t.renderTasks) {
                    e.push(n.completed);
                    n.cancel();
                  }
              }
              this.objs.clear();
              this._annotationPromises.clear();
              this._jsActionsPromise = null;
              this._structTreePromise = null;
              this.pendingCleanup = !1;
              return Promise.all(e);
            }
            cleanup(e = !1) {
              this.pendingCleanup = !0;
              return this._tryCleanup(e);
            }
            _tryCleanup(e = !1) {
              if (!this.pendingCleanup) return !1;
              for (const {
                renderTasks: e,
                operatorList: t,
              } of this._intentStates.values())
                if (e.size > 0 || !t.lastChunk) return !1;
              this._intentStates.clear();
              this.objs.clear();
              this._annotationPromises.clear();
              this._jsActionsPromise = null;
              this._structTreePromise = null;
              e &&
                this._stats &&
                (this._stats = new _display_utils.StatTimer());
              this.pendingCleanup = !1;
              return !0;
            }
            _startRenderPage(e, t) {
              const n = this._intentStates.get(t);
              if (n) {
                this._stats && this._stats.timeEnd("Page Request");
                n.displayReadyCapability && n.displayReadyCapability.resolve(e);
              }
            }
            _renderPageChunk(e, t) {
              for (let n = 0, s = e.length; n < s; n++) {
                t.operatorList.fnArray.push(e.fnArray[n]);
                t.operatorList.argsArray.push(e.argsArray[n]);
              }
              t.operatorList.lastChunk = e.lastChunk;
              for (const e of t.renderTasks) e.operatorListChanged();
              e.lastChunk && this._tryCleanup();
            }
            _pumpOperatorList({ renderingIntent: e, cacheKey: t }) {
              const n = this._transport.messageHandler
                  .sendWithStream("GetOperatorList", {
                    pageIndex: this._pageIndex,
                    intent: e,
                    cacheKey: t,
                    annotationStorage:
                      e & _util.RenderingIntentFlag.ANNOTATIONS_STORAGE
                        ? this._transport.annotationStorage.serializable
                        : null,
                  })
                  .getReader(),
                s = this._intentStates.get(t);
              s.streamReader = n;
              const pump = () => {
                n.read().then(
                  ({ value: e, done: t }) => {
                    if (t) s.streamReader = null;
                    else if (!this._transport.destroyed) {
                      this._renderPageChunk(e, s);
                      pump();
                    }
                  },
                  (e) => {
                    s.streamReader = null;
                    if (!this._transport.destroyed) {
                      if (s.operatorList) {
                        s.operatorList.lastChunk = !0;
                        for (const e of s.renderTasks) e.operatorListChanged();
                        this._tryCleanup();
                      }
                      if (s.displayReadyCapability)
                        s.displayReadyCapability.reject(e);
                      else {
                        if (!s.opListReadCapability) throw e;
                        s.opListReadCapability.reject(e);
                      }
                    }
                  }
                );
              };
              pump();
            }
            _abortOperatorList({ intentState: e, reason: t, force: n = !1 }) {
              if (e.streamReader) {
                if (!n) {
                  if (e.renderTasks.size > 0) return;
                  if (t instanceof _display_utils.RenderingCancelledException) {
                    e.streamReaderCancelTimeout = setTimeout(() => {
                      this._abortOperatorList({
                        intentState: e,
                        reason: t,
                        force: !0,
                      });
                      e.streamReaderCancelTimeout = null;
                    }, RENDERING_CANCELLED_TIMEOUT);
                    return;
                  }
                }
                e.streamReader
                  .cancel(new _util.AbortException(t.message))
                  .catch(() => {});
                e.streamReader = null;
                if (!this._transport.destroyed) {
                  for (const [t, n] of this._intentStates)
                    if (n === e) {
                      this._intentStates.delete(t);
                      break;
                    }
                  this.cleanup();
                }
              }
            }
            get stats() {
              return this._stats;
            }
          }
          exports.PDFPageProxy = PDFPageProxy;
          class LoopbackPort {
            constructor() {
              this._listeners = [];
              this._deferred = Promise.resolve();
            }
            postMessage(e, t) {
              const n = { data: structuredClone(e, t) };
              this._deferred.then(() => {
                for (const e of this._listeners) e.call(this, n);
              });
            }
            addEventListener(e, t) {
              this._listeners.push(t);
            }
            removeEventListener(e, t) {
              const n = this._listeners.indexOf(t);
              this._listeners.splice(n, 1);
            }
            terminate() {
              this._listeners.length = 0;
            }
          }
          exports.LoopbackPort = LoopbackPort;
          const PDFWorkerUtil = {
            isWorkerDisabled: !1,
            fallbackWorkerSrc: null,
            fakeWorkerId: 0,
          };
          if (_is_node.isNodeJS && "function" == typeof require) {
            PDFWorkerUtil.isWorkerDisabled = !0;
            PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js";
          } else if ("object" == typeof document) {
            const e = document?.currentScript?.src;
            e &&
              (PDFWorkerUtil.fallbackWorkerSrc = e.replace(
                /(\.(?:min\.)?js)(\?.*)?$/i,
                ".worker$1$2"
              ));
          }
          PDFWorkerUtil.createCDNWrapper = function (e) {
            const t = `importScripts("${e}");`;
            return URL.createObjectURL(new Blob([t]));
          };
          class PDFWorker {
            static get _workerPorts() {
              return (0, _util.shadow)(this, "_workerPorts", new WeakMap());
            }
            constructor({
              name: e = null,
              port: t = null,
              verbosity: n = (0, _util.getVerbosityLevel)(),
            } = {}) {
              if (t && PDFWorker._workerPorts.has(t))
                throw new Error("Cannot use more than one PDFWorker per port.");
              this.name = e;
              this.destroyed = !1;
              this.verbosity = n;
              this._readyCapability = (0, _util.createPromiseCapability)();
              this._port = null;
              this._webWorker = null;
              this._messageHandler = null;
              if (t) {
                PDFWorker._workerPorts.set(t, this);
                this._initializeFromPort(t);
              } else this._initialize();
            }
            get promise() {
              return this._readyCapability.promise;
            }
            get port() {
              return this._port;
            }
            get messageHandler() {
              return this._messageHandler;
            }
            _initializeFromPort(e) {
              this._port = e;
              this._messageHandler = new _message_handler.MessageHandler(
                "main",
                "worker",
                e
              );
              this._messageHandler.on("ready", function () {});
              this._readyCapability.resolve();
            }
            _initialize() {
              if (
                "undefined" != typeof Worker &&
                !PDFWorkerUtil.isWorkerDisabled &&
                !PDFWorker._mainThreadWorkerMessageHandler
              ) {
                let e = PDFWorker.workerSrc;
                try {
                  (0, _util.isSameOrigin)(window.location.href, e) ||
                    (e = PDFWorkerUtil.createCDNWrapper(
                      new URL(e, window.location).href
                    ));
                  const t = new Worker(e),
                    n = new _message_handler.MessageHandler(
                      "main",
                      "worker",
                      t
                    ),
                    terminateEarly = () => {
                      t.removeEventListener("error", onWorkerError);
                      n.destroy();
                      t.terminate();
                      this.destroyed
                        ? this._readyCapability.reject(
                            new Error("Worker was destroyed")
                          )
                        : this._setupFakeWorker();
                    },
                    onWorkerError = () => {
                      this._webWorker || terminateEarly();
                    };
                  t.addEventListener("error", onWorkerError);
                  n.on("test", (e) => {
                    t.removeEventListener("error", onWorkerError);
                    if (this.destroyed) terminateEarly();
                    else if (e) {
                      this._messageHandler = n;
                      this._port = t;
                      this._webWorker = t;
                      this._readyCapability.resolve();
                      n.send("configure", { verbosity: this.verbosity });
                    } else {
                      this._setupFakeWorker();
                      n.destroy();
                      t.terminate();
                    }
                  });
                  n.on("ready", (e) => {
                    t.removeEventListener("error", onWorkerError);
                    if (this.destroyed) terminateEarly();
                    else
                      try {
                        sendTest();
                      } catch (e) {
                        this._setupFakeWorker();
                      }
                  });
                  const sendTest = () => {
                    const e = new Uint8Array([255]);
                    try {
                      n.send("test", e, [e.buffer]);
                    } catch (t) {
                      (0, _util.warn)("Cannot use postMessage transfers.");
                      e[0] = 0;
                      n.send("test", e);
                    }
                  };
                  sendTest();
                  return;
                } catch (e) {
                  (0, _util.info)("The worker has been disabled.");
                }
              }
              this._setupFakeWorker();
            }
            _setupFakeWorker() {
              if (!PDFWorkerUtil.isWorkerDisabled) {
                (0, _util.warn)("Setting up fake worker.");
                PDFWorkerUtil.isWorkerDisabled = !0;
              }
              PDFWorker._setupFakeWorkerGlobal
                .then((e) => {
                  if (this.destroyed) {
                    this._readyCapability.reject(
                      new Error("Worker was destroyed")
                    );
                    return;
                  }
                  const t = new LoopbackPort();
                  this._port = t;
                  const n = "fake" + PDFWorkerUtil.fakeWorkerId++,
                    s = new _message_handler.MessageHandler(
                      n + "_worker",
                      n,
                      t
                    );
                  e.setup(s, t);
                  const r = new _message_handler.MessageHandler(
                    n,
                    n + "_worker",
                    t
                  );
                  this._messageHandler = r;
                  this._readyCapability.resolve();
                  r.send("configure", { verbosity: this.verbosity });
                })
                .catch((e) => {
                  this._readyCapability.reject(
                    new Error(`Setting up fake worker failed: "${e.message}".`)
                  );
                });
            }
            destroy() {
              this.destroyed = !0;
              if (this._webWorker) {
                this._webWorker.terminate();
                this._webWorker = null;
              }
              PDFWorker._workerPorts.delete(this._port);
              this._port = null;
              if (this._messageHandler) {
                this._messageHandler.destroy();
                this._messageHandler = null;
              }
            }
            static fromPort(e) {
              if (!e?.port)
                throw new Error(
                  "PDFWorker.fromPort - invalid method signature."
                );
              return this._workerPorts.has(e.port)
                ? this._workerPorts.get(e.port)
                : new PDFWorker(e);
            }
            static get workerSrc() {
              if (_worker_options.GlobalWorkerOptions.workerSrc)
                return _worker_options.GlobalWorkerOptions.workerSrc;
              if (null !== PDFWorkerUtil.fallbackWorkerSrc) {
                _is_node.isNodeJS ||
                  (0, _display_utils.deprecated)(
                    'No "GlobalWorkerOptions.workerSrc" specified.'
                  );
                return PDFWorkerUtil.fallbackWorkerSrc;
              }
              throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
            }
            static get _mainThreadWorkerMessageHandler() {
              try {
                return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
              } catch (e) {
                return null;
              }
            }
            static get _setupFakeWorkerGlobal() {
              const loader = async () => {
                const mainWorkerMessageHandler =
                  this._mainThreadWorkerMessageHandler;
                if (mainWorkerMessageHandler) return mainWorkerMessageHandler;
                if (_is_node.isNodeJS && "function" == typeof require) {
                  const worker = eval("require")(this.workerSrc);
                  return worker.WorkerMessageHandler;
                }
                await (0, _display_utils.loadScript)(this.workerSrc);
                return window.pdfjsWorker.WorkerMessageHandler;
              };
              return (0, _util.shadow)(
                this,
                "_setupFakeWorkerGlobal",
                loader()
              );
            }
          }
          exports.PDFWorker = PDFWorker;
          PDFWorker.getWorkerSrc = function () {
            (0, _display_utils.deprecated)(
              "`PDFWorker.getWorkerSrc()`, please use `PDFWorker.workerSrc` instead."
            );
            return this.workerSrc;
          };
          class WorkerTransport {
            #e = null;
            #t = new Map();
            #n = new Map();
            #s = null;
            constructor(e, t, n, s) {
              this.messageHandler = e;
              this.loadingTask = t;
              this.commonObjs = new PDFObjects();
              this.fontLoader = new _font_loader.FontLoader({
                docId: t.docId,
                onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                ownerDocument: s.ownerDocument,
                styleElement: s.styleElement,
              });
              this._params = s;
              if (!s.useWorkerFetch) {
                this.CMapReaderFactory = new s.CMapReaderFactory({
                  baseUrl: s.cMapUrl,
                  isCompressed: s.cMapPacked,
                });
                this.StandardFontDataFactory = new s.StandardFontDataFactory({
                  baseUrl: s.standardFontDataUrl,
                });
              }
              this.destroyed = !1;
              this.destroyCapability = null;
              this._passwordCapability = null;
              this._networkStream = n;
              this._fullReader = null;
              this._lastProgress = null;
              this.downloadInfoCapability = (0,
              _util.createPromiseCapability)();
              this.setupMessageHandler();
            }
            get annotationStorage() {
              return (0, _util.shadow)(
                this,
                "annotationStorage",
                new _annotation_storage.AnnotationStorage()
              );
            }
            get stats() {
              return this.#e;
            }
            getRenderingIntent(e, t = _util.AnnotationMode.ENABLE, n = !1) {
              let s = _util.RenderingIntentFlag.DISPLAY,
                r = "";
              switch (e) {
                case "any":
                  s = _util.RenderingIntentFlag.ANY;
                  break;
                case "display":
                  break;
                case "print":
                  s = _util.RenderingIntentFlag.PRINT;
                  break;
                default:
                  (0, _util.warn)(`getRenderingIntent - invalid intent: ${e}`);
              }
              switch (t) {
                case _util.AnnotationMode.DISABLE:
                  s += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                  break;
                case _util.AnnotationMode.ENABLE:
                  break;
                case _util.AnnotationMode.ENABLE_FORMS:
                  s += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
                  break;
                case _util.AnnotationMode.ENABLE_STORAGE:
                  s += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE;
                  r = this.annotationStorage.lastModified;
                  break;
                default:
                  (0, _util.warn)(
                    `getRenderingIntent - invalid annotationMode: ${t}`
                  );
              }
              n && (s += _util.RenderingIntentFlag.OPLIST);
              return { renderingIntent: s, cacheKey: `${s}_${r}` };
            }
            destroy() {
              if (this.destroyCapability) return this.destroyCapability.promise;
              this.destroyed = !0;
              this.destroyCapability = (0, _util.createPromiseCapability)();
              this._passwordCapability &&
                this._passwordCapability.reject(
                  new Error("Worker was destroyed during onPassword callback")
                );
              const e = [];
              for (const t of this.#t.values()) e.push(t._destroy());
              this.#t.clear();
              this.#n.clear();
              this.hasOwnProperty("annotationStorage") &&
                this.annotationStorage.resetModified();
              const t = this.messageHandler.sendWithPromise("Terminate", null);
              e.push(t);
              Promise.all(e).then(() => {
                this.commonObjs.clear();
                this.fontLoader.clear();
                this.#s = null;
                this._getFieldObjectsPromise = null;
                this._hasJSActionsPromise = null;
                this._networkStream &&
                  this._networkStream.cancelAllRequests(
                    new _util.AbortException("Worker was terminated.")
                  );
                if (this.messageHandler) {
                  this.messageHandler.destroy();
                  this.messageHandler = null;
                }
                this.destroyCapability.resolve();
              }, this.destroyCapability.reject);
              return this.destroyCapability.promise;
            }
            setupMessageHandler() {
              const { messageHandler: e, loadingTask: t } = this;
              e.on("GetReader", (e, t) => {
                (0, _util.assert)(
                  this._networkStream,
                  "GetReader - no `IPDFStream` instance available."
                );
                this._fullReader = this._networkStream.getFullReader();
                this._fullReader.onProgress = (e) => {
                  this._lastProgress = { loaded: e.loaded, total: e.total };
                };
                t.onPull = () => {
                  this._fullReader
                    .read()
                    .then(function ({ value: e, done: n }) {
                      if (n) t.close();
                      else {
                        (0, _util.assert)(
                          (0, _util.isArrayBuffer)(e),
                          "GetReader - expected an ArrayBuffer."
                        );
                        t.enqueue(new Uint8Array(e), 1, [e]);
                      }
                    })
                    .catch((e) => {
                      t.error(e);
                    });
                };
                t.onCancel = (e) => {
                  this._fullReader.cancel(e);
                  t.ready.catch((e) => {
                    if (!this.destroyed) throw e;
                  });
                };
              });
              e.on("ReaderHeadersReady", (e) => {
                const n = (0, _util.createPromiseCapability)(),
                  s = this._fullReader;
                s.headersReady.then(() => {
                  if (!s.isStreamingSupported || !s.isRangeSupported) {
                    this._lastProgress && t.onProgress?.(this._lastProgress);
                    s.onProgress = (e) => {
                      t.onProgress?.({ loaded: e.loaded, total: e.total });
                    };
                  }
                  n.resolve({
                    isStreamingSupported: s.isStreamingSupported,
                    isRangeSupported: s.isRangeSupported,
                    contentLength: s.contentLength,
                  });
                }, n.reject);
                return n.promise;
              });
              e.on("GetRangeReader", (e, t) => {
                (0, _util.assert)(
                  this._networkStream,
                  "GetRangeReader - no `IPDFStream` instance available."
                );
                const n = this._networkStream.getRangeReader(e.begin, e.end);
                if (n) {
                  t.onPull = () => {
                    n.read()
                      .then(function ({ value: e, done: n }) {
                        if (n) t.close();
                        else {
                          (0, _util.assert)(
                            (0, _util.isArrayBuffer)(e),
                            "GetRangeReader - expected an ArrayBuffer."
                          );
                          t.enqueue(new Uint8Array(e), 1, [e]);
                        }
                      })
                      .catch((e) => {
                        t.error(e);
                      });
                  };
                  t.onCancel = (e) => {
                    n.cancel(e);
                    t.ready.catch((e) => {
                      if (!this.destroyed) throw e;
                    });
                  };
                } else t.close();
              });
              e.on("GetDoc", ({ pdfInfo: e }) => {
                this._numPages = e.numPages;
                this._htmlForXfa = e.htmlForXfa;
                delete e.htmlForXfa;
                t._capability.resolve(new PDFDocumentProxy(e, this));
              });
              e.on("DocException", function (e) {
                let n;
                switch (e.name) {
                  case "PasswordException":
                    n = new _util.PasswordException(e.message, e.code);
                    break;
                  case "InvalidPDFException":
                    n = new _util.InvalidPDFException(e.message);
                    break;
                  case "MissingPDFException":
                    n = new _util.MissingPDFException(e.message);
                    break;
                  case "UnexpectedResponseException":
                    n = new _util.UnexpectedResponseException(
                      e.message,
                      e.status
                    );
                    break;
                  case "UnknownErrorException":
                    n = new _util.UnknownErrorException(e.message, e.details);
                    break;
                  default:
                    (0,
                    _util.unreachable)("DocException - expected a valid Error.");
                }
                t._capability.reject(n);
              });
              e.on("PasswordRequest", (e) => {
                this._passwordCapability = (0, _util.createPromiseCapability)();
                if (t.onPassword) {
                  const updatePassword = (e) => {
                    e instanceof Error
                      ? this._passwordCapability.reject(e)
                      : this._passwordCapability.resolve({ password: e });
                  };
                  try {
                    t.onPassword(updatePassword, e.code);
                  } catch (e) {
                    this._passwordCapability.reject(e);
                  }
                } else
                  this._passwordCapability.reject(
                    new _util.PasswordException(e.message, e.code)
                  );
                return this._passwordCapability.promise;
              });
              e.on("DataLoaded", (e) => {
                t.onProgress?.({ loaded: e.length, total: e.length });
                this.downloadInfoCapability.resolve(e);
              });
              e.on("StartRenderPage", (e) => {
                if (this.destroyed) return;
                this.#t
                  .get(e.pageIndex)
                  ._startRenderPage(e.transparency, e.cacheKey);
              });
              e.on("commonobj", ([t, n, s]) => {
                if (!this.destroyed && !this.commonObjs.has(t))
                  switch (n) {
                    case "Font":
                      const r = this._params;
                      if ("error" in s) {
                        const e = s.error;
                        (0, _util.warn)(`Error during font loading: ${e}`);
                        this.commonObjs.resolve(t, e);
                        break;
                      }
                      let a = null;
                      r.pdfBug &&
                        globalThis.FontInspector?.enabled &&
                        (a = {
                          registerFont(e, t) {
                            globalThis.FontInspector.fontAdded(e, t);
                          },
                        });
                      const i = new _font_loader.FontFaceObject(s, {
                        isEvalSupported: r.isEvalSupported,
                        disableFontFace: r.disableFontFace,
                        ignoreErrors: r.ignoreErrors,
                        onUnsupportedFeature:
                          this._onUnsupportedFeature.bind(this),
                        fontRegistry: a,
                      });
                      this.fontLoader
                        .bind(i)
                        .catch((n) =>
                          e.sendWithPromise("FontFallback", { id: t })
                        )
                        .finally(() => {
                          !r.fontExtraProperties && i.data && (i.data = null);
                          this.commonObjs.resolve(t, i);
                        });
                      break;
                    case "FontPath":
                    case "Image":
                      this.commonObjs.resolve(t, s);
                      break;
                    default:
                      throw new Error(`Got unknown common object type ${n}`);
                  }
              });
              e.on("obj", ([e, t, n, s]) => {
                if (this.destroyed) return;
                const r = this.#t.get(t);
                if (!r.objs.has(e))
                  switch (n) {
                    case "Image":
                      r.objs.resolve(e, s);
                      const t = 8e6;
                      s?.data?.length > t && (r.cleanupAfterRender = !0);
                      break;
                    case "Pattern":
                      r.objs.resolve(e, s);
                      break;
                    default:
                      throw new Error(`Got unknown object type ${n}`);
                  }
              });
              e.on("DocProgress", (e) => {
                this.destroyed ||
                  t.onProgress?.({ loaded: e.loaded, total: e.total });
              });
              e.on("DocStats", (e) => {
                this.destroyed ||
                  (this.#e = Object.freeze({
                    streamTypes: Object.freeze(e.streamTypes),
                    fontTypes: Object.freeze(e.fontTypes),
                  }));
              });
              e.on("UnsupportedFeature", this._onUnsupportedFeature.bind(this));
              e.on("FetchBuiltInCMap", (e) =>
                this.destroyed
                  ? Promise.reject(new Error("Worker was destroyed."))
                  : this.CMapReaderFactory
                  ? this.CMapReaderFactory.fetch(e)
                  : Promise.reject(
                      new Error(
                        "CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."
                      )
                    )
              );
              e.on("FetchStandardFontData", (e) =>
                this.destroyed
                  ? Promise.reject(new Error("Worker was destroyed."))
                  : this.StandardFontDataFactory
                  ? this.StandardFontDataFactory.fetch(e)
                  : Promise.reject(
                      new Error(
                        "StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter."
                      )
                    )
              );
            }
            _onUnsupportedFeature({ featureId: e }) {
              this.destroyed || this.loadingTask.onUnsupportedFeature?.(e);
            }
            getData() {
              return this.messageHandler.sendWithPromise("GetData", null);
            }
            getPage(e) {
              if (!Number.isInteger(e) || e <= 0 || e > this._numPages)
                return Promise.reject(new Error("Invalid page request."));
              const t = e - 1,
                n = this.#n.get(t);
              if (n) return n;
              const s = this.messageHandler
                .sendWithPromise("GetPage", { pageIndex: t })
                .then((e) => {
                  if (this.destroyed) throw new Error("Transport destroyed");
                  const n = new PDFPageProxy(
                    t,
                    e,
                    this,
                    this._params.ownerDocument,
                    this._params.pdfBug
                  );
                  this.#t.set(t, n);
                  return n;
                });
              this.#n.set(t, s);
              return s;
            }
            getPageIndex(e) {
              return "object" != typeof e ||
                null === e ||
                !Number.isInteger(e.num) ||
                e.num < 0 ||
                !Number.isInteger(e.gen) ||
                e.gen < 0
                ? Promise.reject(new Error("Invalid pageIndex request."))
                : this.messageHandler.sendWithPromise("GetPageIndex", {
                    num: e.num,
                    gen: e.gen,
                  });
            }
            getAnnotations(e, t) {
              return this.messageHandler.sendWithPromise("GetAnnotations", {
                pageIndex: e,
                intent: t,
              });
            }
            saveDocument() {
              return this.messageHandler
                .sendWithPromise("SaveDocument", {
                  isPureXfa: !!this._htmlForXfa,
                  numPages: this._numPages,
                  annotationStorage: this.annotationStorage.serializable,
                  filename: this._fullReader?.filename ?? null,
                })
                .finally(() => {
                  this.annotationStorage.resetModified();
                });
            }
            getFieldObjects() {
              return (this._getFieldObjectsPromise ||=
                this.messageHandler.sendWithPromise("GetFieldObjects", null));
            }
            hasJSActions() {
              return (this._hasJSActionsPromise ||=
                this.messageHandler.sendWithPromise("HasJSActions", null));
            }
            getCalculationOrderIds() {
              return this.messageHandler.sendWithPromise(
                "GetCalculationOrderIds",
                null
              );
            }
            getDestinations() {
              return this.messageHandler.sendWithPromise(
                "GetDestinations",
                null
              );
            }
            getDestination(e) {
              return "string" != typeof e
                ? Promise.reject(new Error("Invalid destination request."))
                : this.messageHandler.sendWithPromise("GetDestination", {
                    id: e,
                  });
            }
            getPageLabels() {
              return this.messageHandler.sendWithPromise("GetPageLabels", null);
            }
            getPageLayout() {
              return this.messageHandler.sendWithPromise("GetPageLayout", null);
            }
            getPageMode() {
              return this.messageHandler.sendWithPromise("GetPageMode", null);
            }
            getViewerPreferences() {
              return this.messageHandler.sendWithPromise(
                "GetViewerPreferences",
                null
              );
            }
            getOpenAction() {
              return this.messageHandler.sendWithPromise("GetOpenAction", null);
            }
            getAttachments() {
              return this.messageHandler.sendWithPromise(
                "GetAttachments",
                null
              );
            }
            getJavaScript() {
              return this.messageHandler.sendWithPromise("GetJavaScript", null);
            }
            getDocJSActions() {
              return this.messageHandler.sendWithPromise(
                "GetDocJSActions",
                null
              );
            }
            getPageJSActions(e) {
              return this.messageHandler.sendWithPromise("GetPageJSActions", {
                pageIndex: e,
              });
            }
            getStructTree(e) {
              return this.messageHandler.sendWithPromise("GetStructTree", {
                pageIndex: e,
              });
            }
            getOutline() {
              return this.messageHandler.sendWithPromise("GetOutline", null);
            }
            getOptionalContentConfig() {
              return this.messageHandler
                .sendWithPromise("GetOptionalContentConfig", null)
                .then(
                  (e) => new _optional_content_config.OptionalContentConfig(e)
                );
            }
            getPermissions() {
              return this.messageHandler.sendWithPromise(
                "GetPermissions",
                null
              );
            }
            getMetadata() {
              return (this.#s ||= this.messageHandler
                .sendWithPromise("GetMetadata", null)
                .then((e) => ({
                  info: e[0],
                  metadata: e[1] ? new _metadata.Metadata(e[1]) : null,
                  contentDispositionFilename:
                    this._fullReader?.filename ?? null,
                  contentLength: this._fullReader?.contentLength ?? null,
                })));
            }
            getMarkInfo() {
              return this.messageHandler.sendWithPromise("GetMarkInfo", null);
            }
            async startCleanup(e = !1) {
              await this.messageHandler.sendWithPromise("Cleanup", null);
              if (!this.destroyed) {
                for (const e of this.#t.values()) {
                  if (!e.cleanup())
                    throw new Error(
                      `startCleanup: Page ${e.pageNumber} is currently rendering.`
                    );
                }
                this.commonObjs.clear();
                e || this.fontLoader.clear();
                this.#s = null;
                this._getFieldObjectsPromise = null;
                this._hasJSActionsPromise = null;
              }
            }
            get loadingParams() {
              const e = this._params;
              return (0, _util.shadow)(this, "loadingParams", {
                disableAutoFetch: e.disableAutoFetch,
                enableXfa: e.enableXfa,
              });
            }
          }
          class PDFObjects {
            #r = Object.create(null);
            #a(e) {
              const t = this.#r[e];
              return (
                t ||
                (this.#r[e] = {
                  capability: (0, _util.createPromiseCapability)(),
                  data: null,
                })
              );
            }
            get(e, t = null) {
              if (t) {
                const n = this.#a(e);
                n.capability.promise.then(() => t(n.data));
                return null;
              }
              const n = this.#r[e];
              if (!n?.capability.settled)
                throw new Error(
                  `Requesting object that isn't resolved yet ${e}.`
                );
              return n.data;
            }
            has(e) {
              return this.#r[e]?.capability.settled || !1;
            }
            resolve(e, t = null) {
              const n = this.#a(e);
              n.data = t;
              n.capability.resolve();
            }
            clear() {
              this.#r = Object.create(null);
            }
          }
          class RenderTask {
            constructor(e) {
              this._internalRenderTask = e;
              this.onContinue = null;
            }
            get promise() {
              return this._internalRenderTask.capability.promise;
            }
            cancel() {
              this._internalRenderTask.cancel();
            }
          }
          exports.RenderTask = RenderTask;
          class InternalRenderTask {
            static get canvasInUse() {
              return (0, _util.shadow)(this, "canvasInUse", new WeakSet());
            }
            constructor({
              callback: e,
              params: t,
              objs: n,
              commonObjs: s,
              annotationCanvasMap: r,
              operatorList: a,
              pageIndex: i,
              canvasFactory: o,
              useRequestAnimationFrame: l = !1,
              pdfBug: c = !1,
            }) {
              this.callback = e;
              this.params = t;
              this.objs = n;
              this.commonObjs = s;
              this.annotationCanvasMap = r;
              this.operatorListIdx = null;
              this.operatorList = a;
              this._pageIndex = i;
              this.canvasFactory = o;
              this._pdfBug = c;
              this.running = !1;
              this.graphicsReadyCallback = null;
              this.graphicsReady = !1;
              this._useRequestAnimationFrame =
                !0 === l && "undefined" != typeof window;
              this.cancelled = !1;
              this.capability = (0, _util.createPromiseCapability)();
              this.task = new RenderTask(this);
              this._cancelBound = this.cancel.bind(this);
              this._continueBound = this._continue.bind(this);
              this._scheduleNextBound = this._scheduleNext.bind(this);
              this._nextBound = this._next.bind(this);
              this._canvas = t.canvasContext.canvas;
            }
            get completed() {
              return this.capability.promise.catch(function () {});
            }
            initializeGraphics({
              transparency: e = !1,
              optionalContentConfig: t,
            }) {
              if (this.cancelled) return;
              if (this._canvas) {
                if (InternalRenderTask.canvasInUse.has(this._canvas))
                  throw new Error(
                    "Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed."
                  );
                InternalRenderTask.canvasInUse.add(this._canvas);
              }
              if (this._pdfBug && globalThis.StepperManager?.enabled) {
                this.stepper = globalThis.StepperManager.create(
                  this._pageIndex
                );
                this.stepper.init(this.operatorList);
                this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
              }
              const {
                canvasContext: n,
                viewport: s,
                transform: r,
                imageLayer: a,
                background: i,
              } = this.params;
              this.gfx = new _canvas.CanvasGraphics(
                n,
                this.commonObjs,
                this.objs,
                this.canvasFactory,
                a,
                t,
                this.annotationCanvasMap
              );
              this.gfx.beginDrawing({
                transform: r,
                viewport: s,
                transparency: e,
                background: i,
              });
              this.operatorListIdx = 0;
              this.graphicsReady = !0;
              this.graphicsReadyCallback && this.graphicsReadyCallback();
            }
            cancel(e = null) {
              this.running = !1;
              this.cancelled = !0;
              this.gfx && this.gfx.endDrawing();
              this._canvas &&
                InternalRenderTask.canvasInUse.delete(this._canvas);
              this.callback(
                e ||
                  new _display_utils.RenderingCancelledException(
                    `Rendering cancelled, page ${this._pageIndex + 1}`,
                    "canvas"
                  )
              );
            }
            operatorListChanged() {
              if (this.graphicsReady) {
                this.stepper &&
                  this.stepper.updateOperatorList(this.operatorList);
                this.running || this._continue();
              } else
                this.graphicsReadyCallback ||
                  (this.graphicsReadyCallback = this._continueBound);
            }
            _continue() {
              this.running = !0;
              this.cancelled ||
                (this.task.onContinue
                  ? this.task.onContinue(this._scheduleNextBound)
                  : this._scheduleNext());
            }
            _scheduleNext() {
              this._useRequestAnimationFrame
                ? window.requestAnimationFrame(() => {
                    this._nextBound().catch(this._cancelBound);
                  })
                : Promise.resolve()
                    .then(this._nextBound)
                    .catch(this._cancelBound);
            }
            async _next() {
              if (!this.cancelled) {
                this.operatorListIdx = this.gfx.executeOperatorList(
                  this.operatorList,
                  this.operatorListIdx,
                  this._continueBound,
                  this.stepper
                );
                if (
                  this.operatorListIdx === this.operatorList.argsArray.length
                ) {
                  this.running = !1;
                  if (this.operatorList.lastChunk) {
                    this.gfx.endDrawing();
                    this._canvas &&
                      InternalRenderTask.canvasInUse.delete(this._canvas);
                    this.callback();
                  }
                }
              }
            }
          }
          const version = "2.13.216";
          exports.version = version;
          const build = "399a0ec60";
          exports.build = build;
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.StatTimer =
            t.RenderingCancelledException =
            t.PixelsPerInch =
            t.PageViewport =
            t.PDFDateString =
            t.DOMStandardFontDataFactory =
            t.DOMSVGFactory =
            t.DOMCanvasFactory =
            t.DOMCMapReaderFactory =
              void 0;
          t.deprecated = function deprecated(e) {
            console.log("Deprecated API usage: " + e);
          };
          t.getFilenameFromUrl = function getFilenameFromUrl(e) {
            const t = e.indexOf("#"),
              n = e.indexOf("?"),
              s = Math.min(t > 0 ? t : e.length, n > 0 ? n : e.length);
            return e.substring(e.lastIndexOf("/", s) + 1, s);
          };
          t.getPdfFilenameFromUrl = function getPdfFilenameFromUrl(
            e,
            t = "document.pdf"
          ) {
            if ("string" != typeof e) return t;
            if (isDataScheme(e)) {
              (0, r.warn)(
                'getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'
              );
              return t;
            }
            const n = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i,
              s = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(e);
            let a = n.exec(s[1]) || n.exec(s[2]) || n.exec(s[3]);
            if (a) {
              a = a[0];
              if (a.includes("%"))
                try {
                  a = n.exec(decodeURIComponent(a))[0];
                } catch (e) {}
            }
            return a || t;
          };
          t.getXfaPageViewport = function getXfaPageViewport(
            e,
            { scale: t = 1, rotation: n = 0 }
          ) {
            const { width: s, height: r } = e.attributes.style,
              a = [0, 0, parseInt(s), parseInt(r)];
            return new PageViewport({ viewBox: a, scale: t, rotation: n });
          };
          t.isDataScheme = isDataScheme;
          t.isPdfFile = function isPdfFile(e) {
            return "string" == typeof e && /\.pdf$/i.test(e);
          };
          t.isValidFetchUrl = isValidFetchUrl;
          t.loadScript = function loadScript(e, t = !1) {
            return new Promise((n, s) => {
              const r = document.createElement("script");
              r.src = e;
              r.onload = function (e) {
                t && r.remove();
                n(e);
              };
              r.onerror = function () {
                s(new Error(`Cannot load script at: ${r.src}`));
              };
              (document.head || document.documentElement).appendChild(r);
            });
          };
          var s = n(6),
            r = n(1);
          class PixelsPerInch {
            static CSS = 96;
            static PDF = 72;
            static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
          }
          t.PixelsPerInch = PixelsPerInch;
          class DOMCanvasFactory extends s.BaseCanvasFactory {
            constructor({ ownerDocument: e = globalThis.document } = {}) {
              super();
              this._document = e;
            }
            _createCanvas(e, t) {
              const n = this._document.createElement("canvas");
              n.width = e;
              n.height = t;
              return n;
            }
          }
          t.DOMCanvasFactory = DOMCanvasFactory;
          async function fetchData(e, t = !1) {
            if (isValidFetchUrl(e, document.baseURI)) {
              const n = await fetch(e);
              if (!n.ok) throw new Error(n.statusText);
              return t
                ? new Uint8Array(await n.arrayBuffer())
                : (0, r.stringToBytes)(await n.text());
            }
            return new Promise((n, s) => {
              const a = new XMLHttpRequest();
              a.open("GET", e, !0);
              t && (a.responseType = "arraybuffer");
              a.onreadystatechange = () => {
                if (a.readyState === XMLHttpRequest.DONE) {
                  if (200 === a.status || 0 === a.status) {
                    let e;
                    t && a.response
                      ? (e = new Uint8Array(a.response))
                      : !t &&
                        a.responseText &&
                        (e = (0, r.stringToBytes)(a.responseText));
                    if (e) {
                      n(e);
                      return;
                    }
                  }
                  s(new Error(a.statusText));
                }
              };
              a.send(null);
            });
          }
          class DOMCMapReaderFactory extends s.BaseCMapReaderFactory {
            _fetchData(e, t) {
              return fetchData(e, this.isCompressed).then((e) => ({
                cMapData: e,
                compressionType: t,
              }));
            }
          }
          t.DOMCMapReaderFactory = DOMCMapReaderFactory;
          class DOMStandardFontDataFactory extends s.BaseStandardFontDataFactory {
            _fetchData(e) {
              return fetchData(e, !0);
            }
          }
          t.DOMStandardFontDataFactory = DOMStandardFontDataFactory;
          class DOMSVGFactory extends s.BaseSVGFactory {
            _createSVG(e) {
              return document.createElementNS("http://www.w3.org/2000/svg", e);
            }
          }
          t.DOMSVGFactory = DOMSVGFactory;
          class PageViewport {
            constructor({
              viewBox: e,
              scale: t,
              rotation: n,
              offsetX: s = 0,
              offsetY: r = 0,
              dontFlip: a = !1,
            }) {
              this.viewBox = e;
              this.scale = t;
              this.rotation = n;
              this.offsetX = s;
              this.offsetY = r;
              const i = (e[2] + e[0]) / 2,
                o = (e[3] + e[1]) / 2;
              let l, c, h, d, u, p, g, f;
              (n %= 360) < 0 && (n += 360);
              switch (n) {
                case 180:
                  l = -1;
                  c = 0;
                  h = 0;
                  d = 1;
                  break;
                case 90:
                  l = 0;
                  c = 1;
                  h = 1;
                  d = 0;
                  break;
                case 270:
                  l = 0;
                  c = -1;
                  h = -1;
                  d = 0;
                  break;
                case 0:
                  l = 1;
                  c = 0;
                  h = 0;
                  d = -1;
                  break;
                default:
                  throw new Error(
                    "PageViewport: Invalid rotation, must be a multiple of 90 degrees."
                  );
              }
              if (a) {
                h = -h;
                d = -d;
              }
              if (0 === l) {
                u = Math.abs(o - e[1]) * t + s;
                p = Math.abs(i - e[0]) * t + r;
                g = Math.abs(e[3] - e[1]) * t;
                f = Math.abs(e[2] - e[0]) * t;
              } else {
                u = Math.abs(i - e[0]) * t + s;
                p = Math.abs(o - e[1]) * t + r;
                g = Math.abs(e[2] - e[0]) * t;
                f = Math.abs(e[3] - e[1]) * t;
              }
              this.transform = [
                l * t,
                c * t,
                h * t,
                d * t,
                u - l * t * i - h * t * o,
                p - c * t * i - d * t * o,
              ];
              this.width = g;
              this.height = f;
            }
            clone({
              scale: e = this.scale,
              rotation: t = this.rotation,
              offsetX: n = this.offsetX,
              offsetY: s = this.offsetY,
              dontFlip: r = !1,
            } = {}) {
              return new PageViewport({
                viewBox: this.viewBox.slice(),
                scale: e,
                rotation: t,
                offsetX: n,
                offsetY: s,
                dontFlip: r,
              });
            }
            convertToViewportPoint(e, t) {
              return r.Util.applyTransform([e, t], this.transform);
            }
            convertToViewportRectangle(e) {
              const t = r.Util.applyTransform([e[0], e[1]], this.transform),
                n = r.Util.applyTransform([e[2], e[3]], this.transform);
              return [t[0], t[1], n[0], n[1]];
            }
            convertToPdfPoint(e, t) {
              return r.Util.applyInverseTransform([e, t], this.transform);
            }
          }
          t.PageViewport = PageViewport;
          class RenderingCancelledException extends r.BaseException {
            constructor(e, t) {
              super(e, "RenderingCancelledException");
              this.type = t;
            }
          }
          t.RenderingCancelledException = RenderingCancelledException;
          function isDataScheme(e) {
            const t = e.length;
            let n = 0;
            for (; n < t && "" === e[n].trim(); ) n++;
            return "data:" === e.substring(n, n + 5).toLowerCase();
          }
          t.StatTimer = class StatTimer {
            constructor() {
              this.started = Object.create(null);
              this.times = [];
            }
            time(e) {
              e in this.started &&
                (0, r.warn)(`Timer is already running for ${e}`);
              this.started[e] = Date.now();
            }
            timeEnd(e) {
              e in this.started ||
                (0, r.warn)(`Timer has not been started for ${e}`);
              this.times.push({
                name: e,
                start: this.started[e],
                end: Date.now(),
              });
              delete this.started[e];
            }
            toString() {
              const e = [];
              let t = 0;
              for (const e of this.times) {
                const n = e.name;
                n.length > t && (t = n.length);
              }
              for (const n of this.times) {
                const s = n.end - n.start;
                e.push(`${n.name.padEnd(t)} ${s}ms\n`);
              }
              return e.join("");
            }
          };
          function isValidFetchUrl(e, t) {
            try {
              const { protocol: n } = t ? new URL(e, t) : new URL(e);
              return "http:" === n || "https:" === n;
            } catch (e) {
              return !1;
            }
          }
          let a;
          t.PDFDateString = class PDFDateString {
            static toDateObject(e) {
              if (!e || "string" != typeof e) return null;
              a ||
                (a = new RegExp(
                  "^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"
                ));
              const t = a.exec(e);
              if (!t) return null;
              const n = parseInt(t[1], 10);
              let s = parseInt(t[2], 10);
              s = s >= 1 && s <= 12 ? s - 1 : 0;
              let r = parseInt(t[3], 10);
              r = r >= 1 && r <= 31 ? r : 1;
              let i = parseInt(t[4], 10);
              i = i >= 0 && i <= 23 ? i : 0;
              let o = parseInt(t[5], 10);
              o = o >= 0 && o <= 59 ? o : 0;
              let l = parseInt(t[6], 10);
              l = l >= 0 && l <= 59 ? l : 0;
              const c = t[7] || "Z";
              let h = parseInt(t[8], 10);
              h = h >= 0 && h <= 23 ? h : 0;
              let d = parseInt(t[9], 10) || 0;
              d = d >= 0 && d <= 59 ? d : 0;
              if ("-" === c) {
                i += h;
                o += d;
              } else if ("+" === c) {
                i -= h;
                o -= d;
              }
              return new Date(Date.UTC(n, s, r, i, o, l));
            }
          };
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.BaseStandardFontDataFactory =
            t.BaseSVGFactory =
            t.BaseCanvasFactory =
            t.BaseCMapReaderFactory =
              void 0;
          var s = n(1);
          class BaseCanvasFactory {
            constructor() {
              this.constructor === BaseCanvasFactory &&
                (0, s.unreachable)("Cannot initialize BaseCanvasFactory.");
            }
            create(e, t) {
              if (e <= 0 || t <= 0) throw new Error("Invalid canvas size");
              const n = this._createCanvas(e, t);
              return { canvas: n, context: n.getContext("2d") };
            }
            reset(e, t, n) {
              if (!e.canvas) throw new Error("Canvas is not specified");
              if (t <= 0 || n <= 0) throw new Error("Invalid canvas size");
              e.canvas.width = t;
              e.canvas.height = n;
            }
            destroy(e) {
              if (!e.canvas) throw new Error("Canvas is not specified");
              e.canvas.width = 0;
              e.canvas.height = 0;
              e.canvas = null;
              e.context = null;
            }
            _createCanvas(e, t) {
              (0, s.unreachable)("Abstract method `_createCanvas` called.");
            }
          }
          t.BaseCanvasFactory = BaseCanvasFactory;
          class BaseCMapReaderFactory {
            constructor({ baseUrl: e = null, isCompressed: t = !1 }) {
              this.constructor === BaseCMapReaderFactory &&
                (0, s.unreachable)("Cannot initialize BaseCMapReaderFactory.");
              this.baseUrl = e;
              this.isCompressed = t;
            }
            async fetch({ name: e }) {
              if (!this.baseUrl)
                throw new Error(
                  'The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.'
                );
              if (!e) throw new Error("CMap name must be specified.");
              const t = this.baseUrl + e + (this.isCompressed ? ".bcmap" : ""),
                n = this.isCompressed
                  ? s.CMapCompressionType.BINARY
                  : s.CMapCompressionType.NONE;
              return this._fetchData(t, n).catch((e) => {
                throw new Error(
                  `Unable to load ${
                    this.isCompressed ? "binary " : ""
                  }CMap at: ${t}`
                );
              });
            }
            _fetchData(e, t) {
              (0, s.unreachable)("Abstract method `_fetchData` called.");
            }
          }
          t.BaseCMapReaderFactory = BaseCMapReaderFactory;
          class BaseStandardFontDataFactory {
            constructor({ baseUrl: e = null }) {
              this.constructor === BaseStandardFontDataFactory &&
                (0, s.unreachable)(
                  "Cannot initialize BaseStandardFontDataFactory."
                );
              this.baseUrl = e;
            }
            async fetch({ filename: e }) {
              if (!this.baseUrl)
                throw new Error(
                  'The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.'
                );
              if (!e) throw new Error("Font filename must be specified.");
              const t = `${this.baseUrl}${e}`;
              return this._fetchData(t).catch((e) => {
                throw new Error(`Unable to load font data at: ${t}`);
              });
            }
            _fetchData(e) {
              (0, s.unreachable)("Abstract method `_fetchData` called.");
            }
          }
          t.BaseStandardFontDataFactory = BaseStandardFontDataFactory;
          class BaseSVGFactory {
            constructor() {
              this.constructor === BaseSVGFactory &&
                (0, s.unreachable)("Cannot initialize BaseSVGFactory.");
            }
            create(e, t) {
              if (e <= 0 || t <= 0) throw new Error("Invalid SVG dimensions");
              const n = this._createSVG("svg:svg");
              n.setAttribute("version", "1.1");
              n.setAttribute("width", `${e}px`);
              n.setAttribute("height", `${t}px`);
              n.setAttribute("preserveAspectRatio", "none");
              n.setAttribute("viewBox", `0 0 ${e} ${t}`);
              return n;
            }
            createElement(e) {
              if ("string" != typeof e)
                throw new Error("Invalid SVG element type");
              return this._createSVG(e);
            }
            _createSVG(e) {
              (0, s.unreachable)("Abstract method `_createSVG` called.");
            }
          }
          t.BaseSVGFactory = BaseSVGFactory;
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.FontLoader = t.FontFaceObject = void 0;
          var s = n(1);
          class BaseFontLoader {
            constructor({
              docId: e,
              onUnsupportedFeature: t,
              ownerDocument: n = globalThis.document,
              styleElement: r = null,
            }) {
              this.constructor === BaseFontLoader &&
                (0, s.unreachable)("Cannot initialize BaseFontLoader.");
              this.docId = e;
              this._onUnsupportedFeature = t;
              this._document = n;
              this.nativeFontFaces = [];
              this.styleElement = null;
            }
            addNativeFontFace(e) {
              this.nativeFontFaces.push(e);
              this._document.fonts.add(e);
            }
            insertRule(e) {
              let t = this.styleElement;
              if (!t) {
                t = this.styleElement = this._document.createElement("style");
                t.id = `PDFJS_FONT_STYLE_TAG_${this.docId}`;
                this._document.documentElement
                  .getElementsByTagName("head")[0]
                  .appendChild(t);
              }
              const n = t.sheet;
              n.insertRule(e, n.cssRules.length);
            }
            clear() {
              for (const e of this.nativeFontFaces)
                this._document.fonts.delete(e);
              this.nativeFontFaces.length = 0;
              if (this.styleElement) {
                this.styleElement.remove();
                this.styleElement = null;
              }
            }
            async bind(e) {
              if (e.attached || e.missingFile) return;
              e.attached = !0;
              if (this.isFontLoadingAPISupported) {
                const t = e.createNativeFontFace();
                if (t) {
                  this.addNativeFontFace(t);
                  try {
                    await t.loaded;
                  } catch (n) {
                    this._onUnsupportedFeature({
                      featureId: s.UNSUPPORTED_FEATURES.errorFontLoadNative,
                    });
                    (0, s.warn)(`Failed to load font '${t.family}': '${n}'.`);
                    e.disableFontFace = !0;
                    throw n;
                  }
                }
                return;
              }
              const t = e.createFontFaceRule();
              if (t) {
                this.insertRule(t);
                if (this.isSyncFontLoadingSupported) return;
                await new Promise((n) => {
                  const s = this._queueLoadingCallback(n);
                  this._prepareFontLoadEvent([t], [e], s);
                });
              }
            }
            _queueLoadingCallback(e) {
              (0, s.unreachable)("Abstract method `_queueLoadingCallback`.");
            }
            get isFontLoadingAPISupported() {
              const e = !!this._document?.fonts;
              return (0, s.shadow)(this, "isFontLoadingAPISupported", e);
            }
            get isSyncFontLoadingSupported() {
              (0, s.unreachable)(
                "Abstract method `isSyncFontLoadingSupported`."
              );
            }
            get _loadTestFont() {
              (0, s.unreachable)("Abstract method `_loadTestFont`.");
            }
            _prepareFontLoadEvent(e, t, n) {
              (0, s.unreachable)("Abstract method `_prepareFontLoadEvent`.");
            }
          }
          let r;
          t.FontLoader = r;
          t.FontLoader = r = class GenericFontLoader extends BaseFontLoader {
            constructor(e) {
              super(e);
              this.loadingContext = { requests: [], nextRequestId: 0 };
              this.loadTestFontId = 0;
            }
            get isSyncFontLoadingSupported() {
              let e = !1;
              if ("undefined" == typeof navigator) e = !0;
              else {
                /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(
                  navigator.userAgent
                )?.[1] >= 14 && (e = !0);
              }
              return (0, s.shadow)(this, "isSyncFontLoadingSupported", e);
            }
            _queueLoadingCallback(e) {
              const t = this.loadingContext,
                n = {
                  id: "pdfjs-font-loading-" + t.nextRequestId++,
                  done: !1,
                  complete: function completeRequest() {
                    (0, s.assert)(
                      !n.done,
                      "completeRequest() cannot be called twice."
                    );
                    n.done = !0;
                    for (; t.requests.length > 0 && t.requests[0].done; ) {
                      const e = t.requests.shift();
                      setTimeout(e.callback, 0);
                    }
                  },
                  callback: e,
                };
              t.requests.push(n);
              return n;
            }
            get _loadTestFont() {
              return (0, s.shadow)(
                this,
                "_loadTestFont",
                atob(
                  "T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="
                )
              );
            }
            _prepareFontLoadEvent(e, t, n) {
              function int32(e, t) {
                return (
                  (e.charCodeAt(t) << 24) |
                  (e.charCodeAt(t + 1) << 16) |
                  (e.charCodeAt(t + 2) << 8) |
                  (255 & e.charCodeAt(t + 3))
                );
              }
              function spliceString(e, t, n, s) {
                return e.substring(0, t) + s + e.substring(t + n);
              }
              let r, a;
              const i = this._document.createElement("canvas");
              i.width = 1;
              i.height = 1;
              const o = i.getContext("2d");
              let l = 0;
              const c = `lt${Date.now()}${this.loadTestFontId++}`;
              let h = this._loadTestFont;
              h = spliceString(h, 976, c.length, c);
              const d = 1482184792;
              let u = int32(h, 16);
              for (r = 0, a = c.length - 3; r < a; r += 4)
                u = (u - d + int32(c, r)) | 0;
              r < c.length && (u = (u - d + int32(c + "XXX", r)) | 0);
              h = spliceString(h, 16, 4, (0, s.string32)(u));
              const p = `@font-face {font-family:"${c}";src:${`url(data:font/opentype;base64,${btoa(
                h
              )});`}}`;
              this.insertRule(p);
              const g = [];
              for (const e of t) g.push(e.loadedName);
              g.push(c);
              const f = this._document.createElement("div");
              f.style.visibility = "hidden";
              f.style.width = f.style.height = "10px";
              f.style.position = "absolute";
              f.style.top = f.style.left = "0px";
              for (const e of g) {
                const t = this._document.createElement("span");
                t.textContent = "Hi";
                t.style.fontFamily = e;
                f.appendChild(t);
              }
              this._document.body.appendChild(f);
              !(function isFontReady(e, t) {
                l++;
                if (l > 30) {
                  (0, s.warn)("Load test font never loaded.");
                  t();
                  return;
                }
                o.font = "30px " + e;
                o.fillText(".", 0, 20);
                o.getImageData(0, 0, 1, 1).data[3] > 0
                  ? t()
                  : setTimeout(isFontReady.bind(null, e, t));
              })(c, () => {
                f.remove();
                n.complete();
              });
            }
          };
          t.FontFaceObject = class FontFaceObject {
            constructor(
              e,
              {
                isEvalSupported: t = !0,
                disableFontFace: n = !1,
                ignoreErrors: s = !1,
                onUnsupportedFeature: r,
                fontRegistry: a = null,
              }
            ) {
              this.compiledGlyphs = Object.create(null);
              for (const t in e) this[t] = e[t];
              this.isEvalSupported = !1 !== t;
              this.disableFontFace = !0 === n;
              this.ignoreErrors = !0 === s;
              this._onUnsupportedFeature = r;
              this.fontRegistry = a;
            }
            createNativeFontFace() {
              if (!this.data || this.disableFontFace) return null;
              let e;
              if (this.cssFontInfo) {
                const t = { weight: this.cssFontInfo.fontWeight };
                this.cssFontInfo.italicAngle &&
                  (t.style = `oblique ${this.cssFontInfo.italicAngle}deg`);
                e = new FontFace(this.cssFontInfo.fontFamily, this.data, t);
              } else e = new FontFace(this.loadedName, this.data, {});
              this.fontRegistry && this.fontRegistry.registerFont(this);
              return e;
            }
            createFontFaceRule() {
              if (!this.data || this.disableFontFace) return null;
              const e = (0, s.bytesToString)(this.data),
                t = `url(data:${this.mimetype};base64,${btoa(e)});`;
              let n;
              if (this.cssFontInfo) {
                let e = `font-weight: ${this.cssFontInfo.fontWeight};`;
                this.cssFontInfo.italicAngle &&
                  (e += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`);
                n = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${e}src:${t}}`;
              } else
                n = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
              this.fontRegistry && this.fontRegistry.registerFont(this, t);
              return n;
            }
            getPathGenerator(e, t) {
              if (void 0 !== this.compiledGlyphs[t])
                return this.compiledGlyphs[t];
              let n;
              try {
                n = e.get(this.loadedName + "_path_" + t);
              } catch (e) {
                if (!this.ignoreErrors) throw e;
                this._onUnsupportedFeature({
                  featureId: s.UNSUPPORTED_FEATURES.errorFontGetPath,
                });
                (0, s.warn)(`getPathGenerator - ignoring character: "${e}".`);
                return (this.compiledGlyphs[t] = function (e, t) {});
              }
              if (this.isEvalSupported && s.IsEvalSupportedCached.value) {
                const e = [];
                for (const t of n) {
                  const n = void 0 !== t.args ? t.args.join(",") : "";
                  e.push("c.", t.cmd, "(", n, ");\n");
                }
                return (this.compiledGlyphs[t] = new Function(
                  "c",
                  "size",
                  e.join("")
                ));
              }
              return (this.compiledGlyphs[t] = function (e, t) {
                for (const s of n) {
                  "scale" === s.cmd && (s.args = [t, -t]);
                  e[s.cmd].apply(e, s.args);
                }
              });
            }
          };
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.NodeStandardFontDataFactory =
            t.NodeCanvasFactory =
            t.NodeCMapReaderFactory =
              void 0;
          var s = n(6),
            r = n(3),
            a = n(1);
          let i = class {
            constructor() {
              (0, a.unreachable)("Not implemented: NodeCanvasFactory");
            }
          };
          t.NodeCanvasFactory = i;
          let o = class {
            constructor() {
              (0, a.unreachable)("Not implemented: NodeCMapReaderFactory");
            }
          };
          t.NodeCMapReaderFactory = o;
          let l = class {
            constructor() {
              (0, a.unreachable)(
                "Not implemented: NodeStandardFontDataFactory"
              );
            }
          };
          t.NodeStandardFontDataFactory = l;
          if (r.isNodeJS) {
            const fetchData = function (e) {
              return new Promise((t, n) => {
                require("fs").readFile(e, (e, s) => {
                  !e && s ? t(new Uint8Array(s)) : n(new Error(e));
                });
              });
            };
            t.NodeCanvasFactory = i = class extends s.BaseCanvasFactory {
              _createCanvas(e, t) {
                return require("canvas").createCanvas(e, t);
              }
            };
            t.NodeCMapReaderFactory = o = class extends (
              s.BaseCMapReaderFactory
            ) {
              _fetchData(e, t) {
                return fetchData(e).then((e) => ({
                  cMapData: e,
                  compressionType: t,
                }));
              }
            };
            t.NodeStandardFontDataFactory = l = class extends (
              s.BaseStandardFontDataFactory
            ) {
              _fetchData(e) {
                return fetchData(e);
              }
            };
          }
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.AnnotationStorage = void 0;
          var s = n(1);
          t.AnnotationStorage = class AnnotationStorage {
            constructor() {
              this._storage = new Map();
              this._timeStamp = Date.now();
              this._modified = !1;
              this.onSetModified = null;
              this.onResetModified = null;
            }
            getValue(e, t) {
              const n = this._storage.get(e);
              return void 0 === n ? t : Object.assign(t, n);
            }
            setValue(e, t) {
              const n = this._storage.get(e);
              let s = !1;
              if (void 0 !== n) {
                for (const [e, r] of Object.entries(t))
                  if (n[e] !== r) {
                    s = !0;
                    n[e] = r;
                  }
              } else {
                s = !0;
                this._storage.set(e, t);
              }
              if (s) {
                this._timeStamp = Date.now();
                this._setModified();
              }
            }
            getAll() {
              return this._storage.size > 0
                ? (0, s.objectFromMap)(this._storage)
                : null;
            }
            get size() {
              return this._storage.size;
            }
            _setModified() {
              if (!this._modified) {
                this._modified = !0;
                "function" == typeof this.onSetModified && this.onSetModified();
              }
            }
            resetModified() {
              if (this._modified) {
                this._modified = !1;
                "function" == typeof this.onResetModified &&
                  this.onResetModified();
              }
            }
            get serializable() {
              return this._storage.size > 0 ? this._storage : null;
            }
            get lastModified() {
              return this._timeStamp.toString();
            }
          };
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.CanvasGraphics = void 0;
          var s = n(1),
            r = n(11),
            a = n(5);
          const i = 4096,
            o = 16;
          function addContextCurrentTransform(e) {
            e._transformStack && (e._transformStack = []);
            if (!e.mozCurrentTransform) {
              e._originalSave = e.save;
              e._originalRestore = e.restore;
              e._originalRotate = e.rotate;
              e._originalScale = e.scale;
              e._originalTranslate = e.translate;
              e._originalTransform = e.transform;
              e._originalSetTransform = e.setTransform;
              e._originalResetTransform = e.resetTransform;
              e._transformMatrix = e._transformMatrix || [1, 0, 0, 1, 0, 0];
              e._transformStack = [];
              try {
                const t = Object.getOwnPropertyDescriptor(
                  Object.getPrototypeOf(e),
                  "lineWidth"
                );
                e._setLineWidth = t.set;
                e._getLineWidth = t.get;
                Object.defineProperty(e, "lineWidth", {
                  set: function setLineWidth(e) {
                    this._setLineWidth(1.000001 * e);
                  },
                  get: function getLineWidth() {
                    return this._getLineWidth();
                  },
                });
              } catch (e) {}
              Object.defineProperty(e, "mozCurrentTransform", {
                get: function getCurrentTransform() {
                  return this._transformMatrix;
                },
              });
              Object.defineProperty(e, "mozCurrentTransformInverse", {
                get: function getCurrentTransformInverse() {
                  const [e, t, n, s, r, a] = this._transformMatrix,
                    i = e * s - t * n,
                    o = t * n - e * s;
                  return [
                    s / i,
                    t / o,
                    n / o,
                    e / i,
                    (s * r - n * a) / o,
                    (t * r - e * a) / i,
                  ];
                },
              });
              e.save = function ctxSave() {
                const e = this._transformMatrix;
                this._transformStack.push(e);
                this._transformMatrix = e.slice(0, 6);
                this._originalSave();
              };
              e.restore = function ctxRestore() {
                0 === this._transformStack.length &&
                  (0, s.warn)(
                    "Tried to restore a ctx when the stack was already empty."
                  );
                const e = this._transformStack.pop();
                if (e) {
                  this._transformMatrix = e;
                  this._originalRestore();
                }
              };
              e.translate = function ctxTranslate(e, t) {
                const n = this._transformMatrix;
                n[4] = n[0] * e + n[2] * t + n[4];
                n[5] = n[1] * e + n[3] * t + n[5];
                this._originalTranslate(e, t);
              };
              e.scale = function ctxScale(e, t) {
                const n = this._transformMatrix;
                n[0] *= e;
                n[1] *= e;
                n[2] *= t;
                n[3] *= t;
                this._originalScale(e, t);
              };
              e.transform = function ctxTransform(t, n, s, r, a, i) {
                const o = this._transformMatrix;
                this._transformMatrix = [
                  o[0] * t + o[2] * n,
                  o[1] * t + o[3] * n,
                  o[0] * s + o[2] * r,
                  o[1] * s + o[3] * r,
                  o[0] * a + o[2] * i + o[4],
                  o[1] * a + o[3] * i + o[5],
                ];
                e._originalTransform(t, n, s, r, a, i);
              };
              e.setTransform = function ctxSetTransform(t, n, s, r, a, i) {
                this._transformMatrix = [t, n, s, r, a, i];
                e._originalSetTransform(t, n, s, r, a, i);
              };
              e.resetTransform = function ctxResetTransform() {
                this._transformMatrix = [1, 0, 0, 1, 0, 0];
                e._originalResetTransform();
              };
              e.rotate = function ctxRotate(e) {
                const t = Math.cos(e),
                  n = Math.sin(e),
                  s = this._transformMatrix;
                this._transformMatrix = [
                  s[0] * t + s[2] * n,
                  s[1] * t + s[3] * n,
                  s[0] * -n + s[2] * t,
                  s[1] * -n + s[3] * t,
                  s[4],
                  s[5],
                ];
                this._originalRotate(e);
              };
            }
          }
          class CachedCanvases {
            constructor(e) {
              this.canvasFactory = e;
              this.cache = Object.create(null);
            }
            getCanvas(e, t, n, s) {
              let r;
              if (void 0 !== this.cache[e]) {
                r = this.cache[e];
                this.canvasFactory.reset(r, t, n);
                r.context.setTransform(1, 0, 0, 1, 0, 0);
              } else {
                r = this.canvasFactory.create(t, n);
                this.cache[e] = r;
              }
              s && addContextCurrentTransform(r.context);
              return r;
            }
            clear() {
              for (const e in this.cache) {
                const t = this.cache[e];
                this.canvasFactory.destroy(t);
                delete this.cache[e];
              }
            }
          }
          class CanvasExtraState {
            constructor(e, t) {
              this.alphaIsShape = !1;
              this.fontSize = 0;
              this.fontSizeScale = 1;
              this.textMatrix = s.IDENTITY_MATRIX;
              this.textMatrixScale = 1;
              this.fontMatrix = s.FONT_IDENTITY_MATRIX;
              this.leading = 0;
              this.x = 0;
              this.y = 0;
              this.lineX = 0;
              this.lineY = 0;
              this.charSpacing = 0;
              this.wordSpacing = 0;
              this.textHScale = 1;
              this.textRenderingMode = s.TextRenderingMode.FILL;
              this.textRise = 0;
              this.fillColor = "#000000";
              this.strokeColor = "#000000";
              this.patternFill = !1;
              this.fillAlpha = 1;
              this.strokeAlpha = 1;
              this.lineWidth = 1;
              this.activeSMask = null;
              this.transferMaps = null;
              this.startNewPathAndClipBox([0, 0, e, t]);
            }
            clone() {
              const e = Object.create(this);
              e.clipBox = this.clipBox.slice();
              return e;
            }
            setCurrentPoint(e, t) {
              this.x = e;
              this.y = t;
            }
            updatePathMinMax(e, t, n) {
              [t, n] = s.Util.applyTransform([t, n], e);
              this.minX = Math.min(this.minX, t);
              this.minY = Math.min(this.minY, n);
              this.maxX = Math.max(this.maxX, t);
              this.maxY = Math.max(this.maxY, n);
            }
            updateCurvePathMinMax(e, t, n, r, a, i, o, l, c) {
              const h = s.Util.bezierBoundingBox(t, n, r, a, i, o, l, c);
              this.updatePathMinMax(e, h[0], h[1]);
              this.updatePathMinMax(e, h[2], h[3]);
            }
            getPathBoundingBox(e = r.PathType.FILL, t = null) {
              const n = [this.minX, this.minY, this.maxX, this.maxY];
              if (e === r.PathType.STROKE) {
                t ||
                  (0, s.unreachable)(
                    "Stroke bounding box must include transform."
                  );
                const e = s.Util.singularValueDecompose2dScale(t),
                  r = (e[0] * this.lineWidth) / 2,
                  a = (e[1] * this.lineWidth) / 2;
                n[0] -= r;
                n[1] -= a;
                n[2] += r;
                n[3] += a;
              }
              return n;
            }
            updateClipFromPath() {
              const e = s.Util.intersect(
                this.clipBox,
                this.getPathBoundingBox()
              );
              this.startNewPathAndClipBox(e || [0, 0, 0, 0]);
            }
            startNewPathAndClipBox(e) {
              this.clipBox = e;
              this.minX = 1 / 0;
              this.minY = 1 / 0;
              this.maxX = 0;
              this.maxY = 0;
            }
            getClippedPathBoundingBox(e = r.PathType.FILL, t = null) {
              return s.Util.intersect(
                this.clipBox,
                this.getPathBoundingBox(e, t)
              );
            }
          }
          function putBinaryImageData(e, t, n = null) {
            if ("undefined" != typeof ImageData && t instanceof ImageData) {
              e.putImageData(t, 0, 0);
              return;
            }
            const r = t.height,
              a = t.width,
              i = r % o,
              l = (r - i) / o,
              c = 0 === i ? l : l + 1,
              h = e.createImageData(a, o);
            let d,
              u = 0;
            const p = t.data,
              g = h.data;
            let f, m, _, A, b, y, S, x;
            if (n)
              switch (n.length) {
                case 1:
                  b = n[0];
                  y = n[0];
                  S = n[0];
                  x = n[0];
                  break;
                case 4:
                  b = n[0];
                  y = n[1];
                  S = n[2];
                  x = n[3];
              }
            if (t.kind === s.ImageKind.GRAYSCALE_1BPP) {
              const t = p.byteLength,
                n = new Uint32Array(g.buffer, 0, g.byteLength >> 2),
                r = n.length,
                A = (a + 7) >> 3;
              let b = 4294967295,
                y = s.IsLittleEndianCached.value ? 4278190080 : 255;
              x && 255 === x[0] && 0 === x[255] && ([b, y] = [y, b]);
              for (f = 0; f < c; f++) {
                _ = f < l ? o : i;
                d = 0;
                for (m = 0; m < _; m++) {
                  const e = t - u;
                  let s = 0;
                  const r = e > A ? a : 8 * e - 7,
                    i = -8 & r;
                  let o = 0,
                    l = 0;
                  for (; s < i; s += 8) {
                    l = p[u++];
                    n[d++] = 128 & l ? b : y;
                    n[d++] = 64 & l ? b : y;
                    n[d++] = 32 & l ? b : y;
                    n[d++] = 16 & l ? b : y;
                    n[d++] = 8 & l ? b : y;
                    n[d++] = 4 & l ? b : y;
                    n[d++] = 2 & l ? b : y;
                    n[d++] = 1 & l ? b : y;
                  }
                  for (; s < r; s++) {
                    if (0 === o) {
                      l = p[u++];
                      o = 128;
                    }
                    n[d++] = l & o ? b : y;
                    o >>= 1;
                  }
                }
                for (; d < r; ) n[d++] = 0;
                e.putImageData(h, 0, f * o);
              }
            } else if (t.kind === s.ImageKind.RGBA_32BPP) {
              const t = !!(b || y || S);
              m = 0;
              A = a * o * 4;
              for (f = 0; f < l; f++) {
                g.set(p.subarray(u, u + A));
                u += A;
                if (t)
                  for (let e = 0; e < A; e += 4) {
                    b && (g[e + 0] = b[g[e + 0]]);
                    y && (g[e + 1] = y[g[e + 1]]);
                    S && (g[e + 2] = S[g[e + 2]]);
                  }
                e.putImageData(h, 0, m);
                m += o;
              }
              if (f < c) {
                A = a * i * 4;
                g.set(p.subarray(u, u + A));
                if (t)
                  for (let e = 0; e < A; e += 4) {
                    b && (g[e + 0] = b[g[e + 0]]);
                    y && (g[e + 1] = y[g[e + 1]]);
                    S && (g[e + 2] = S[g[e + 2]]);
                  }
                e.putImageData(h, 0, m);
              }
            } else {
              if (t.kind !== s.ImageKind.RGB_24BPP)
                throw new Error(`bad image kind: ${t.kind}`);
              {
                const t = !!(b || y || S);
                _ = o;
                A = a * _;
                for (f = 0; f < c; f++) {
                  if (f >= l) {
                    _ = i;
                    A = a * _;
                  }
                  d = 0;
                  for (m = A; m--; ) {
                    g[d++] = p[u++];
                    g[d++] = p[u++];
                    g[d++] = p[u++];
                    g[d++] = 255;
                  }
                  if (t)
                    for (let e = 0; e < d; e += 4) {
                      b && (g[e + 0] = b[g[e + 0]]);
                      y && (g[e + 1] = y[g[e + 1]]);
                      S && (g[e + 2] = S[g[e + 2]]);
                    }
                  e.putImageData(h, 0, f * o);
                }
              }
            }
          }
          function putBinaryImageMask(e, t) {
            const n = t.height,
              s = t.width,
              r = n % o,
              a = (n - r) / o,
              i = 0 === r ? a : a + 1,
              l = e.createImageData(s, o);
            let c = 0;
            const h = t.data,
              d = l.data;
            for (let t = 0; t < i; t++) {
              const n = t < a ? o : r;
              let i = 3;
              for (let e = 0; e < n; e++) {
                let e,
                  t = 0;
                for (let n = 0; n < s; n++) {
                  if (!t) {
                    e = h[c++];
                    t = 128;
                  }
                  d[i] = e & t ? 0 : 255;
                  i += 4;
                  t >>= 1;
                }
              }
              e.putImageData(l, 0, t * o);
            }
          }
          function copyCtxState(e, t) {
            const n = [
              "strokeStyle",
              "fillStyle",
              "fillRule",
              "globalAlpha",
              "lineWidth",
              "lineCap",
              "lineJoin",
              "miterLimit",
              "globalCompositeOperation",
              "font",
            ];
            for (let s = 0, r = n.length; s < r; s++) {
              const r = n[s];
              void 0 !== e[r] && (t[r] = e[r]);
            }
            if (void 0 !== e.setLineDash) {
              t.setLineDash(e.getLineDash());
              t.lineDashOffset = e.lineDashOffset;
            }
          }
          function resetCtxToDefault(e) {
            e.strokeStyle = "#000000";
            e.fillStyle = "#000000";
            e.fillRule = "nonzero";
            e.globalAlpha = 1;
            e.lineWidth = 1;
            e.lineCap = "butt";
            e.lineJoin = "miter";
            e.miterLimit = 10;
            e.globalCompositeOperation = "source-over";
            e.font = "10px sans-serif";
            if (void 0 !== e.setLineDash) {
              e.setLineDash([]);
              e.lineDashOffset = 0;
            }
          }
          function composeSMaskBackdrop(e, t, n, s) {
            const r = e.length;
            for (let a = 3; a < r; a += 4) {
              const r = e[a];
              if (0 === r) {
                e[a - 3] = t;
                e[a - 2] = n;
                e[a - 1] = s;
              } else if (r < 255) {
                const i = 255 - r;
                e[a - 3] = (e[a - 3] * r + t * i) >> 8;
                e[a - 2] = (e[a - 2] * r + n * i) >> 8;
                e[a - 1] = (e[a - 1] * r + s * i) >> 8;
              }
            }
          }
          function composeSMaskAlpha(e, t, n) {
            const s = e.length;
            for (let r = 3; r < s; r += 4) {
              const s = n ? n[e[r]] : e[r];
              t[r] = (t[r] * s * 0.00392156862745098) | 0;
            }
          }
          function composeSMaskLuminosity(e, t, n) {
            const s = e.length;
            for (let r = 3; r < s; r += 4) {
              const s = 77 * e[r - 3] + 152 * e[r - 2] + 28 * e[r - 1];
              t[r] = n ? (t[r] * n[s >> 8]) >> 8 : (t[r] * s) >> 16;
            }
          }
          function composeSMask(e, t, n, s) {
            const r = s[0],
              a = s[1],
              i = s[2] - r,
              o = s[3] - a;
            if (0 !== i && 0 !== o) {
              !(function genericComposeSMask(e, t, n, s, r, a, i, o, l, c, h) {
                const d = !!a,
                  u = d ? a[0] : 0,
                  p = d ? a[1] : 0,
                  g = d ? a[2] : 0;
                let f;
                f =
                  "Luminosity" === r
                    ? composeSMaskLuminosity
                    : composeSMaskAlpha;
                const m = Math.min(s, Math.ceil(1048576 / n));
                for (let r = 0; r < s; r += m) {
                  const a = Math.min(m, s - r),
                    _ = e.getImageData(o - c, r + (l - h), n, a),
                    A = t.getImageData(o, r + l, n, a);
                  d && composeSMaskBackdrop(_.data, u, p, g);
                  f(_.data, A.data, i);
                  t.putImageData(A, o, r + l);
                }
              })(
                t.context,
                n,
                i,
                o,
                t.subtype,
                t.backdrop,
                t.transferMap,
                r,
                a,
                t.offsetX,
                t.offsetY
              );
              e.save();
              e.globalAlpha = 1;
              e.globalCompositeOperation = "source-over";
              e.setTransform(1, 0, 0, 1, 0, 0);
              e.drawImage(n.canvas, 0, 0);
              e.restore();
            }
          }
          function getImageSmoothingEnabled(e, t) {
            const n = s.Util.singularValueDecompose2dScale(e);
            n[0] = Math.fround(n[0]);
            n[1] = Math.fround(n[1]);
            const r = Math.fround(
              (globalThis.devicePixelRatio || 1) *
                a.PixelsPerInch.PDF_TO_CSS_UNITS
            );
            return void 0 !== t ? t : n[0] <= r || n[1] <= r;
          }
          const l = ["butt", "round", "square"],
            c = ["miter", "round", "bevel"],
            h = {},
            d = {};
          class CanvasGraphics {
            constructor(e, t, n, s, r, a, i) {
              this.ctx = e;
              this.current = new CanvasExtraState(
                this.ctx.canvas.width,
                this.ctx.canvas.height
              );
              this.stateStack = [];
              this.pendingClip = null;
              this.pendingEOFill = !1;
              this.res = null;
              this.xobjs = null;
              this.commonObjs = t;
              this.objs = n;
              this.canvasFactory = s;
              this.imageLayer = r;
              this.groupStack = [];
              this.processingType3 = null;
              this.baseTransform = null;
              this.baseTransformStack = [];
              this.groupLevel = 0;
              this.smaskStack = [];
              this.smaskCounter = 0;
              this.tempSMask = null;
              this.suspendedCtx = null;
              this.contentVisible = !0;
              this.markedContentStack = [];
              this.optionalContentConfig = a;
              this.cachedCanvases = new CachedCanvases(this.canvasFactory);
              this.cachedPatterns = new Map();
              this.annotationCanvasMap = i;
              this.viewportScale = 1;
              this.outputScaleX = 1;
              this.outputScaleY = 1;
              e && addContextCurrentTransform(e);
              this._cachedGetSinglePixelWidth = null;
            }
            beginDrawing({
              transform: e,
              viewport: t,
              transparency: n = !1,
              background: s = null,
            }) {
              const r = this.ctx.canvas.width,
                a = this.ctx.canvas.height;
              this.ctx.save();
              this.ctx.fillStyle = s || "rgb(255, 255, 255)";
              this.ctx.fillRect(0, 0, r, a);
              this.ctx.restore();
              if (n) {
                const e = this.cachedCanvases.getCanvas(
                  "transparent",
                  r,
                  a,
                  !0
                );
                this.compositeCtx = this.ctx;
                this.transparentCanvas = e.canvas;
                this.ctx = e.context;
                this.ctx.save();
                this.ctx.transform.apply(
                  this.ctx,
                  this.compositeCtx.mozCurrentTransform
                );
              }
              this.ctx.save();
              resetCtxToDefault(this.ctx);
              if (e) {
                this.ctx.transform.apply(this.ctx, e);
                this.outputScaleX = e[0];
                this.outputScaleY = e[0];
              }
              this.ctx.transform.apply(this.ctx, t.transform);
              this.viewportScale = t.scale;
              this.baseTransform = this.ctx.mozCurrentTransform.slice();
              this._combinedScaleFactor = Math.hypot(
                this.baseTransform[0],
                this.baseTransform[2]
              );
              this.imageLayer && this.imageLayer.beginLayout();
            }
            executeOperatorList(e, t, n, r) {
              const a = e.argsArray,
                i = e.fnArray;
              let o = t || 0;
              const l = a.length;
              if (l === o) return o;
              const c = l - o > 10 && "function" == typeof n,
                h = c ? Date.now() + 15 : 0;
              let d = 0;
              const u = this.commonObjs,
                p = this.objs;
              let g;
              for (;;) {
                if (void 0 !== r && o === r.nextBreakPoint) {
                  r.breakIt(o, n);
                  return o;
                }
                g = i[o];
                if (g !== s.OPS.dependency) this[g].apply(this, a[o]);
                else
                  for (const e of a[o]) {
                    const t = e.startsWith("g_") ? u : p;
                    if (!t.has(e)) {
                      t.get(e, n);
                      return o;
                    }
                  }
                o++;
                if (o === l) return o;
                if (c && ++d > 10) {
                  if (Date.now() > h) {
                    n();
                    return o;
                  }
                  d = 0;
                }
              }
            }
            endDrawing() {
              for (; this.stateStack.length || this.inSMaskMode; )
                this.restore();
              this.ctx.restore();
              if (this.transparentCanvas) {
                this.ctx = this.compositeCtx;
                this.ctx.save();
                this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                this.ctx.drawImage(this.transparentCanvas, 0, 0);
                this.ctx.restore();
                this.transparentCanvas = null;
              }
              this.cachedCanvases.clear();
              this.cachedPatterns.clear();
              this.imageLayer && this.imageLayer.endLayout();
            }
            _scaleImage(e, t) {
              const n = e.width,
                s = e.height;
              let r,
                a,
                i = Math.max(Math.hypot(t[0], t[1]), 1),
                o = Math.max(Math.hypot(t[2], t[3]), 1),
                l = n,
                c = s,
                h = "prescale1";
              for (; (i > 2 && l > 1) || (o > 2 && c > 1); ) {
                let t = l,
                  n = c;
                if (i > 2 && l > 1) {
                  t = Math.ceil(l / 2);
                  i /= l / t;
                }
                if (o > 2 && c > 1) {
                  n = Math.ceil(c / 2);
                  o /= c / n;
                }
                r = this.cachedCanvases.getCanvas(h, t, n);
                a = r.context;
                a.clearRect(0, 0, t, n);
                a.drawImage(e, 0, 0, l, c, 0, 0, t, n);
                e = r.canvas;
                l = t;
                c = n;
                h = "prescale1" === h ? "prescale2" : "prescale1";
              }
              return { img: e, paintWidth: l, paintHeight: c };
            }
            _createMaskCanvas(e) {
              const t = this.ctx,
                n = e.width,
                a = e.height,
                i = this.current.fillColor,
                o = this.current.patternFill,
                l = this.cachedCanvases.getCanvas("maskCanvas", n, a);
              putBinaryImageMask(l.context, e);
              const c = t.mozCurrentTransform;
              let h = s.Util.transform(c, [1 / n, 0, 0, -1 / a, 0, 0]);
              h = s.Util.transform(h, [1, 0, 0, 1, 0, -a]);
              const d = s.Util.applyTransform([0, 0], h),
                u = s.Util.applyTransform([n, a], h),
                p = s.Util.normalizeRect([d[0], d[1], u[0], u[1]]),
                g = Math.ceil(p[2] - p[0]),
                f = Math.ceil(p[3] - p[1]),
                m = this.cachedCanvases.getCanvas("fillCanvas", g, f, !0),
                _ = m.context,
                A = Math.min(d[0], u[0]),
                b = Math.min(d[1], u[1]);
              _.translate(-A, -b);
              _.transform.apply(_, h);
              const y = this._scaleImage(
                l.canvas,
                _.mozCurrentTransformInverse
              );
              _.imageSmoothingEnabled = getImageSmoothingEnabled(
                _.mozCurrentTransform,
                e.interpolate
              );
              _.drawImage(y.img, 0, 0, y.img.width, y.img.height, 0, 0, n, a);
              _.globalCompositeOperation = "source-in";
              const S = s.Util.transform(_.mozCurrentTransformInverse, [
                1,
                0,
                0,
                1,
                -A,
                -b,
              ]);
              _.fillStyle = o ? i.getPattern(t, this, S, r.PathType.FILL) : i;
              _.fillRect(0, 0, n, a);
              return {
                canvas: m.canvas,
                offsetX: Math.round(A),
                offsetY: Math.round(b),
              };
            }
            setLineWidth(e) {
              this.current.lineWidth = e;
              this.ctx.lineWidth = e;
            }
            setLineCap(e) {
              this.ctx.lineCap = l[e];
            }
            setLineJoin(e) {
              this.ctx.lineJoin = c[e];
            }
            setMiterLimit(e) {
              this.ctx.miterLimit = e;
            }
            setDash(e, t) {
              const n = this.ctx;
              if (void 0 !== n.setLineDash) {
                n.setLineDash(e);
                n.lineDashOffset = t;
              }
            }
            setRenderingIntent(e) {}
            setFlatness(e) {}
            setGState(e) {
              for (let t = 0, n = e.length; t < n; t++) {
                const n = e[t],
                  s = n[0],
                  r = n[1];
                switch (s) {
                  case "LW":
                    this.setLineWidth(r);
                    break;
                  case "LC":
                    this.setLineCap(r);
                    break;
                  case "LJ":
                    this.setLineJoin(r);
                    break;
                  case "ML":
                    this.setMiterLimit(r);
                    break;
                  case "D":
                    this.setDash(r[0], r[1]);
                    break;
                  case "RI":
                    this.setRenderingIntent(r);
                    break;
                  case "FL":
                    this.setFlatness(r);
                    break;
                  case "Font":
                    this.setFont(r[0], r[1]);
                    break;
                  case "CA":
                    this.current.strokeAlpha = n[1];
                    break;
                  case "ca":
                    this.current.fillAlpha = n[1];
                    this.ctx.globalAlpha = n[1];
                    break;
                  case "BM":
                    this.ctx.globalCompositeOperation = r;
                    break;
                  case "SMask":
                    this.current.activeSMask = r ? this.tempSMask : null;
                    this.tempSMask = null;
                    this.checkSMaskState();
                    break;
                  case "TR":
                    this.current.transferMaps = r;
                }
              }
            }
            get inSMaskMode() {
              return !!this.suspendedCtx;
            }
            checkSMaskState() {
              const e = this.inSMaskMode;
              this.current.activeSMask && !e
                ? this.beginSMaskMode()
                : !this.current.activeSMask && e && this.endSMaskMode();
            }
            beginSMaskMode() {
              if (this.inSMaskMode)
                throw new Error(
                  "beginSMaskMode called while already in smask mode"
                );
              const e = this.ctx.canvas.width,
                t = this.ctx.canvas.height,
                n = "smaskGroupAt" + this.groupLevel,
                s = this.cachedCanvases.getCanvas(n, e, t, !0);
              this.suspendedCtx = this.ctx;
              this.ctx = s.context;
              const r = this.ctx;
              r.setTransform.apply(r, this.suspendedCtx.mozCurrentTransform);
              copyCtxState(this.suspendedCtx, r);
              !(function mirrorContextOperations(e, t) {
                if (e._removeMirroring)
                  throw new Error("Context is already forwarding operations.");
                e.__originalSave = e.save;
                e.__originalRestore = e.restore;
                e.__originalRotate = e.rotate;
                e.__originalScale = e.scale;
                e.__originalTranslate = e.translate;
                e.__originalTransform = e.transform;
                e.__originalSetTransform = e.setTransform;
                e.__originalResetTransform = e.resetTransform;
                e.__originalClip = e.clip;
                e.__originalMoveTo = e.moveTo;
                e.__originalLineTo = e.lineTo;
                e.__originalBezierCurveTo = e.bezierCurveTo;
                e.__originalRect = e.rect;
                e.__originalClosePath = e.closePath;
                e.__originalBeginPath = e.beginPath;
                e._removeMirroring = () => {
                  e.save = e.__originalSave;
                  e.restore = e.__originalRestore;
                  e.rotate = e.__originalRotate;
                  e.scale = e.__originalScale;
                  e.translate = e.__originalTranslate;
                  e.transform = e.__originalTransform;
                  e.setTransform = e.__originalSetTransform;
                  e.resetTransform = e.__originalResetTransform;
                  e.clip = e.__originalClip;
                  e.moveTo = e.__originalMoveTo;
                  e.lineTo = e.__originalLineTo;
                  e.bezierCurveTo = e.__originalBezierCurveTo;
                  e.rect = e.__originalRect;
                  e.closePath = e.__originalClosePath;
                  e.beginPath = e.__originalBeginPath;
                  delete e._removeMirroring;
                };
                e.save = function ctxSave() {
                  t.save();
                  this.__originalSave();
                };
                e.restore = function ctxRestore() {
                  t.restore();
                  this.__originalRestore();
                };
                e.translate = function ctxTranslate(e, n) {
                  t.translate(e, n);
                  this.__originalTranslate(e, n);
                };
                e.scale = function ctxScale(e, n) {
                  t.scale(e, n);
                  this.__originalScale(e, n);
                };
                e.transform = function ctxTransform(e, n, s, r, a, i) {
                  t.transform(e, n, s, r, a, i);
                  this.__originalTransform(e, n, s, r, a, i);
                };
                e.setTransform = function ctxSetTransform(e, n, s, r, a, i) {
                  t.setTransform(e, n, s, r, a, i);
                  this.__originalSetTransform(e, n, s, r, a, i);
                };
                e.resetTransform = function ctxResetTransform() {
                  t.resetTransform();
                  this.__originalResetTransform();
                };
                e.rotate = function ctxRotate(e) {
                  t.rotate(e);
                  this.__originalRotate(e);
                };
                e.clip = function ctxRotate(e) {
                  t.clip(e);
                  this.__originalClip(e);
                };
                e.moveTo = function (e, n) {
                  t.moveTo(e, n);
                  this.__originalMoveTo(e, n);
                };
                e.lineTo = function (e, n) {
                  t.lineTo(e, n);
                  this.__originalLineTo(e, n);
                };
                e.bezierCurveTo = function (e, n, s, r, a, i) {
                  t.bezierCurveTo(e, n, s, r, a, i);
                  this.__originalBezierCurveTo(e, n, s, r, a, i);
                };
                e.rect = function (e, n, s, r) {
                  t.rect(e, n, s, r);
                  this.__originalRect(e, n, s, r);
                };
                e.closePath = function () {
                  t.closePath();
                  this.__originalClosePath();
                };
                e.beginPath = function () {
                  t.beginPath();
                  this.__originalBeginPath();
                };
              })(r, this.suspendedCtx);
              this.setGState([
                ["BM", "source-over"],
                ["ca", 1],
                ["CA", 1],
              ]);
            }
            endSMaskMode() {
              if (!this.inSMaskMode)
                throw new Error("endSMaskMode called while not in smask mode");
              this.ctx._removeMirroring();
              copyCtxState(this.ctx, this.suspendedCtx);
              this.ctx = this.suspendedCtx;
              this.suspendedCtx = null;
            }
            compose(e) {
              if (!this.current.activeSMask) return;
              if (e) {
                e[0] = Math.floor(e[0]);
                e[1] = Math.floor(e[1]);
                e[2] = Math.ceil(e[2]);
                e[3] = Math.ceil(e[3]);
              } else e = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
              const t = this.current.activeSMask;
              composeSMask(this.suspendedCtx, t, this.ctx, e);
              this.ctx.save();
              this.ctx.setTransform(1, 0, 0, 1, 0, 0);
              this.ctx.clearRect(
                0,
                0,
                this.ctx.canvas.width,
                this.ctx.canvas.height
              );
              this.ctx.restore();
            }
            save() {
              if (this.inSMaskMode) {
                copyCtxState(this.ctx, this.suspendedCtx);
                this.suspendedCtx.save();
              } else this.ctx.save();
              const e = this.current;
              this.stateStack.push(e);
              this.current = e.clone();
            }
            restore() {
              0 === this.stateStack.length &&
                this.inSMaskMode &&
                this.endSMaskMode();
              if (0 !== this.stateStack.length) {
                this.current = this.stateStack.pop();
                if (this.inSMaskMode) {
                  this.suspendedCtx.restore();
                  copyCtxState(this.suspendedCtx, this.ctx);
                } else this.ctx.restore();
                this.checkSMaskState();
                this.pendingClip = null;
                this._cachedGetSinglePixelWidth = null;
              }
            }
            transform(e, t, n, s, r, a) {
              this.ctx.transform(e, t, n, s, r, a);
              this._cachedGetSinglePixelWidth = null;
            }
            constructPath(e, t) {
              const n = this.ctx,
                r = this.current;
              let a,
                i,
                o = r.x,
                l = r.y;
              for (let c = 0, h = 0, d = e.length; c < d; c++)
                switch (0 | e[c]) {
                  case s.OPS.rectangle:
                    o = t[h++];
                    l = t[h++];
                    const e = t[h++],
                      c = t[h++],
                      d = o + e,
                      u = l + c;
                    n.moveTo(o, l);
                    if (0 === e || 0 === c) n.lineTo(d, u);
                    else {
                      n.lineTo(d, l);
                      n.lineTo(d, u);
                      n.lineTo(o, u);
                    }
                    r.updatePathMinMax(n.mozCurrentTransform, o, l);
                    r.updatePathMinMax(n.mozCurrentTransform, d, u);
                    n.closePath();
                    break;
                  case s.OPS.moveTo:
                    o = t[h++];
                    l = t[h++];
                    n.moveTo(o, l);
                    r.updatePathMinMax(n.mozCurrentTransform, o, l);
                    break;
                  case s.OPS.lineTo:
                    o = t[h++];
                    l = t[h++];
                    n.lineTo(o, l);
                    r.updatePathMinMax(n.mozCurrentTransform, o, l);
                    break;
                  case s.OPS.curveTo:
                    a = o;
                    i = l;
                    o = t[h + 4];
                    l = t[h + 5];
                    n.bezierCurveTo(t[h], t[h + 1], t[h + 2], t[h + 3], o, l);
                    r.updateCurvePathMinMax(
                      n.mozCurrentTransform,
                      a,
                      i,
                      t[h],
                      t[h + 1],
                      t[h + 2],
                      t[h + 3],
                      o,
                      l
                    );
                    h += 6;
                    break;
                  case s.OPS.curveTo2:
                    a = o;
                    i = l;
                    n.bezierCurveTo(o, l, t[h], t[h + 1], t[h + 2], t[h + 3]);
                    r.updateCurvePathMinMax(
                      n.mozCurrentTransform,
                      a,
                      i,
                      o,
                      l,
                      t[h],
                      t[h + 1],
                      t[h + 2],
                      t[h + 3]
                    );
                    o = t[h + 2];
                    l = t[h + 3];
                    h += 4;
                    break;
                  case s.OPS.curveTo3:
                    a = o;
                    i = l;
                    o = t[h + 2];
                    l = t[h + 3];
                    n.bezierCurveTo(t[h], t[h + 1], o, l, o, l);
                    r.updateCurvePathMinMax(
                      n.mozCurrentTransform,
                      a,
                      i,
                      t[h],
                      t[h + 1],
                      o,
                      l,
                      o,
                      l
                    );
                    h += 4;
                    break;
                  case s.OPS.closePath:
                    n.closePath();
                }
              r.setCurrentPoint(o, l);
            }
            closePath() {
              this.ctx.closePath();
            }
            stroke(e) {
              e = void 0 === e || e;
              const t = this.ctx,
                n = this.current.strokeColor;
              t.globalAlpha = this.current.strokeAlpha;
              if (this.contentVisible)
                if ("object" == typeof n && n?.getPattern) {
                  const e = this.getSinglePixelWidth();
                  t.save();
                  t.strokeStyle = n.getPattern(
                    t,
                    this,
                    t.mozCurrentTransformInverse,
                    r.PathType.STROKE
                  );
                  t.lineWidth = Math.max(e, this.current.lineWidth);
                  t.stroke();
                  t.restore();
                } else {
                  const e = this.getSinglePixelWidth();
                  if (e < 0 && -e >= this.current.lineWidth) {
                    t.save();
                    t.resetTransform();
                    t.lineWidth = Math.floor(this._combinedScaleFactor);
                    t.stroke();
                    t.restore();
                  } else {
                    t.lineWidth = Math.max(e, this.current.lineWidth);
                    t.stroke();
                  }
                }
              e && this.consumePath(this.current.getClippedPathBoundingBox());
              t.globalAlpha = this.current.fillAlpha;
            }
            closeStroke() {
              this.closePath();
              this.stroke();
            }
            fill(e) {
              e = void 0 === e || e;
              const t = this.ctx,
                n = this.current.fillColor;
              let s = !1;
              if (this.current.patternFill) {
                t.save();
                t.fillStyle = n.getPattern(
                  t,
                  this,
                  t.mozCurrentTransformInverse,
                  r.PathType.FILL
                );
                s = !0;
              }
              const a = this.current.getClippedPathBoundingBox();
              if (this.contentVisible && null !== a)
                if (this.pendingEOFill) {
                  t.fill("evenodd");
                  this.pendingEOFill = !1;
                } else t.fill();
              s && t.restore();
              e && this.consumePath(a);
            }
            eoFill() {
              this.pendingEOFill = !0;
              this.fill();
            }
            fillStroke() {
              this.fill(!1);
              this.stroke(!1);
              this.consumePath();
            }
            eoFillStroke() {
              this.pendingEOFill = !0;
              this.fillStroke();
            }
            closeFillStroke() {
              this.closePath();
              this.fillStroke();
            }
            closeEOFillStroke() {
              this.pendingEOFill = !0;
              this.closePath();
              this.fillStroke();
            }
            endPath() {
              this.consumePath();
            }
            clip() {
              this.pendingClip = h;
            }
            eoClip() {
              this.pendingClip = d;
            }
            beginText() {
              this.current.textMatrix = s.IDENTITY_MATRIX;
              this.current.textMatrixScale = 1;
              this.current.x = this.current.lineX = 0;
              this.current.y = this.current.lineY = 0;
            }
            endText() {
              const e = this.pendingTextPaths,
                t = this.ctx;
              if (void 0 !== e) {
                t.save();
                t.beginPath();
                for (let n = 0; n < e.length; n++) {
                  const s = e[n];
                  t.setTransform.apply(t, s.transform);
                  t.translate(s.x, s.y);
                  s.addToPath(t, s.fontSize);
                }
                t.restore();
                t.clip();
                t.beginPath();
                delete this.pendingTextPaths;
              } else t.beginPath();
            }
            setCharSpacing(e) {
              this.current.charSpacing = e;
            }
            setWordSpacing(e) {
              this.current.wordSpacing = e;
            }
            setHScale(e) {
              this.current.textHScale = e / 100;
            }
            setLeading(e) {
              this.current.leading = -e;
            }
            setFont(e, t) {
              const n = this.commonObjs.get(e),
                r = this.current;
              if (!n) throw new Error(`Can't find font for ${e}`);
              r.fontMatrix = n.fontMatrix || s.FONT_IDENTITY_MATRIX;
              (0 !== r.fontMatrix[0] && 0 !== r.fontMatrix[3]) ||
                (0, s.warn)("Invalid font matrix for font " + e);
              if (t < 0) {
                t = -t;
                r.fontDirection = -1;
              } else r.fontDirection = 1;
              this.current.font = n;
              this.current.fontSize = t;
              if (n.isType3Font) return;
              const a = n.loadedName || "sans-serif";
              let i = "normal";
              n.black ? (i = "900") : n.bold && (i = "bold");
              const o = n.italic ? "italic" : "normal",
                l = `"${a}", ${n.fallbackName}`;
              let c = t;
              t < 16 ? (c = 16) : t > 100 && (c = 100);
              this.current.fontSizeScale = t / c;
              this.ctx.font = `${o} ${i} ${c}px ${l}`;
            }
            setTextRenderingMode(e) {
              this.current.textRenderingMode = e;
            }
            setTextRise(e) {
              this.current.textRise = e;
            }
            moveText(e, t) {
              this.current.x = this.current.lineX += e;
              this.current.y = this.current.lineY += t;
            }
            setLeadingMoveText(e, t) {
              this.setLeading(-t);
              this.moveText(e, t);
            }
            setTextMatrix(e, t, n, s, r, a) {
              this.current.textMatrix = [e, t, n, s, r, a];
              this.current.textMatrixScale = Math.hypot(e, t);
              this.current.x = this.current.lineX = 0;
              this.current.y = this.current.lineY = 0;
            }
            nextLine() {
              this.moveText(0, this.current.leading);
            }
            paintChar(e, t, n, r, a) {
              const i = this.ctx,
                o = this.current,
                l = o.font,
                c = o.textRenderingMode,
                h = o.fontSize / o.fontSizeScale,
                d = c & s.TextRenderingMode.FILL_STROKE_MASK,
                u = !!(c & s.TextRenderingMode.ADD_TO_PATH_FLAG),
                p = o.patternFill && !l.missingFile;
              let g;
              (l.disableFontFace || u || p) &&
                (g = l.getPathGenerator(this.commonObjs, e));
              if (l.disableFontFace || p) {
                i.save();
                i.translate(t, n);
                i.beginPath();
                g(i, h);
                r && i.setTransform.apply(i, r);
                (d !== s.TextRenderingMode.FILL &&
                  d !== s.TextRenderingMode.FILL_STROKE) ||
                  i.fill();
                if (
                  d === s.TextRenderingMode.STROKE ||
                  d === s.TextRenderingMode.FILL_STROKE
                ) {
                  if (a) {
                    i.resetTransform();
                    i.lineWidth = Math.floor(this._combinedScaleFactor);
                  }
                  i.stroke();
                }
                i.restore();
              } else {
                (d !== s.TextRenderingMode.FILL &&
                  d !== s.TextRenderingMode.FILL_STROKE) ||
                  i.fillText(e, t, n);
                if (
                  d === s.TextRenderingMode.STROKE ||
                  d === s.TextRenderingMode.FILL_STROKE
                )
                  if (a) {
                    i.save();
                    i.moveTo(t, n);
                    i.resetTransform();
                    i.lineWidth = Math.floor(this._combinedScaleFactor);
                    i.strokeText(e, 0, 0);
                    i.restore();
                  } else i.strokeText(e, t, n);
              }
              if (u) {
                (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
                  transform: i.mozCurrentTransform,
                  x: t,
                  y: n,
                  fontSize: h,
                  addToPath: g,
                });
              }
            }
            get isFontSubpixelAAEnabled() {
              const { context: e } = this.cachedCanvases.getCanvas(
                "isFontSubpixelAAEnabled",
                10,
                10
              );
              e.scale(1.5, 1);
              e.fillText("I", 0, 10);
              const t = e.getImageData(0, 0, 10, 10).data;
              let n = !1;
              for (let e = 3; e < t.length; e += 4)
                if (t[e] > 0 && t[e] < 255) {
                  n = !0;
                  break;
                }
              return (0, s.shadow)(this, "isFontSubpixelAAEnabled", n);
            }
            showText(e) {
              const t = this.current,
                n = t.font;
              if (n.isType3Font) return this.showType3Text(e);
              const a = t.fontSize;
              if (0 === a) return;
              const i = this.ctx,
                o = t.fontSizeScale,
                l = t.charSpacing,
                c = t.wordSpacing,
                h = t.fontDirection,
                d = t.textHScale * h,
                u = e.length,
                p = n.vertical,
                g = p ? 1 : -1,
                f = n.defaultVMetrics,
                m = a * t.fontMatrix[0],
                _ =
                  t.textRenderingMode === s.TextRenderingMode.FILL &&
                  !n.disableFontFace &&
                  !t.patternFill;
              i.save();
              i.transform.apply(i, t.textMatrix);
              i.translate(t.x, t.y + t.textRise);
              h > 0 ? i.scale(d, -1) : i.scale(d, 1);
              let A;
              if (t.patternFill) {
                i.save();
                const e = t.fillColor.getPattern(
                  i,
                  this,
                  i.mozCurrentTransformInverse,
                  r.PathType.FILL
                );
                A = i.mozCurrentTransform;
                i.restore();
                i.fillStyle = e;
              }
              let b = t.lineWidth,
                y = !1;
              const S = t.textMatrixScale;
              if (0 === S || 0 === b) {
                const e =
                  t.textRenderingMode & s.TextRenderingMode.FILL_STROKE_MASK;
                if (
                  e === s.TextRenderingMode.STROKE ||
                  e === s.TextRenderingMode.FILL_STROKE
                ) {
                  this._cachedGetSinglePixelWidth = null;
                  b = this.getSinglePixelWidth();
                  y = b < 0;
                }
              } else b /= S;
              if (1 !== o) {
                i.scale(o, o);
                b /= o;
              }
              i.lineWidth = b;
              let x,
                v = 0;
              for (x = 0; x < u; ++x) {
                const t = e[x];
                if ("number" == typeof t) {
                  v += (g * t * a) / 1e3;
                  continue;
                }
                let s = !1;
                const r = (t.isSpace ? c : 0) + l,
                  d = t.fontChar,
                  u = t.accent;
                let b,
                  S,
                  C,
                  P = t.width;
                if (p) {
                  const e = t.vmetric || f,
                    n = -(t.vmetric ? e[1] : 0.5 * P) * m,
                    s = e[2] * m;
                  P = e ? -e[0] : P;
                  b = n / o;
                  S = (v + s) / o;
                } else {
                  b = v / o;
                  S = 0;
                }
                if (n.remeasure && P > 0) {
                  const e = ((1e3 * i.measureText(d).width) / a) * o;
                  if (P < e && this.isFontSubpixelAAEnabled) {
                    const t = P / e;
                    s = !0;
                    i.save();
                    i.scale(t, 1);
                    b /= t;
                  } else P !== e && (b += (((P - e) / 2e3) * a) / o);
                }
                if (this.contentVisible && (t.isInFont || n.missingFile))
                  if (_ && !u) i.fillText(d, b, S);
                  else {
                    this.paintChar(d, b, S, A, y);
                    if (u) {
                      const e = b + (a * u.offset.x) / o,
                        t = S - (a * u.offset.y) / o;
                      this.paintChar(u.fontChar, e, t, A, y);
                    }
                  }
                C = p ? P * m - r * h : P * m + r * h;
                v += C;
                s && i.restore();
              }
              p ? (t.y -= v) : (t.x += v * d);
              i.restore();
              this.compose();
            }
            showType3Text(e) {
              const t = this.ctx,
                n = this.current,
                r = n.font,
                a = n.fontSize,
                i = n.fontDirection,
                o = r.vertical ? 1 : -1,
                l = n.charSpacing,
                c = n.wordSpacing,
                h = n.textHScale * i,
                d = n.fontMatrix || s.FONT_IDENTITY_MATRIX,
                u = e.length;
              let p, g, f, m;
              if (
                !(n.textRenderingMode === s.TextRenderingMode.INVISIBLE) &&
                0 !== a
              ) {
                this._cachedGetSinglePixelWidth = null;
                t.save();
                t.transform.apply(t, n.textMatrix);
                t.translate(n.x, n.y);
                t.scale(h, i);
                for (p = 0; p < u; ++p) {
                  g = e[p];
                  if ("number" == typeof g) {
                    m = (o * g * a) / 1e3;
                    this.ctx.translate(m, 0);
                    n.x += m * h;
                    continue;
                  }
                  const i = (g.isSpace ? c : 0) + l,
                    u = r.charProcOperatorList[g.operatorListId];
                  if (!u) {
                    (0, s.warn)(
                      `Type3 character "${g.operatorListId}" is not available.`
                    );
                    continue;
                  }
                  if (this.contentVisible) {
                    this.processingType3 = g;
                    this.save();
                    t.scale(a, a);
                    t.transform.apply(t, d);
                    this.executeOperatorList(u);
                    this.restore();
                  }
                  f = s.Util.applyTransform([g.width, 0], d)[0] * a + i;
                  t.translate(f, 0);
                  n.x += f * h;
                }
                t.restore();
                this.processingType3 = null;
              }
            }
            setCharWidth(e, t) {}
            setCharWidthAndBounds(e, t, n, s, r, a) {
              this.ctx.rect(n, s, r - n, a - s);
              this.clip();
              this.endPath();
            }
            getColorN_Pattern(e) {
              let t;
              if ("TilingPattern" === e[0]) {
                const n = e[1],
                  s =
                    this.baseTransform || this.ctx.mozCurrentTransform.slice(),
                  a = {
                    createCanvasGraphics: (e) =>
                      new CanvasGraphics(
                        e,
                        this.commonObjs,
                        this.objs,
                        this.canvasFactory
                      ),
                  };
                t = new r.TilingPattern(e, n, this.ctx, a, s);
              } else t = this._getPattern(e[1], e[2]);
              return t;
            }
            setStrokeColorN() {
              this.current.strokeColor = this.getColorN_Pattern(arguments);
            }
            setFillColorN() {
              this.current.fillColor = this.getColorN_Pattern(arguments);
              this.current.patternFill = !0;
            }
            setStrokeRGBColor(e, t, n) {
              const r = s.Util.makeHexColor(e, t, n);
              this.ctx.strokeStyle = r;
              this.current.strokeColor = r;
            }
            setFillRGBColor(e, t, n) {
              const r = s.Util.makeHexColor(e, t, n);
              this.ctx.fillStyle = r;
              this.current.fillColor = r;
              this.current.patternFill = !1;
            }
            _getPattern(e, t = null) {
              let n;
              if (this.cachedPatterns.has(e)) n = this.cachedPatterns.get(e);
              else {
                n = (0, r.getShadingPattern)(this.objs.get(e));
                this.cachedPatterns.set(e, n);
              }
              t && (n.matrix = t);
              return n;
            }
            shadingFill(e) {
              if (!this.contentVisible) return;
              const t = this.ctx;
              this.save();
              const n = this._getPattern(e);
              t.fillStyle = n.getPattern(
                t,
                this,
                t.mozCurrentTransformInverse,
                r.PathType.SHADING
              );
              const a = t.mozCurrentTransformInverse;
              if (a) {
                const e = t.canvas,
                  n = e.width,
                  r = e.height,
                  i = s.Util.applyTransform([0, 0], a),
                  o = s.Util.applyTransform([0, r], a),
                  l = s.Util.applyTransform([n, 0], a),
                  c = s.Util.applyTransform([n, r], a),
                  h = Math.min(i[0], o[0], l[0], c[0]),
                  d = Math.min(i[1], o[1], l[1], c[1]),
                  u = Math.max(i[0], o[0], l[0], c[0]),
                  p = Math.max(i[1], o[1], l[1], c[1]);
                this.ctx.fillRect(h, d, u - h, p - d);
              } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
              this.compose(this.current.getClippedPathBoundingBox());
              this.restore();
            }
            beginInlineImage() {
              (0, s.unreachable)("Should not call beginInlineImage");
            }
            beginImageData() {
              (0, s.unreachable)("Should not call beginImageData");
            }
            paintFormXObjectBegin(e, t) {
              if (this.contentVisible) {
                this.save();
                this.baseTransformStack.push(this.baseTransform);
                Array.isArray(e) &&
                  6 === e.length &&
                  this.transform.apply(this, e);
                this.baseTransform = this.ctx.mozCurrentTransform;
                if (t) {
                  const e = t[2] - t[0],
                    n = t[3] - t[1];
                  this.ctx.rect(t[0], t[1], e, n);
                  this.current.updatePathMinMax(
                    this.ctx.mozCurrentTransform,
                    t[0],
                    t[1]
                  );
                  this.current.updatePathMinMax(
                    this.ctx.mozCurrentTransform,
                    t[2],
                    t[3]
                  );
                  this.clip();
                  this.endPath();
                }
              }
            }
            paintFormXObjectEnd() {
              if (this.contentVisible) {
                this.restore();
                this.baseTransform = this.baseTransformStack.pop();
              }
            }
            beginGroup(e) {
              if (!this.contentVisible) return;
              this.save();
              if (this.inSMaskMode) {
                this.endSMaskMode();
                this.current.activeSMask = null;
              }
              const t = this.ctx;
              e.isolated || (0, s.info)("TODO: Support non-isolated groups.");
              e.knockout && (0, s.warn)("Knockout groups not supported.");
              const n = t.mozCurrentTransform;
              e.matrix && t.transform.apply(t, e.matrix);
              if (!e.bbox) throw new Error("Bounding box is required.");
              let r = s.Util.getAxialAlignedBoundingBox(
                e.bbox,
                t.mozCurrentTransform
              );
              const a = [0, 0, t.canvas.width, t.canvas.height];
              r = s.Util.intersect(r, a) || [0, 0, 0, 0];
              const o = Math.floor(r[0]),
                l = Math.floor(r[1]);
              let c = Math.max(Math.ceil(r[2]) - o, 1),
                h = Math.max(Math.ceil(r[3]) - l, 1),
                d = 1,
                u = 1;
              if (c > i) {
                d = c / i;
                c = i;
              }
              if (h > i) {
                u = h / i;
                h = i;
              }
              this.current.startNewPathAndClipBox([0, 0, c, h]);
              let p = "groupAt" + this.groupLevel;
              e.smask && (p += "_smask_" + (this.smaskCounter++ % 2));
              const g = this.cachedCanvases.getCanvas(p, c, h, !0),
                f = g.context;
              f.scale(1 / d, 1 / u);
              f.translate(-o, -l);
              f.transform.apply(f, n);
              if (e.smask)
                this.smaskStack.push({
                  canvas: g.canvas,
                  context: f,
                  offsetX: o,
                  offsetY: l,
                  scaleX: d,
                  scaleY: u,
                  subtype: e.smask.subtype,
                  backdrop: e.smask.backdrop,
                  transferMap: e.smask.transferMap || null,
                  startTransformInverse: null,
                });
              else {
                t.setTransform(1, 0, 0, 1, 0, 0);
                t.translate(o, l);
                t.scale(d, u);
                t.save();
              }
              copyCtxState(t, f);
              this.ctx = f;
              this.setGState([
                ["BM", "source-over"],
                ["ca", 1],
                ["CA", 1],
              ]);
              this.groupStack.push(t);
              this.groupLevel++;
            }
            endGroup(e) {
              if (!this.contentVisible) return;
              this.groupLevel--;
              const t = this.ctx,
                n = this.groupStack.pop();
              this.ctx = n;
              this.ctx.imageSmoothingEnabled = !1;
              if (e.smask) {
                this.tempSMask = this.smaskStack.pop();
                this.restore();
              } else {
                this.ctx.restore();
                const e = this.ctx.mozCurrentTransform;
                this.restore();
                this.ctx.save();
                this.ctx.setTransform.apply(this.ctx, e);
                const n = s.Util.getAxialAlignedBoundingBox(
                  [0, 0, t.canvas.width, t.canvas.height],
                  e
                );
                this.ctx.drawImage(t.canvas, 0, 0);
                this.ctx.restore();
                this.compose(n);
              }
            }
            beginAnnotations() {
              this.save();
              this.baseTransform &&
                this.ctx.setTransform.apply(this.ctx, this.baseTransform);
            }
            endAnnotations() {
              this.restore();
            }
            beginAnnotation(e, t, n, r, a) {
              this.save();
              if (Array.isArray(t) && 4 === t.length) {
                const r = t[2] - t[0],
                  i = t[3] - t[1];
                if (a && this.annotationCanvasMap) {
                  (n = n.slice())[4] -= t[0];
                  n[5] -= t[1];
                  (t = t.slice())[0] = t[1] = 0;
                  t[2] = r;
                  t[3] = i;
                  const [a, o] = s.Util.singularValueDecompose2dScale(
                      this.ctx.mozCurrentTransform
                    ),
                    { viewportScale: l } = this,
                    c = Math.ceil(r * this.outputScaleX * l),
                    h = Math.ceil(i * this.outputScaleY * l);
                  this.annotationCanvas = this.canvasFactory.create(c, h);
                  const { canvas: d, context: u } = this.annotationCanvas;
                  d.style.width = `calc(${r}px * var(--viewport-scale-factor))`;
                  d.style.height = `calc(${i}px * var(--viewport-scale-factor))`;
                  this.annotationCanvasMap.set(e, d);
                  this.annotationCanvas.savedCtx = this.ctx;
                  this.ctx = u;
                  this.ctx.setTransform(a, 0, 0, -o, 0, i * o);
                  addContextCurrentTransform(this.ctx);
                  resetCtxToDefault(this.ctx);
                } else {
                  resetCtxToDefault(this.ctx);
                  this.ctx.rect(t[0], t[1], r, i);
                  this.clip();
                  this.endPath();
                }
              }
              this.current = new CanvasExtraState(
                this.ctx.canvas.width,
                this.ctx.canvas.height
              );
              this.transform.apply(this, n);
              this.transform.apply(this, r);
            }
            endAnnotation() {
              if (this.annotationCanvas) {
                this.ctx = this.annotationCanvas.savedCtx;
                delete this.annotationCanvas.savedCtx;
                delete this.annotationCanvas;
              }
              this.restore();
            }
            paintImageMaskXObject(e) {
              if (!this.contentVisible) return;
              const t = this.ctx,
                n = e.width,
                s = e.height,
                r = this.processingType3;
              r &&
                void 0 === r.compiled &&
                (r.compiled =
                  n <= 1e3 && s <= 1e3
                    ? (function compileType3Glyph(e) {
                        const t = new Uint8Array([
                            0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0,
                          ]),
                          n = e.width,
                          s = e.height,
                          r = n + 1;
                        let a, i, o, l;
                        const c = new Uint8Array(r * (s + 1)),
                          h = (n + 7) & -8,
                          d = e.data,
                          u = new Uint8Array(h * s);
                        let p = 0;
                        for (a = 0, i = d.length; a < i; a++) {
                          const e = d[a];
                          let t = 128;
                          for (; t > 0; ) {
                            u[p++] = e & t ? 0 : 255;
                            t >>= 1;
                          }
                        }
                        let g = 0;
                        p = 0;
                        if (0 !== u[p]) {
                          c[0] = 1;
                          ++g;
                        }
                        for (o = 1; o < n; o++) {
                          if (u[p] !== u[p + 1]) {
                            c[o] = u[p] ? 2 : 1;
                            ++g;
                          }
                          p++;
                        }
                        if (0 !== u[p]) {
                          c[o] = 2;
                          ++g;
                        }
                        for (a = 1; a < s; a++) {
                          p = a * h;
                          l = a * r;
                          if (u[p - h] !== u[p]) {
                            c[l] = u[p] ? 1 : 8;
                            ++g;
                          }
                          let e = (u[p] ? 4 : 0) + (u[p - h] ? 8 : 0);
                          for (o = 1; o < n; o++) {
                            e =
                              (e >> 2) +
                              (u[p + 1] ? 4 : 0) +
                              (u[p - h + 1] ? 8 : 0);
                            if (t[e]) {
                              c[l + o] = t[e];
                              ++g;
                            }
                            p++;
                          }
                          if (u[p - h] !== u[p]) {
                            c[l + o] = u[p] ? 2 : 4;
                            ++g;
                          }
                          if (g > 1e3) return null;
                        }
                        p = h * (s - 1);
                        l = a * r;
                        if (0 !== u[p]) {
                          c[l] = 8;
                          ++g;
                        }
                        for (o = 1; o < n; o++) {
                          if (u[p] !== u[p + 1]) {
                            c[l + o] = u[p] ? 4 : 8;
                            ++g;
                          }
                          p++;
                        }
                        if (0 !== u[p]) {
                          c[l + o] = 4;
                          ++g;
                        }
                        if (g > 1e3) return null;
                        const f = new Int32Array([0, r, -1, 0, -r, 0, 0, 0, 1]),
                          m = [];
                        for (a = 0; g && a <= s; a++) {
                          let e = a * r;
                          const t = e + n;
                          for (; e < t && !c[e]; ) e++;
                          if (e === t) continue;
                          const s = [e % r, a],
                            i = e;
                          let o = c[e];
                          do {
                            const t = f[o];
                            do {
                              e += t;
                            } while (!c[e]);
                            const n = c[e];
                            if (5 !== n && 10 !== n) {
                              o = n;
                              c[e] = 0;
                            } else {
                              o = n & ((51 * o) >> 4);
                              c[e] &= (o >> 2) | (o << 2);
                            }
                            s.push(e % r, (e / r) | 0);
                            c[e] || --g;
                          } while (i !== e);
                          m.push(s);
                          --a;
                        }
                        return function (e) {
                          e.save();
                          e.scale(1 / n, -1 / s);
                          e.translate(0, -s);
                          e.beginPath();
                          for (let t = 0, n = m.length; t < n; t++) {
                            const n = m[t];
                            e.moveTo(n[0], n[1]);
                            for (let t = 2, s = n.length; t < s; t += 2)
                              e.lineTo(n[t], n[t + 1]);
                          }
                          e.fill();
                          e.beginPath();
                          e.restore();
                        };
                      })({ data: e.data, width: n, height: s })
                    : null);
              if (r?.compiled) {
                r.compiled(t);
                return;
              }
              const a = this._createMaskCanvas(e),
                i = a.canvas;
              t.save();
              t.setTransform(1, 0, 0, 1, 0, 0);
              t.drawImage(i, a.offsetX, a.offsetY);
              t.restore();
              this.compose();
            }
            paintImageMaskXObjectRepeat(e, t, n = 0, r = 0, a, i) {
              if (!this.contentVisible) return;
              const o = this.ctx;
              o.save();
              const l = o.mozCurrentTransform;
              o.transform(t, n, r, a, 0, 0);
              const c = this._createMaskCanvas(e);
              o.setTransform(1, 0, 0, 1, 0, 0);
              for (let e = 0, h = i.length; e < h; e += 2) {
                const h = s.Util.transform(l, [t, n, r, a, i[e], i[e + 1]]),
                  [d, u] = s.Util.applyTransform([0, 0], h);
                o.drawImage(c.canvas, d, u);
              }
              o.restore();
              this.compose();
            }
            paintImageMaskXObjectGroup(e) {
              if (!this.contentVisible) return;
              const t = this.ctx,
                n = this.current.fillColor,
                s = this.current.patternFill;
              for (let a = 0, i = e.length; a < i; a++) {
                const i = e[a],
                  o = i.width,
                  l = i.height,
                  c = this.cachedCanvases.getCanvas("maskCanvas", o, l),
                  h = c.context;
                h.save();
                putBinaryImageMask(h, i);
                h.globalCompositeOperation = "source-in";
                h.fillStyle = s
                  ? n.getPattern(
                      h,
                      this,
                      t.mozCurrentTransformInverse,
                      r.PathType.FILL
                    )
                  : n;
                h.fillRect(0, 0, o, l);
                h.restore();
                t.save();
                t.transform.apply(t, i.transform);
                t.scale(1, -1);
                t.drawImage(c.canvas, 0, 0, o, l, 0, -1, 1, 1);
                t.restore();
              }
              this.compose();
            }
            paintImageXObject(e) {
              if (!this.contentVisible) return;
              const t = e.startsWith("g_")
                ? this.commonObjs.get(e)
                : this.objs.get(e);
              t
                ? this.paintInlineImageXObject(t)
                : (0, s.warn)("Dependent image isn't ready yet");
            }
            paintImageXObjectRepeat(e, t, n, r) {
              if (!this.contentVisible) return;
              const a = e.startsWith("g_")
                ? this.commonObjs.get(e)
                : this.objs.get(e);
              if (!a) {
                (0, s.warn)("Dependent image isn't ready yet");
                return;
              }
              const i = a.width,
                o = a.height,
                l = [];
              for (let e = 0, s = r.length; e < s; e += 2)
                l.push({
                  transform: [t, 0, 0, n, r[e], r[e + 1]],
                  x: 0,
                  y: 0,
                  w: i,
                  h: o,
                });
              this.paintInlineImageXObjectGroup(a, l);
            }
            paintInlineImageXObject(e) {
              if (!this.contentVisible) return;
              const t = e.width,
                n = e.height,
                s = this.ctx;
              this.save();
              s.scale(1 / t, -1 / n);
              let r;
              if (
                ("function" == typeof HTMLElement &&
                  e instanceof HTMLElement) ||
                !e.data
              )
                r = e;
              else {
                const s = this.cachedCanvases.getCanvas("inlineImage", t, n);
                putBinaryImageData(s.context, e, this.current.transferMaps);
                r = s.canvas;
              }
              const a = this._scaleImage(r, s.mozCurrentTransformInverse);
              s.imageSmoothingEnabled = getImageSmoothingEnabled(
                s.mozCurrentTransform,
                e.interpolate
              );
              s.drawImage(
                a.img,
                0,
                0,
                a.paintWidth,
                a.paintHeight,
                0,
                -n,
                t,
                n
              );
              if (this.imageLayer) {
                const r = this.getCanvasPosition(0, -n);
                this.imageLayer.appendImage({
                  imgData: e,
                  left: r[0],
                  top: r[1],
                  width: t / s.mozCurrentTransformInverse[0],
                  height: n / s.mozCurrentTransformInverse[3],
                });
              }
              this.compose();
              this.restore();
            }
            paintInlineImageXObjectGroup(e, t) {
              if (!this.contentVisible) return;
              const n = this.ctx,
                s = e.width,
                r = e.height,
                a = this.cachedCanvases.getCanvas("inlineImage", s, r);
              putBinaryImageData(a.context, e, this.current.transferMaps);
              for (let i = 0, o = t.length; i < o; i++) {
                const o = t[i];
                n.save();
                n.transform.apply(n, o.transform);
                n.scale(1, -1);
                n.drawImage(a.canvas, o.x, o.y, o.w, o.h, 0, -1, 1, 1);
                if (this.imageLayer) {
                  const t = this.getCanvasPosition(o.x, o.y);
                  this.imageLayer.appendImage({
                    imgData: e,
                    left: t[0],
                    top: t[1],
                    width: s,
                    height: r,
                  });
                }
                n.restore();
              }
              this.compose();
            }
            paintSolidColorImageMask() {
              if (this.contentVisible) {
                this.ctx.fillRect(0, 0, 1, 1);
                this.compose();
              }
            }
            markPoint(e) {}
            markPointProps(e, t) {}
            beginMarkedContent(e) {
              this.markedContentStack.push({ visible: !0 });
            }
            beginMarkedContentProps(e, t) {
              "OC" === e
                ? this.markedContentStack.push({
                    visible: this.optionalContentConfig.isVisible(t),
                  })
                : this.markedContentStack.push({ visible: !0 });
              this.contentVisible = this.isContentVisible();
            }
            endMarkedContent() {
              this.markedContentStack.pop();
              this.contentVisible = this.isContentVisible();
            }
            beginCompat() {}
            endCompat() {}
            consumePath(e) {
              this.pendingClip && this.current.updateClipFromPath();
              this.pendingClip || this.compose(e);
              const t = this.ctx;
              if (this.pendingClip) {
                this.pendingClip === d ? t.clip("evenodd") : t.clip();
                this.pendingClip = null;
              }
              this.current.startNewPathAndClipBox(this.current.clipBox);
              t.beginPath();
            }
            getSinglePixelWidth() {
              if (null === this._cachedGetSinglePixelWidth) {
                const e = this.ctx.mozCurrentTransform,
                  t = Math.abs(e[0] * e[3] - e[2] * e[1]),
                  n = e[0] ** 2 + e[2] ** 2,
                  s = e[1] ** 2 + e[3] ** 2,
                  r = Math.sqrt(Math.max(n, s)) / t;
                n !== s && this._combinedScaleFactor * r > 1
                  ? (this._cachedGetSinglePixelWidth =
                      -this._combinedScaleFactor * r)
                  : t > Number.EPSILON
                  ? (this._cachedGetSinglePixelWidth = r)
                  : (this._cachedGetSinglePixelWidth = 1);
              }
              return this._cachedGetSinglePixelWidth;
            }
            getCanvasPosition(e, t) {
              const n = this.ctx.mozCurrentTransform;
              return [n[0] * e + n[2] * t + n[4], n[1] * e + n[3] * t + n[5]];
            }
            isContentVisible() {
              for (let e = this.markedContentStack.length - 1; e >= 0; e--)
                if (!this.markedContentStack[e].visible) return !1;
              return !0;
            }
          }
          t.CanvasGraphics = CanvasGraphics;
          for (const e in s.OPS)
            void 0 !== CanvasGraphics.prototype[e] &&
              (CanvasGraphics.prototype[s.OPS[e]] =
                CanvasGraphics.prototype[e]);
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.TilingPattern = t.PathType = void 0;
          t.getShadingPattern = function getShadingPattern(e) {
            switch (e[0]) {
              case "RadialAxial":
                return new RadialAxialShadingPattern(e);
              case "Mesh":
                return new MeshShadingPattern(e);
              case "Dummy":
                return new DummyShadingPattern();
            }
            throw new Error(`Unknown IR type: ${e[0]}`);
          };
          var s = n(1);
          const r = { FILL: "Fill", STROKE: "Stroke", SHADING: "Shading" };
          t.PathType = r;
          function applyBoundingBox(e, t) {
            if (!t || "undefined" == typeof Path2D) return;
            const n = t[2] - t[0],
              s = t[3] - t[1],
              r = new Path2D();
            r.rect(t[0], t[1], n, s);
            e.clip(r);
          }
          class BaseShadingPattern {
            constructor() {
              this.constructor === BaseShadingPattern &&
                (0, s.unreachable)("Cannot initialize BaseShadingPattern.");
            }
            getPattern() {
              (0, s.unreachable)("Abstract method `getPattern` called.");
            }
          }
          class RadialAxialShadingPattern extends BaseShadingPattern {
            constructor(e) {
              super();
              this._type = e[1];
              this._bbox = e[2];
              this._colorStops = e[3];
              this._p0 = e[4];
              this._p1 = e[5];
              this._r0 = e[6];
              this._r1 = e[7];
              this.matrix = null;
            }
            _createGradient(e) {
              let t;
              "axial" === this._type
                ? (t = e.createLinearGradient(
                    this._p0[0],
                    this._p0[1],
                    this._p1[0],
                    this._p1[1]
                  ))
                : "radial" === this._type &&
                  (t = e.createRadialGradient(
                    this._p0[0],
                    this._p0[1],
                    this._r0,
                    this._p1[0],
                    this._p1[1],
                    this._r1
                  ));
              for (const e of this._colorStops) t.addColorStop(e[0], e[1]);
              return t;
            }
            getPattern(e, t, n, a) {
              let i;
              if (a === r.STROKE || a === r.FILL) {
                const r = t.current.getClippedPathBoundingBox(
                    a,
                    e.mozCurrentTransform
                  ) || [0, 0, 0, 0],
                  o = Math.ceil(r[2] - r[0]) || 1,
                  l = Math.ceil(r[3] - r[1]) || 1,
                  c = t.cachedCanvases.getCanvas("pattern", o, l, !0),
                  h = c.context;
                h.clearRect(0, 0, h.canvas.width, h.canvas.height);
                h.beginPath();
                h.rect(0, 0, h.canvas.width, h.canvas.height);
                h.translate(-r[0], -r[1]);
                n = s.Util.transform(n, [1, 0, 0, 1, r[0], r[1]]);
                h.transform.apply(h, t.baseTransform);
                this.matrix && h.transform.apply(h, this.matrix);
                applyBoundingBox(h, this._bbox);
                h.fillStyle = this._createGradient(h);
                h.fill();
                i = e.createPattern(c.canvas, "no-repeat");
                const d = new DOMMatrix(n);
                try {
                  i.setTransform(d);
                } catch (e) {
                  (0, s.warn)(
                    `RadialAxialShadingPattern.getPattern: "${e?.message}".`
                  );
                }
              } else {
                applyBoundingBox(e, this._bbox);
                i = this._createGradient(e);
              }
              return i;
            }
          }
          function drawTriangle(e, t, n, s, r, a, i, o) {
            const l = t.coords,
              c = t.colors,
              h = e.data,
              d = 4 * e.width;
            let u;
            if (l[n + 1] > l[s + 1]) {
              u = n;
              n = s;
              s = u;
              u = a;
              a = i;
              i = u;
            }
            if (l[s + 1] > l[r + 1]) {
              u = s;
              s = r;
              r = u;
              u = i;
              i = o;
              o = u;
            }
            if (l[n + 1] > l[s + 1]) {
              u = n;
              n = s;
              s = u;
              u = a;
              a = i;
              i = u;
            }
            const p = (l[n] + t.offsetX) * t.scaleX,
              g = (l[n + 1] + t.offsetY) * t.scaleY,
              f = (l[s] + t.offsetX) * t.scaleX,
              m = (l[s + 1] + t.offsetY) * t.scaleY,
              _ = (l[r] + t.offsetX) * t.scaleX,
              A = (l[r + 1] + t.offsetY) * t.scaleY;
            if (g >= A) return;
            const b = c[a],
              y = c[a + 1],
              S = c[a + 2],
              x = c[i],
              v = c[i + 1],
              C = c[i + 2],
              P = c[o],
              w = c[o + 1],
              T = c[o + 2],
              k = Math.round(g),
              F = Math.round(A);
            let R, E, M, D, O, I, L, N;
            for (let e = k; e <= F; e++) {
              if (e < m) {
                let t;
                t = e < g ? 0 : (g - e) / (g - m);
                R = p - (p - f) * t;
                E = b - (b - x) * t;
                M = y - (y - v) * t;
                D = S - (S - C) * t;
              } else {
                let t;
                t = e > A ? 1 : m === A ? 0 : (m - e) / (m - A);
                R = f - (f - _) * t;
                E = x - (x - P) * t;
                M = v - (v - w) * t;
                D = C - (C - T) * t;
              }
              let t;
              t = e < g ? 0 : e > A ? 1 : (g - e) / (g - A);
              O = p - (p - _) * t;
              I = b - (b - P) * t;
              L = y - (y - w) * t;
              N = S - (S - T) * t;
              const n = Math.round(Math.min(R, O)),
                s = Math.round(Math.max(R, O));
              let r = d * e + 4 * n;
              for (let e = n; e <= s; e++) {
                t = (R - e) / (R - O);
                t < 0 ? (t = 0) : t > 1 && (t = 1);
                h[r++] = (E - (E - I) * t) | 0;
                h[r++] = (M - (M - L) * t) | 0;
                h[r++] = (D - (D - N) * t) | 0;
                h[r++] = 255;
              }
            }
          }
          function drawFigure(e, t, n) {
            const s = t.coords,
              r = t.colors;
            let a, i;
            switch (t.type) {
              case "lattice":
                const o = t.verticesPerRow,
                  l = Math.floor(s.length / o) - 1,
                  c = o - 1;
                for (a = 0; a < l; a++) {
                  let t = a * o;
                  for (let a = 0; a < c; a++, t++) {
                    drawTriangle(
                      e,
                      n,
                      s[t],
                      s[t + 1],
                      s[t + o],
                      r[t],
                      r[t + 1],
                      r[t + o]
                    );
                    drawTriangle(
                      e,
                      n,
                      s[t + o + 1],
                      s[t + 1],
                      s[t + o],
                      r[t + o + 1],
                      r[t + 1],
                      r[t + o]
                    );
                  }
                }
                break;
              case "triangles":
                for (a = 0, i = s.length; a < i; a += 3)
                  drawTriangle(
                    e,
                    n,
                    s[a],
                    s[a + 1],
                    s[a + 2],
                    r[a],
                    r[a + 1],
                    r[a + 2]
                  );
                break;
              default:
                throw new Error("illegal figure");
            }
          }
          class MeshShadingPattern extends BaseShadingPattern {
            constructor(e) {
              super();
              this._coords = e[2];
              this._colors = e[3];
              this._figures = e[4];
              this._bounds = e[5];
              this._bbox = e[7];
              this._background = e[8];
              this.matrix = null;
            }
            _createMeshCanvas(e, t, n) {
              const s = Math.floor(this._bounds[0]),
                r = Math.floor(this._bounds[1]),
                a = Math.ceil(this._bounds[2]) - s,
                i = Math.ceil(this._bounds[3]) - r,
                o = Math.min(Math.ceil(Math.abs(a * e[0] * 1.1)), 3e3),
                l = Math.min(Math.ceil(Math.abs(i * e[1] * 1.1)), 3e3),
                c = a / o,
                h = i / l,
                d = {
                  coords: this._coords,
                  colors: this._colors,
                  offsetX: -s,
                  offsetY: -r,
                  scaleX: 1 / c,
                  scaleY: 1 / h,
                },
                u = o + 4,
                p = l + 4,
                g = n.getCanvas("mesh", u, p, !1),
                f = g.context,
                m = f.createImageData(o, l);
              if (t) {
                const e = m.data;
                for (let n = 0, s = e.length; n < s; n += 4) {
                  e[n] = t[0];
                  e[n + 1] = t[1];
                  e[n + 2] = t[2];
                  e[n + 3] = 255;
                }
              }
              for (const e of this._figures) drawFigure(m, e, d);
              f.putImageData(m, 2, 2);
              return {
                canvas: g.canvas,
                offsetX: s - 2 * c,
                offsetY: r - 2 * h,
                scaleX: c,
                scaleY: h,
              };
            }
            getPattern(e, t, n, a) {
              applyBoundingBox(e, this._bbox);
              let i;
              if (a === r.SHADING)
                i = s.Util.singularValueDecompose2dScale(e.mozCurrentTransform);
              else {
                i = s.Util.singularValueDecompose2dScale(t.baseTransform);
                if (this.matrix) {
                  const e = s.Util.singularValueDecompose2dScale(this.matrix);
                  i = [i[0] * e[0], i[1] * e[1]];
                }
              }
              const o = this._createMeshCanvas(
                i,
                a === r.SHADING ? null : this._background,
                t.cachedCanvases
              );
              if (a !== r.SHADING) {
                e.setTransform.apply(e, t.baseTransform);
                this.matrix && e.transform.apply(e, this.matrix);
              }
              e.translate(o.offsetX, o.offsetY);
              e.scale(o.scaleX, o.scaleY);
              return e.createPattern(o.canvas, "no-repeat");
            }
          }
          class DummyShadingPattern extends BaseShadingPattern {
            getPattern() {
              return "hotpink";
            }
          }
          const a = 1,
            i = 2;
          class TilingPattern {
            static get MAX_PATTERN_SIZE() {
              return (0, s.shadow)(this, "MAX_PATTERN_SIZE", 3e3);
            }
            constructor(e, t, n, s, r) {
              this.operatorList = e[2];
              this.matrix = e[3] || [1, 0, 0, 1, 0, 0];
              this.bbox = e[4];
              this.xstep = e[5];
              this.ystep = e[6];
              this.paintType = e[7];
              this.tilingType = e[8];
              this.color = t;
              this.ctx = n;
              this.canvasGraphicsFactory = s;
              this.baseTransform = r;
            }
            createPatternCanvas(e) {
              const t = this.operatorList,
                n = this.bbox,
                r = this.xstep,
                a = this.ystep,
                i = this.paintType,
                o = this.tilingType,
                l = this.color,
                c = this.canvasGraphicsFactory;
              (0, s.info)("TilingType: " + o);
              const h = n[0],
                d = n[1],
                u = n[2],
                p = n[3],
                g = s.Util.singularValueDecompose2dScale(this.matrix),
                f = s.Util.singularValueDecompose2dScale(this.baseTransform),
                m = [g[0] * f[0], g[1] * f[1]],
                _ = this.getSizeAndScale(r, this.ctx.canvas.width, m[0]),
                A = this.getSizeAndScale(a, this.ctx.canvas.height, m[1]),
                b = e.cachedCanvases.getCanvas("pattern", _.size, A.size, !0),
                y = b.context,
                S = c.createCanvasGraphics(y);
              S.groupLevel = e.groupLevel;
              this.setFillAndStrokeStyleToContext(S, i, l);
              let x = h,
                v = d,
                C = u,
                P = p;
              if (h < 0) {
                x = 0;
                C += Math.abs(h);
              }
              if (d < 0) {
                v = 0;
                P += Math.abs(d);
              }
              y.translate(-_.scale * x, -A.scale * v);
              S.transform(_.scale, 0, 0, A.scale, 0, 0);
              y.save();
              this.clipBbox(S, x, v, C, P);
              S.baseTransform = S.ctx.mozCurrentTransform.slice();
              S.executeOperatorList(t);
              S.endDrawing();
              return {
                canvas: b.canvas,
                scaleX: _.scale,
                scaleY: A.scale,
                offsetX: x,
                offsetY: v,
              };
            }
            getSizeAndScale(e, t, n) {
              e = Math.abs(e);
              const s = Math.max(TilingPattern.MAX_PATTERN_SIZE, t);
              let r = Math.ceil(e * n);
              r >= s ? (r = s) : (n = r / e);
              return { scale: n, size: r };
            }
            clipBbox(e, t, n, s, r) {
              const a = s - t,
                i = r - n;
              e.ctx.rect(t, n, a, i);
              e.clip();
              e.endPath();
            }
            setFillAndStrokeStyleToContext(e, t, n) {
              const r = e.ctx,
                o = e.current;
              switch (t) {
                case a:
                  const e = this.ctx;
                  r.fillStyle = e.fillStyle;
                  r.strokeStyle = e.strokeStyle;
                  o.fillColor = e.fillStyle;
                  o.strokeColor = e.strokeStyle;
                  break;
                case i:
                  const l = s.Util.makeHexColor(n[0], n[1], n[2]);
                  r.fillStyle = l;
                  r.strokeStyle = l;
                  o.fillColor = l;
                  o.strokeColor = l;
                  break;
                default:
                  throw new s.FormatError(`Unsupported paint type: ${t}`);
              }
            }
            getPattern(e, t, n, a) {
              let i = n;
              if (a !== r.SHADING) {
                i = s.Util.transform(i, t.baseTransform);
                this.matrix && (i = s.Util.transform(i, this.matrix));
              }
              const o = this.createPatternCanvas(t);
              let l = new DOMMatrix(i);
              l = l.translate(o.offsetX, o.offsetY);
              l = l.scale(1 / o.scaleX, 1 / o.scaleY);
              const c = e.createPattern(o.canvas, "repeat");
              try {
                c.setTransform(l);
              } catch (e) {
                (0, s.warn)(`TilingPattern.getPattern: "${e?.message}".`);
              }
              return c;
            }
          }
          t.TilingPattern = TilingPattern;
        },
        (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.GlobalWorkerOptions = void 0;
          const n = Object.create(null);
          t.GlobalWorkerOptions = n;
          n.workerPort = void 0 === n.workerPort ? null : n.workerPort;
          n.workerSrc = void 0 === n.workerSrc ? "" : n.workerSrc;
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.MessageHandler = void 0;
          var s = n(1);
          const r = 1,
            a = 2,
            i = 1,
            o = 2,
            l = 3,
            c = 4,
            h = 5,
            d = 6,
            u = 7,
            p = 8;
          function wrapReason(e) {
            e instanceof Error ||
              ("object" == typeof e && null !== e) ||
              (0, s.unreachable)(
                'wrapReason: Expected "reason" to be a (possibly cloned) Error.'
              );
            switch (e.name) {
              case "AbortException":
                return new s.AbortException(e.message);
              case "MissingPDFException":
                return new s.MissingPDFException(e.message);
              case "PasswordException":
                return new s.PasswordException(e.message, e.code);
              case "UnexpectedResponseException":
                return new s.UnexpectedResponseException(e.message, e.status);
              case "UnknownErrorException":
                return new s.UnknownErrorException(e.message, e.details);
              default:
                return new s.UnknownErrorException(e.message, e.toString());
            }
          }
          t.MessageHandler = class MessageHandler {
            constructor(e, t, n) {
              this.sourceName = e;
              this.targetName = t;
              this.comObj = n;
              this.callbackId = 1;
              this.streamId = 1;
              this.streamSinks = Object.create(null);
              this.streamControllers = Object.create(null);
              this.callbackCapabilities = Object.create(null);
              this.actionHandler = Object.create(null);
              this._onComObjOnMessage = (e) => {
                const t = e.data;
                if (t.targetName !== this.sourceName) return;
                if (t.stream) {
                  this._processStreamMessage(t);
                  return;
                }
                if (t.callback) {
                  const e = t.callbackId,
                    n = this.callbackCapabilities[e];
                  if (!n) throw new Error(`Cannot resolve callback ${e}`);
                  delete this.callbackCapabilities[e];
                  if (t.callback === r) n.resolve(t.data);
                  else {
                    if (t.callback !== a)
                      throw new Error("Unexpected callback case");
                    n.reject(wrapReason(t.reason));
                  }
                  return;
                }
                const s = this.actionHandler[t.action];
                if (!s)
                  throw new Error(`Unknown action from worker: ${t.action}`);
                if (t.callbackId) {
                  const e = this.sourceName,
                    i = t.sourceName;
                  new Promise(function (e) {
                    e(s(t.data));
                  }).then(
                    function (s) {
                      n.postMessage({
                        sourceName: e,
                        targetName: i,
                        callback: r,
                        callbackId: t.callbackId,
                        data: s,
                      });
                    },
                    function (s) {
                      n.postMessage({
                        sourceName: e,
                        targetName: i,
                        callback: a,
                        callbackId: t.callbackId,
                        reason: wrapReason(s),
                      });
                    }
                  );
                } else t.streamId ? this._createStreamSink(t) : s(t.data);
              };
              n.addEventListener("message", this._onComObjOnMessage);
            }
            on(e, t) {
              const n = this.actionHandler;
              if (n[e])
                throw new Error(`There is already an actionName called "${e}"`);
              n[e] = t;
            }
            send(e, t, n) {
              this.comObj.postMessage(
                {
                  sourceName: this.sourceName,
                  targetName: this.targetName,
                  action: e,
                  data: t,
                },
                n
              );
            }
            sendWithPromise(e, t, n) {
              const r = this.callbackId++,
                a = (0, s.createPromiseCapability)();
              this.callbackCapabilities[r] = a;
              try {
                this.comObj.postMessage(
                  {
                    sourceName: this.sourceName,
                    targetName: this.targetName,
                    action: e,
                    callbackId: r,
                    data: t,
                  },
                  n
                );
              } catch (e) {
                a.reject(e);
              }
              return a.promise;
            }
            sendWithStream(e, t, n, r) {
              const a = this.streamId++,
                o = this.sourceName,
                l = this.targetName,
                c = this.comObj;
              return new ReadableStream(
                {
                  start: (n) => {
                    const i = (0, s.createPromiseCapability)();
                    this.streamControllers[a] = {
                      controller: n,
                      startCall: i,
                      pullCall: null,
                      cancelCall: null,
                      isClosed: !1,
                    };
                    c.postMessage(
                      {
                        sourceName: o,
                        targetName: l,
                        action: e,
                        streamId: a,
                        data: t,
                        desiredSize: n.desiredSize,
                      },
                      r
                    );
                    return i.promise;
                  },
                  pull: (e) => {
                    const t = (0, s.createPromiseCapability)();
                    this.streamControllers[a].pullCall = t;
                    c.postMessage({
                      sourceName: o,
                      targetName: l,
                      stream: d,
                      streamId: a,
                      desiredSize: e.desiredSize,
                    });
                    return t.promise;
                  },
                  cancel: (e) => {
                    (0, s.assert)(
                      e instanceof Error,
                      "cancel must have a valid reason"
                    );
                    const t = (0, s.createPromiseCapability)();
                    this.streamControllers[a].cancelCall = t;
                    this.streamControllers[a].isClosed = !0;
                    c.postMessage({
                      sourceName: o,
                      targetName: l,
                      stream: i,
                      streamId: a,
                      reason: wrapReason(e),
                    });
                    return t.promise;
                  },
                },
                n
              );
            }
            _createStreamSink(e) {
              const t = e.streamId,
                n = this.sourceName,
                r = e.sourceName,
                a = this.comObj,
                i = this,
                o = this.actionHandler[e.action],
                d = {
                  enqueue(e, i = 1, o) {
                    if (this.isCancelled) return;
                    const l = this.desiredSize;
                    this.desiredSize -= i;
                    if (l > 0 && this.desiredSize <= 0) {
                      this.sinkCapability = (0, s.createPromiseCapability)();
                      this.ready = this.sinkCapability.promise;
                    }
                    a.postMessage(
                      {
                        sourceName: n,
                        targetName: r,
                        stream: c,
                        streamId: t,
                        chunk: e,
                      },
                      o
                    );
                  },
                  close() {
                    if (!this.isCancelled) {
                      this.isCancelled = !0;
                      a.postMessage({
                        sourceName: n,
                        targetName: r,
                        stream: l,
                        streamId: t,
                      });
                      delete i.streamSinks[t];
                    }
                  },
                  error(e) {
                    (0, s.assert)(
                      e instanceof Error,
                      "error must have a valid reason"
                    );
                    if (!this.isCancelled) {
                      this.isCancelled = !0;
                      a.postMessage({
                        sourceName: n,
                        targetName: r,
                        stream: h,
                        streamId: t,
                        reason: wrapReason(e),
                      });
                    }
                  },
                  sinkCapability: (0, s.createPromiseCapability)(),
                  onPull: null,
                  onCancel: null,
                  isCancelled: !1,
                  desiredSize: e.desiredSize,
                  ready: null,
                };
              d.sinkCapability.resolve();
              d.ready = d.sinkCapability.promise;
              this.streamSinks[t] = d;
              new Promise(function (t) {
                t(o(e.data, d));
              }).then(
                function () {
                  a.postMessage({
                    sourceName: n,
                    targetName: r,
                    stream: p,
                    streamId: t,
                    success: !0,
                  });
                },
                function (e) {
                  a.postMessage({
                    sourceName: n,
                    targetName: r,
                    stream: p,
                    streamId: t,
                    reason: wrapReason(e),
                  });
                }
              );
            }
            _processStreamMessage(e) {
              const t = e.streamId,
                n = this.sourceName,
                r = e.sourceName,
                a = this.comObj,
                g = this.streamControllers[t],
                f = this.streamSinks[t];
              switch (e.stream) {
                case p:
                  e.success
                    ? g.startCall.resolve()
                    : g.startCall.reject(wrapReason(e.reason));
                  break;
                case u:
                  e.success
                    ? g.pullCall.resolve()
                    : g.pullCall.reject(wrapReason(e.reason));
                  break;
                case d:
                  if (!f) {
                    a.postMessage({
                      sourceName: n,
                      targetName: r,
                      stream: u,
                      streamId: t,
                      success: !0,
                    });
                    break;
                  }
                  f.desiredSize <= 0 &&
                    e.desiredSize > 0 &&
                    f.sinkCapability.resolve();
                  f.desiredSize = e.desiredSize;
                  new Promise(function (e) {
                    e(f.onPull && f.onPull());
                  }).then(
                    function () {
                      a.postMessage({
                        sourceName: n,
                        targetName: r,
                        stream: u,
                        streamId: t,
                        success: !0,
                      });
                    },
                    function (e) {
                      a.postMessage({
                        sourceName: n,
                        targetName: r,
                        stream: u,
                        streamId: t,
                        reason: wrapReason(e),
                      });
                    }
                  );
                  break;
                case c:
                  (0, s.assert)(g, "enqueue should have stream controller");
                  if (g.isClosed) break;
                  g.controller.enqueue(e.chunk);
                  break;
                case l:
                  (0, s.assert)(g, "close should have stream controller");
                  if (g.isClosed) break;
                  g.isClosed = !0;
                  g.controller.close();
                  this._deleteStreamController(g, t);
                  break;
                case h:
                  (0, s.assert)(g, "error should have stream controller");
                  g.controller.error(wrapReason(e.reason));
                  this._deleteStreamController(g, t);
                  break;
                case o:
                  e.success
                    ? g.cancelCall.resolve()
                    : g.cancelCall.reject(wrapReason(e.reason));
                  this._deleteStreamController(g, t);
                  break;
                case i:
                  if (!f) break;
                  new Promise(function (t) {
                    t(f.onCancel && f.onCancel(wrapReason(e.reason)));
                  }).then(
                    function () {
                      a.postMessage({
                        sourceName: n,
                        targetName: r,
                        stream: o,
                        streamId: t,
                        success: !0,
                      });
                    },
                    function (e) {
                      a.postMessage({
                        sourceName: n,
                        targetName: r,
                        stream: o,
                        streamId: t,
                        reason: wrapReason(e),
                      });
                    }
                  );
                  f.sinkCapability.reject(wrapReason(e.reason));
                  f.isCancelled = !0;
                  delete this.streamSinks[t];
                  break;
                default:
                  throw new Error("Unexpected stream case");
              }
            }
            async _deleteStreamController(e, t) {
              await Promise.allSettled([
                e.startCall && e.startCall.promise,
                e.pullCall && e.pullCall.promise,
                e.cancelCall && e.cancelCall.promise,
              ]);
              delete this.streamControllers[t];
            }
            destroy() {
              this.comObj.removeEventListener(
                "message",
                this._onComObjOnMessage
              );
            }
          };
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.Metadata = void 0;
          var s = n(1);
          t.Metadata = class Metadata {
            #i;
            #o;
            constructor({ parsedData: e, rawData: t }) {
              this.#i = e;
              this.#o = t;
            }
            getRaw() {
              return this.#o;
            }
            get(e) {
              return this.#i.get(e) ?? null;
            }
            getAll() {
              return (0, s.objectFromMap)(this.#i);
            }
            has(e) {
              return this.#i.has(e);
            }
          };
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.OptionalContentConfig = void 0;
          var s = n(1);
          class OptionalContentGroup {
            constructor(e, t) {
              this.visible = !0;
              this.name = e;
              this.intent = t;
            }
          }
          t.OptionalContentConfig = class OptionalContentConfig {
            constructor(e) {
              this.name = null;
              this.creator = null;
              this._order = null;
              this._groups = new Map();
              if (null !== e) {
                this.name = e.name;
                this.creator = e.creator;
                this._order = e.order;
                for (const t of e.groups)
                  this._groups.set(
                    t.id,
                    new OptionalContentGroup(t.name, t.intent)
                  );
                if ("OFF" === e.baseState)
                  for (const e of this._groups) e.visible = !1;
                for (const t of e.on) this._groups.get(t).visible = !0;
                for (const t of e.off) this._groups.get(t).visible = !1;
              }
            }
            _evaluateVisibilityExpression(e) {
              const t = e.length;
              if (t < 2) return !0;
              const n = e[0];
              for (let r = 1; r < t; r++) {
                const t = e[r];
                let a;
                if (Array.isArray(t)) a = this._evaluateVisibilityExpression(t);
                else {
                  if (!this._groups.has(t)) {
                    (0, s.warn)(`Optional content group not found: ${t}`);
                    return !0;
                  }
                  a = this._groups.get(t).visible;
                }
                switch (n) {
                  case "And":
                    if (!a) return !1;
                    break;
                  case "Or":
                    if (a) return !0;
                    break;
                  case "Not":
                    return !a;
                  default:
                    return !0;
                }
              }
              return "And" === n;
            }
            isVisible(e) {
              if (0 === this._groups.size) return !0;
              if (!e) {
                (0, s.warn)("Optional content group not defined.");
                return !0;
              }
              if ("OCG" === e.type) {
                if (!this._groups.has(e.id)) {
                  (0, s.warn)(`Optional content group not found: ${e.id}`);
                  return !0;
                }
                return this._groups.get(e.id).visible;
              }
              if ("OCMD" === e.type) {
                if (e.expression)
                  return this._evaluateVisibilityExpression(e.expression);
                if (!e.policy || "AnyOn" === e.policy) {
                  for (const t of e.ids) {
                    if (!this._groups.has(t)) {
                      (0, s.warn)(`Optional content group not found: ${t}`);
                      return !0;
                    }
                    if (this._groups.get(t).visible) return !0;
                  }
                  return !1;
                }
                if ("AllOn" === e.policy) {
                  for (const t of e.ids) {
                    if (!this._groups.has(t)) {
                      (0, s.warn)(`Optional content group not found: ${t}`);
                      return !0;
                    }
                    if (!this._groups.get(t).visible) return !1;
                  }
                  return !0;
                }
                if ("AnyOff" === e.policy) {
                  for (const t of e.ids) {
                    if (!this._groups.has(t)) {
                      (0, s.warn)(`Optional content group not found: ${t}`);
                      return !0;
                    }
                    if (!this._groups.get(t).visible) return !0;
                  }
                  return !1;
                }
                if ("AllOff" === e.policy) {
                  for (const t of e.ids) {
                    if (!this._groups.has(t)) {
                      (0, s.warn)(`Optional content group not found: ${t}`);
                      return !0;
                    }
                    if (this._groups.get(t).visible) return !1;
                  }
                  return !0;
                }
                (0, s.warn)(`Unknown optional content policy ${e.policy}.`);
                return !0;
              }
              (0, s.warn)(`Unknown group type ${e.type}.`);
              return !0;
            }
            setVisibility(e, t = !0) {
              this._groups.has(e)
                ? (this._groups.get(e).visible = !!t)
                : (0, s.warn)(`Optional content group not found: ${e}`);
            }
            getOrder() {
              return this._groups.size
                ? this._order
                  ? this._order.slice()
                  : Array.from(this._groups.keys())
                : null;
            }
            getGroups() {
              return this._groups.size > 0
                ? (0, s.objectFromMap)(this._groups)
                : null;
            }
            getGroup(e) {
              return this._groups.get(e) || null;
            }
          };
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.PDFDataTransportStream = void 0;
          var s = n(1),
            r = n(5);
          t.PDFDataTransportStream = class PDFDataTransportStream {
            constructor(e, t) {
              (0, s.assert)(
                t,
                'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'
              );
              this._queuedChunks = [];
              this._progressiveDone = e.progressiveDone || !1;
              this._contentDispositionFilename =
                e.contentDispositionFilename || null;
              const n = e.initialData;
              if (n?.length > 0) {
                const e = new Uint8Array(n).buffer;
                this._queuedChunks.push(e);
              }
              this._pdfDataRangeTransport = t;
              this._isStreamingSupported = !e.disableStream;
              this._isRangeSupported = !e.disableRange;
              this._contentLength = e.length;
              this._fullRequestReader = null;
              this._rangeReaders = [];
              this._pdfDataRangeTransport.addRangeListener((e, t) => {
                this._onReceiveData({ begin: e, chunk: t });
              });
              this._pdfDataRangeTransport.addProgressListener((e, t) => {
                this._onProgress({ loaded: e, total: t });
              });
              this._pdfDataRangeTransport.addProgressiveReadListener((e) => {
                this._onReceiveData({ chunk: e });
              });
              this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
                this._onProgressiveDone();
              });
              this._pdfDataRangeTransport.transportReady();
            }
            _onReceiveData(e) {
              const t = new Uint8Array(e.chunk).buffer;
              if (void 0 === e.begin)
                this._fullRequestReader
                  ? this._fullRequestReader._enqueue(t)
                  : this._queuedChunks.push(t);
              else {
                const n = this._rangeReaders.some(function (n) {
                  if (n._begin !== e.begin) return !1;
                  n._enqueue(t);
                  return !0;
                });
                (0, s.assert)(
                  n,
                  "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found."
                );
              }
            }
            get _progressiveDataLength() {
              return this._fullRequestReader?._loaded ?? 0;
            }
            _onProgress(e) {
              if (void 0 === e.total) {
                const t = this._rangeReaders[0];
                t?.onProgress && t.onProgress({ loaded: e.loaded });
              } else {
                const t = this._fullRequestReader;
                t?.onProgress &&
                  t.onProgress({ loaded: e.loaded, total: e.total });
              }
            }
            _onProgressiveDone() {
              this._fullRequestReader &&
                this._fullRequestReader.progressiveDone();
              this._progressiveDone = !0;
            }
            _removeRangeReader(e) {
              const t = this._rangeReaders.indexOf(e);
              t >= 0 && this._rangeReaders.splice(t, 1);
            }
            getFullReader() {
              (0, s.assert)(
                !this._fullRequestReader,
                "PDFDataTransportStream.getFullReader can only be called once."
              );
              const e = this._queuedChunks;
              this._queuedChunks = null;
              return new PDFDataTransportStreamReader(
                this,
                e,
                this._progressiveDone,
                this._contentDispositionFilename
              );
            }
            getRangeReader(e, t) {
              if (t <= this._progressiveDataLength) return null;
              const n = new PDFDataTransportStreamRangeReader(this, e, t);
              this._pdfDataRangeTransport.requestDataRange(e, t);
              this._rangeReaders.push(n);
              return n;
            }
            cancelAllRequests(e) {
              this._fullRequestReader && this._fullRequestReader.cancel(e);
              for (const t of this._rangeReaders.slice(0)) t.cancel(e);
              this._pdfDataRangeTransport.abort();
            }
          };
          class PDFDataTransportStreamReader {
            constructor(e, t, n = !1, s = null) {
              this._stream = e;
              this._done = n || !1;
              this._filename = (0, r.isPdfFile)(s) ? s : null;
              this._queuedChunks = t || [];
              this._loaded = 0;
              for (const e of this._queuedChunks) this._loaded += e.byteLength;
              this._requests = [];
              this._headersReady = Promise.resolve();
              e._fullRequestReader = this;
              this.onProgress = null;
            }
            _enqueue(e) {
              if (!this._done) {
                if (this._requests.length > 0) {
                  this._requests.shift().resolve({ value: e, done: !1 });
                } else this._queuedChunks.push(e);
                this._loaded += e.byteLength;
              }
            }
            get headersReady() {
              return this._headersReady;
            }
            get filename() {
              return this._filename;
            }
            get isRangeSupported() {
              return this._stream._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._stream._isStreamingSupported;
            }
            get contentLength() {
              return this._stream._contentLength;
            }
            async read() {
              if (this._queuedChunks.length > 0) {
                return { value: this._queuedChunks.shift(), done: !1 };
              }
              if (this._done) return { value: void 0, done: !0 };
              const e = (0, s.createPromiseCapability)();
              this._requests.push(e);
              return e.promise;
            }
            cancel(e) {
              this._done = !0;
              for (const e of this._requests)
                e.resolve({ value: void 0, done: !0 });
              this._requests.length = 0;
            }
            progressiveDone() {
              this._done || (this._done = !0);
            }
          }
          class PDFDataTransportStreamRangeReader {
            constructor(e, t, n) {
              this._stream = e;
              this._begin = t;
              this._end = n;
              this._queuedChunk = null;
              this._requests = [];
              this._done = !1;
              this.onProgress = null;
            }
            _enqueue(e) {
              if (!this._done) {
                if (0 === this._requests.length) this._queuedChunk = e;
                else {
                  this._requests.shift().resolve({ value: e, done: !1 });
                  for (const e of this._requests)
                    e.resolve({ value: void 0, done: !0 });
                  this._requests.length = 0;
                }
                this._done = !0;
                this._stream._removeRangeReader(this);
              }
            }
            get isStreamingSupported() {
              return !1;
            }
            async read() {
              if (this._queuedChunk) {
                const e = this._queuedChunk;
                this._queuedChunk = null;
                return { value: e, done: !1 };
              }
              if (this._done) return { value: void 0, done: !0 };
              const e = (0, s.createPromiseCapability)();
              this._requests.push(e);
              return e.promise;
            }
            cancel(e) {
              this._done = !0;
              for (const e of this._requests)
                e.resolve({ value: void 0, done: !0 });
              this._requests.length = 0;
              this._stream._removeRangeReader(this);
            }
          }
        },
        (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.XfaText = void 0;
          class XfaText {
            static textContent(e) {
              const t = [],
                n = { items: t, styles: Object.create(null) };
              !(function walk(e) {
                if (!e) return;
                let n = null;
                const s = e.name;
                if ("#text" === s) n = e.value;
                else {
                  if (!XfaText.shouldBuildText(s)) return;
                  e?.attributes?.textContent
                    ? (n = e.attributes.textContent)
                    : e.value && (n = e.value);
                }
                null !== n && t.push({ str: n });
                if (e.children) for (const t of e.children) walk(t);
              })(e);
              return n;
            }
            static shouldBuildText(e) {
              return !(
                "textarea" === e ||
                "input" === e ||
                "option" === e ||
                "select" === e
              );
            }
          }
          t.XfaText = XfaText;
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.AnnotationLayer = void 0;
          var s = n(1),
            r = n(5),
            a = n(9),
            i = n(19),
            o = n(20);
          const l = 1e3,
            c = new WeakSet();
          function getRectDims(e) {
            return { width: e[2] - e[0], height: e[3] - e[1] };
          }
          class AnnotationElementFactory {
            static create(e) {
              switch (e.data.annotationType) {
                case s.AnnotationType.LINK:
                  return new LinkAnnotationElement(e);
                case s.AnnotationType.TEXT:
                  return new TextAnnotationElement(e);
                case s.AnnotationType.WIDGET:
                  switch (e.data.fieldType) {
                    case "Tx":
                      return new TextWidgetAnnotationElement(e);
                    case "Btn":
                      return e.data.radioButton
                        ? new RadioButtonWidgetAnnotationElement(e)
                        : e.data.checkBox
                        ? new CheckboxWidgetAnnotationElement(e)
                        : new PushButtonWidgetAnnotationElement(e);
                    case "Ch":
                      return new ChoiceWidgetAnnotationElement(e);
                  }
                  return new WidgetAnnotationElement(e);
                case s.AnnotationType.POPUP:
                  return new PopupAnnotationElement(e);
                case s.AnnotationType.FREETEXT:
                  return new FreeTextAnnotationElement(e);
                case s.AnnotationType.LINE:
                  return new LineAnnotationElement(e);
                case s.AnnotationType.SQUARE:
                  return new SquareAnnotationElement(e);
                case s.AnnotationType.CIRCLE:
                  return new CircleAnnotationElement(e);
                case s.AnnotationType.POLYLINE:
                  return new PolylineAnnotationElement(e);
                case s.AnnotationType.CARET:
                  return new CaretAnnotationElement(e);
                case s.AnnotationType.INK:
                  return new InkAnnotationElement(e);
                case s.AnnotationType.POLYGON:
                  return new PolygonAnnotationElement(e);
                case s.AnnotationType.HIGHLIGHT:
                  return new HighlightAnnotationElement(e);
                case s.AnnotationType.UNDERLINE:
                  return new UnderlineAnnotationElement(e);
                case s.AnnotationType.SQUIGGLY:
                  return new SquigglyAnnotationElement(e);
                case s.AnnotationType.STRIKEOUT:
                  return new StrikeOutAnnotationElement(e);
                case s.AnnotationType.STAMP:
                  return new StampAnnotationElement(e);
                case s.AnnotationType.FILEATTACHMENT:
                  return new FileAttachmentAnnotationElement(e);
                default:
                  return new AnnotationElement(e);
              }
            }
          }
          class AnnotationElement {
            constructor(
              e,
              {
                isRenderable: t = !1,
                ignoreBorder: n = !1,
                createQuadrilaterals: s = !1,
              } = {}
            ) {
              this.isRenderable = t;
              this.data = e.data;
              this.layer = e.layer;
              this.page = e.page;
              this.viewport = e.viewport;
              this.linkService = e.linkService;
              this.downloadManager = e.downloadManager;
              this.imageResourcesPath = e.imageResourcesPath;
              this.renderForms = e.renderForms;
              this.svgFactory = e.svgFactory;
              this.annotationStorage = e.annotationStorage;
              this.enableScripting = e.enableScripting;
              this.hasJSActions = e.hasJSActions;
              this._fieldObjects = e.fieldObjects;
              this._mouseState = e.mouseState;
              t && (this.container = this._createContainer(n));
              s && (this.quadrilaterals = this._createQuadrilaterals(n));
            }
            _createContainer(e = !1) {
              const t = this.data,
                n = this.page,
                r = this.viewport,
                a = document.createElement("section");
              let { width: i, height: o } = getRectDims(t.rect);
              a.setAttribute("data-annotation-id", t.id);
              const l = s.Util.normalizeRect([
                t.rect[0],
                n.view[3] - t.rect[1] + n.view[1],
                t.rect[2],
                n.view[3] - t.rect[3] + n.view[1],
              ]);
              if (t.hasOwnCanvas) {
                const e = r.transform.slice(),
                  [t, n] = s.Util.singularValueDecompose2dScale(e);
                i = Math.ceil(i * t);
                o = Math.ceil(o * n);
                l[0] *= t;
                l[1] *= n;
                for (let t = 0; t < 4; t++) e[t] = Math.sign(e[t]);
                a.style.transform = `matrix(${e.join(",")})`;
              } else a.style.transform = `matrix(${r.transform.join(",")})`;
              a.style.transformOrigin = `${-l[0]}px ${-l[1]}px`;
              if (!e && t.borderStyle.width > 0) {
                a.style.borderWidth = `${t.borderStyle.width}px`;
                if (
                  t.borderStyle.style !== s.AnnotationBorderStyleType.UNDERLINE
                ) {
                  i -= 2 * t.borderStyle.width;
                  o -= 2 * t.borderStyle.width;
                }
                const e = t.borderStyle.horizontalCornerRadius,
                  n = t.borderStyle.verticalCornerRadius;
                if (e > 0 || n > 0) {
                  const t = `${e}px / ${n}px`;
                  a.style.borderRadius = t;
                }
                switch (t.borderStyle.style) {
                  case s.AnnotationBorderStyleType.SOLID:
                    a.style.borderStyle = "solid";
                    break;
                  case s.AnnotationBorderStyleType.DASHED:
                    a.style.borderStyle = "dashed";
                    break;
                  case s.AnnotationBorderStyleType.BEVELED:
                    (0, s.warn)("Unimplemented border style: beveled");
                    break;
                  case s.AnnotationBorderStyleType.INSET:
                    (0, s.warn)("Unimplemented border style: inset");
                    break;
                  case s.AnnotationBorderStyleType.UNDERLINE:
                    a.style.borderBottomStyle = "solid";
                }
                t.borderColor || t.color || null
                  ? (a.style.borderColor = s.Util.makeHexColor(
                      0 | t.color[0],
                      0 | t.color[1],
                      0 | t.color[2]
                    ))
                  : (a.style.borderWidth = 0);
              }
              a.style.left = `${l[0]}px`;
              a.style.top = `${l[1]}px`;
              if (t.hasOwnCanvas) a.style.width = a.style.height = "auto";
              else {
                a.style.width = `${i}px`;
                a.style.height = `${o}px`;
              }
              return a;
            }
            _createQuadrilaterals(e = !1) {
              if (!this.data.quadPoints) return null;
              const t = [],
                n = this.data.rect;
              for (const n of this.data.quadPoints) {
                this.data.rect = [n[2].x, n[2].y, n[1].x, n[1].y];
                t.push(this._createContainer(e));
              }
              this.data.rect = n;
              return t;
            }
            _createPopup(e, t) {
              let n = this.container;
              if (this.quadrilaterals) {
                e = e || this.quadrilaterals;
                n = this.quadrilaterals[0];
              }
              if (!e) {
                (e = document.createElement("div")).style.height =
                  n.style.height;
                e.style.width = n.style.width;
                n.appendChild(e);
              }
              const s = new PopupElement({
                container: n,
                trigger: e,
                color: t.color,
                titleObj: t.titleObj,
                modificationDate: t.modificationDate,
                contentsObj: t.contentsObj,
                richText: t.richText,
                hideWrapper: !0,
              }).render();
              s.style.left = n.style.width;
              n.appendChild(s);
            }
            _renderQuadrilaterals(e) {
              for (const t of this.quadrilaterals) t.className = e;
              return this.quadrilaterals;
            }
            render() {
              (0, s.unreachable)(
                "Abstract method `AnnotationElement.render` called"
              );
            }
            _getElementsByName(e, t = null) {
              const n = [];
              if (this._fieldObjects) {
                const r = this._fieldObjects[e];
                if (r)
                  for (const { page: e, id: a, exportValues: i } of r) {
                    if (-1 === e) continue;
                    if (a === t) continue;
                    const r = "string" == typeof i ? i : null,
                      o = document.getElementById(a);
                    !o || c.has(o)
                      ? n.push({ id: a, exportValue: r, domElement: o })
                      : (0, s.warn)(
                          `_getElementsByName - element not allowed: ${a}`
                        );
                  }
                return n;
              }
              for (const s of document.getElementsByName(e)) {
                const { id: e, exportValue: r } = s;
                e !== t &&
                  c.has(s) &&
                  n.push({ id: e, exportValue: r, domElement: s });
              }
              return n;
            }
            static get platform() {
              const e =
                "undefined" != typeof navigator ? navigator.platform : "";
              return (0, s.shadow)(this, "platform", {
                isWin: e.includes("Win"),
                isMac: e.includes("Mac"),
              });
            }
          }
          class LinkAnnotationElement extends AnnotationElement {
            constructor(e, t = null) {
              super(e, {
                isRenderable: !!(
                  e.data.url ||
                  e.data.dest ||
                  e.data.action ||
                  e.data.isTooltipOnly ||
                  e.data.resetForm ||
                  (e.data.actions &&
                    (e.data.actions.Action ||
                      e.data.actions["Mouse Up"] ||
                      e.data.actions["Mouse Down"]))
                ),
                ignoreBorder: !!t?.ignoreBorder,
                createQuadrilaterals: !0,
              });
            }
            render() {
              const { data: e, linkService: t } = this,
                n = document.createElement("a");
              if (e.url) {
                t.addLinkAttributes ||
                  (0, s.warn)(
                    "LinkAnnotationElement.render - missing `addLinkAttributes`-method on the `linkService`-instance."
                  );
                t.addLinkAttributes?.(n, e.url, e.newWindow);
              } else if (e.action) this._bindNamedAction(n, e.action);
              else if (e.dest) this._bindLink(n, e.dest);
              else {
                let t = !1;
                if (
                  e.actions &&
                  (e.actions.Action ||
                    e.actions["Mouse Up"] ||
                    e.actions["Mouse Down"]) &&
                  this.enableScripting &&
                  this.hasJSActions
                ) {
                  t = !0;
                  this._bindJSAction(n, e);
                }
                e.resetForm
                  ? this._bindResetFormAction(n, e.resetForm)
                  : t || this._bindLink(n, "");
              }
              if (this.quadrilaterals)
                return this._renderQuadrilaterals("linkAnnotation").map(
                  (e, t) => {
                    const s = 0 === t ? n : n.cloneNode();
                    e.appendChild(s);
                    return e;
                  }
                );
              this.container.className = "linkAnnotation";
              this.container.appendChild(n);
              return this.container;
            }
            _bindLink(e, t) {
              e.href = this.linkService.getDestinationHash(t);
              e.onclick = () => {
                t && this.linkService.goToDestination(t);
                return !1;
              };
              (t || "" === t) && (e.className = "internalLink");
            }
            _bindNamedAction(e, t) {
              e.href = this.linkService.getAnchorUrl("");
              e.onclick = () => {
                this.linkService.executeNamedAction(t);
                return !1;
              };
              e.className = "internalLink";
            }
            _bindJSAction(e, t) {
              e.href = this.linkService.getAnchorUrl("");
              const n = new Map([
                ["Action", "onclick"],
                ["Mouse Up", "onmouseup"],
                ["Mouse Down", "onmousedown"],
              ]);
              for (const s of Object.keys(t.actions)) {
                const r = n.get(s);
                r &&
                  (e[r] = () => {
                    this.linkService.eventBus?.dispatch(
                      "dispatcheventinsandbox",
                      { source: this, detail: { id: t.id, name: s } }
                    );
                    return !1;
                  });
              }
              e.onclick || (e.onclick = () => !1);
              e.className = "internalLink";
            }
            _bindResetFormAction(e, t) {
              const n = e.onclick;
              n || (e.href = this.linkService.getAnchorUrl(""));
              e.className = "internalLink";
              if (this._fieldObjects)
                e.onclick = () => {
                  n && n();
                  const { fields: e, refs: s, include: r } = t,
                    a = [];
                  if (0 !== e.length || 0 !== s.length) {
                    const t = new Set(s);
                    for (const n of e) {
                      const e = this._fieldObjects[n] || [];
                      for (const { id: n } of e) t.add(n);
                    }
                    for (const e of Object.values(this._fieldObjects))
                      for (const n of e) t.has(n.id) === r && a.push(n);
                  } else
                    for (const e of Object.values(this._fieldObjects))
                      a.push(...e);
                  const i = this.annotationStorage,
                    o = [];
                  for (const e of a) {
                    const { id: t } = e;
                    o.push(t);
                    switch (e.type) {
                      case "text": {
                        const n = e.defaultValue || "";
                        i.setValue(t, { value: n, valueAsString: n });
                        break;
                      }
                      case "checkbox":
                      case "radiobutton": {
                        const n = e.defaultValue === e.exportValues;
                        i.setValue(t, { value: n });
                        break;
                      }
                      case "combobox":
                      case "listbox": {
                        const n = e.defaultValue || "";
                        i.setValue(t, { value: n });
                        break;
                      }
                      default:
                        continue;
                    }
                    const n = document.getElementById(t);
                    n && c.has(n) && n.dispatchEvent(new Event("resetform"));
                  }
                  this.enableScripting &&
                    this.linkService.eventBus?.dispatch(
                      "dispatcheventinsandbox",
                      {
                        source: this,
                        detail: { id: "app", ids: o, name: "ResetForm" },
                      }
                    );
                  return !1;
                };
              else {
                (0, s.warn)(
                  '_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'
                );
                n || (e.onclick = () => !1);
              }
            }
          }
          class TextAnnotationElement extends AnnotationElement {
            constructor(e) {
              super(e, {
                isRenderable: !!(
                  e.data.hasPopup ||
                  e.data.titleObj?.str ||
                  e.data.contentsObj?.str ||
                  e.data.richText?.str
                ),
              });
            }
            render() {
              this.container.className = "textAnnotation";
              const e = document.createElement("img");
              e.style.height = this.container.style.height;
              e.style.width = this.container.style.width;
              e.src =
                this.imageResourcesPath +
                "annotation-" +
                this.data.name.toLowerCase() +
                ".svg";
              e.alt = "[{{type}} Annotation]";
              e.dataset.l10nId = "text_annotation_type";
              e.dataset.l10nArgs = JSON.stringify({ type: this.data.name });
              this.data.hasPopup || this._createPopup(e, this.data);
              this.container.appendChild(e);
              return this.container;
            }
          }
          class WidgetAnnotationElement extends AnnotationElement {
            render() {
              this.data.alternativeText &&
                (this.container.title = this.data.alternativeText);
              return this.container;
            }
            _getKeyModifier(e) {
              const { isWin: t, isMac: n } = AnnotationElement.platform;
              return (t && e.ctrlKey) || (n && e.metaKey);
            }
            _setEventListener(e, t, n, s) {
              t.includes("mouse")
                ? e.addEventListener(t, (e) => {
                    this.linkService.eventBus?.dispatch(
                      "dispatcheventinsandbox",
                      {
                        source: this,
                        detail: {
                          id: this.data.id,
                          name: n,
                          value: s(e),
                          shift: e.shiftKey,
                          modifier: this._getKeyModifier(e),
                        },
                      }
                    );
                  })
                : e.addEventListener(t, (e) => {
                    this.linkService.eventBus?.dispatch(
                      "dispatcheventinsandbox",
                      {
                        source: this,
                        detail: { id: this.data.id, name: n, value: s(e) },
                      }
                    );
                  });
            }
            _setEventListeners(e, t, n) {
              for (const [s, r] of t)
                ("Action" === r || this.data.actions?.[r]) &&
                  this._setEventListener(e, s, r, n);
            }
            _setBackgroundColor(e) {
              const t = this.data.backgroundColor || null;
              e.style.backgroundColor =
                null === t
                  ? "transparent"
                  : s.Util.makeHexColor(t[0], t[1], t[2]);
            }
            _dispatchEventFromSandbox(e, t) {
              const setColor = (e, t, n) => {
                  const s = n.detail[e];
                  n.target.style[t] = i.ColorConverters[`${s[0]}_HTML`](
                    s.slice(1)
                  );
                },
                n = {
                  display: (e) => {
                    const t = e.detail.display % 2 == 1;
                    e.target.style.visibility = t ? "hidden" : "visible";
                    this.annotationStorage.setValue(this.data.id, {
                      hidden: t,
                      print: 0 === e.detail.display || 3 === e.detail.display,
                    });
                  },
                  print: (e) => {
                    this.annotationStorage.setValue(this.data.id, {
                      print: e.detail.print,
                    });
                  },
                  hidden: (e) => {
                    e.target.style.visibility = e.detail.hidden
                      ? "hidden"
                      : "visible";
                    this.annotationStorage.setValue(this.data.id, {
                      hidden: e.detail.hidden,
                    });
                  },
                  focus: (e) => {
                    setTimeout(() => e.target.focus({ preventScroll: !1 }), 0);
                  },
                  userName: (e) => {
                    e.target.title = e.detail.userName;
                  },
                  readonly: (e) => {
                    e.detail.readonly
                      ? e.target.setAttribute("readonly", "")
                      : e.target.removeAttribute("readonly");
                  },
                  required: (e) => {
                    e.detail.required
                      ? e.target.setAttribute("required", "")
                      : e.target.removeAttribute("required");
                  },
                  bgColor: (e) => {
                    setColor("bgColor", "backgroundColor", e);
                  },
                  fillColor: (e) => {
                    setColor("fillColor", "backgroundColor", e);
                  },
                  fgColor: (e) => {
                    setColor("fgColor", "color", e);
                  },
                  textColor: (e) => {
                    setColor("textColor", "color", e);
                  },
                  borderColor: (e) => {
                    setColor("borderColor", "borderColor", e);
                  },
                  strokeColor: (e) => {
                    setColor("strokeColor", "borderColor", e);
                  },
                };
              for (const s of Object.keys(t.detail)) {
                const r = e[s] || n[s];
                r && r(t);
              }
            }
          }
          class TextWidgetAnnotationElement extends WidgetAnnotationElement {
            constructor(e) {
              super(e, {
                isRenderable:
                  e.renderForms ||
                  (!e.data.hasAppearance && !!e.data.fieldValue),
              });
            }
            setPropertyOnSiblings(e, t, n, s) {
              const r = this.annotationStorage;
              for (const a of this._getElementsByName(e.name, e.id)) {
                a.domElement && (a.domElement[t] = n);
                r.setValue(a.id, { [s]: n });
              }
            }
            render() {
              const e = this.annotationStorage,
                t = this.data.id;
              this.container.className = "textWidgetAnnotation";
              let n = null;
              if (this.renderForms) {
                const s = e.getValue(t, {
                    value: this.data.fieldValue,
                    valueAsString: this.data.fieldValue,
                  }),
                  r = s.valueAsString || s.value || "",
                  a = { userValue: null, formattedValue: null };
                if (this.data.multiLine) {
                  n = document.createElement("textarea");
                  n.textContent = r;
                } else {
                  n = document.createElement("input");
                  n.type = "text";
                  n.setAttribute("value", r);
                }
                c.add(n);
                n.disabled = this.data.readOnly;
                n.name = this.data.fieldName;
                n.tabIndex = l;
                a.userValue = r;
                n.setAttribute("id", t);
                n.addEventListener("input", (s) => {
                  e.setValue(t, { value: s.target.value });
                  this.setPropertyOnSiblings(
                    n,
                    "value",
                    s.target.value,
                    "value"
                  );
                });
                n.addEventListener("resetform", (e) => {
                  const t = this.data.defaultFieldValue || "";
                  n.value = a.userValue = t;
                  delete a.formattedValue;
                });
                let blurListener = (e) => {
                  a.formattedValue && (e.target.value = a.formattedValue);
                  e.target.scrollLeft = 0;
                };
                if (this.enableScripting && this.hasJSActions) {
                  n.addEventListener("focus", (e) => {
                    a.userValue && (e.target.value = a.userValue);
                  });
                  n.addEventListener("updatefromsandbox", (n) => {
                    const s = {
                      value(n) {
                        a.userValue = n.detail.value || "";
                        e.setValue(t, { value: a.userValue.toString() });
                        a.formattedValue || (n.target.value = a.userValue);
                      },
                      valueAsString(n) {
                        a.formattedValue = n.detail.valueAsString || "";
                        n.target !== document.activeElement &&
                          (n.target.value = a.formattedValue);
                        e.setValue(t, { formattedValue: a.formattedValue });
                      },
                      selRange(e) {
                        const [t, n] = e.detail.selRange;
                        t >= 0 &&
                          n < e.target.value.length &&
                          e.target.setSelectionRange(t, n);
                      },
                    };
                    this._dispatchEventFromSandbox(s, n);
                  });
                  n.addEventListener("keydown", (e) => {
                    let n = -1;
                    "Escape" === e.key
                      ? (n = 0)
                      : "Enter" === e.key
                      ? (n = 2)
                      : "Tab" === e.key && (n = 3);
                    if (-1 !== n) {
                      a.userValue = e.target.value;
                      this.linkService.eventBus?.dispatch(
                        "dispatcheventinsandbox",
                        {
                          source: this,
                          detail: {
                            id: t,
                            name: "Keystroke",
                            value: e.target.value,
                            willCommit: !0,
                            commitKey: n,
                            selStart: e.target.selectionStart,
                            selEnd: e.target.selectionEnd,
                          },
                        }
                      );
                    }
                  });
                  const s = blurListener;
                  blurListener = null;
                  n.addEventListener("blur", (e) => {
                    a.userValue = e.target.value;
                    this._mouseState.isDown &&
                      this.linkService.eventBus?.dispatch(
                        "dispatcheventinsandbox",
                        {
                          source: this,
                          detail: {
                            id: t,
                            name: "Keystroke",
                            value: e.target.value,
                            willCommit: !0,
                            commitKey: 1,
                            selStart: e.target.selectionStart,
                            selEnd: e.target.selectionEnd,
                          },
                        }
                      );
                    s(e);
                  });
                  this.data.actions?.Keystroke &&
                    n.addEventListener("beforeinput", (e) => {
                      a.formattedValue = "";
                      const { data: n, target: s } = e,
                        { value: r, selectionStart: i, selectionEnd: o } = s;
                      this.linkService.eventBus?.dispatch(
                        "dispatcheventinsandbox",
                        {
                          source: this,
                          detail: {
                            id: t,
                            name: "Keystroke",
                            value: r,
                            change: n,
                            willCommit: !1,
                            selStart: i,
                            selEnd: o,
                          },
                        }
                      );
                    });
                  this._setEventListeners(
                    n,
                    [
                      ["focus", "Focus"],
                      ["blur", "Blur"],
                      ["mousedown", "Mouse Down"],
                      ["mouseenter", "Mouse Enter"],
                      ["mouseleave", "Mouse Exit"],
                      ["mouseup", "Mouse Up"],
                    ],
                    (e) => e.target.value
                  );
                }
                blurListener && n.addEventListener("blur", blurListener);
                null !== this.data.maxLen && (n.maxLength = this.data.maxLen);
                if (this.data.comb) {
                  const e =
                    (this.data.rect[2] - this.data.rect[0]) / this.data.maxLen;
                  n.classList.add("comb");
                  n.style.letterSpacing = `calc(${e}px - 1ch)`;
                }
              } else {
                n = document.createElement("div");
                n.textContent = this.data.fieldValue;
                n.style.verticalAlign = "middle";
                n.style.display = "table-cell";
              }
              this._setTextStyle(n);
              this._setBackgroundColor(n);
              this.container.appendChild(n);
              return this.container;
            }
            _setTextStyle(e) {
              const t = ["left", "center", "right"],
                { fontSize: n, fontColor: r } = this.data.defaultAppearanceData,
                a = e.style;
              n && (a.fontSize = `${n}px`);
              a.color = s.Util.makeHexColor(r[0], r[1], r[2]);
              null !== this.data.textAlignment &&
                (a.textAlign = t[this.data.textAlignment]);
            }
          }
          class CheckboxWidgetAnnotationElement extends WidgetAnnotationElement {
            constructor(e) {
              super(e, { isRenderable: e.renderForms });
            }
            render() {
              const e = this.annotationStorage,
                t = this.data,
                n = t.id;
              let s = e.getValue(n, {
                value: t.exportValue === t.fieldValue,
              }).value;
              if ("string" == typeof s) {
                s = "Off" !== s;
                e.setValue(n, { value: s });
              }
              this.container.className = "buttonWidgetAnnotation checkBox";
              const r = document.createElement("input");
              c.add(r);
              r.disabled = t.readOnly;
              r.type = "checkbox";
              r.name = t.fieldName;
              s && r.setAttribute("checked", !0);
              r.setAttribute("id", n);
              r.setAttribute("exportValue", t.exportValue);
              r.tabIndex = l;
              r.addEventListener("change", (s) => {
                const { name: r, checked: a } = s.target;
                for (const s of this._getElementsByName(r, n)) {
                  const n = a && s.exportValue === t.exportValue;
                  s.domElement && (s.domElement.checked = n);
                  e.setValue(s.id, { value: n });
                }
                e.setValue(n, { value: a });
              });
              r.addEventListener("resetform", (e) => {
                const n = t.defaultFieldValue || "Off";
                e.target.checked = n === t.exportValue;
              });
              if (this.enableScripting && this.hasJSActions) {
                r.addEventListener("updatefromsandbox", (t) => {
                  const s = {
                    value(t) {
                      t.target.checked = "Off" !== t.detail.value;
                      e.setValue(n, { value: t.target.checked });
                    },
                  };
                  this._dispatchEventFromSandbox(s, t);
                });
                this._setEventListeners(
                  r,
                  [
                    ["change", "Validate"],
                    ["change", "Action"],
                    ["focus", "Focus"],
                    ["blur", "Blur"],
                    ["mousedown", "Mouse Down"],
                    ["mouseenter", "Mouse Enter"],
                    ["mouseleave", "Mouse Exit"],
                    ["mouseup", "Mouse Up"],
                  ],
                  (e) => e.target.checked
                );
              }
              this._setBackgroundColor(r);
              this.container.appendChild(r);
              return this.container;
            }
          }
          class RadioButtonWidgetAnnotationElement extends WidgetAnnotationElement {
            constructor(e) {
              super(e, { isRenderable: e.renderForms });
            }
            render() {
              this.container.className = "buttonWidgetAnnotation radioButton";
              const e = this.annotationStorage,
                t = this.data,
                n = t.id;
              let s = e.getValue(n, {
                value: t.fieldValue === t.buttonValue,
              }).value;
              if ("string" == typeof s) {
                s = s !== t.buttonValue;
                e.setValue(n, { value: s });
              }
              const r = document.createElement("input");
              c.add(r);
              r.disabled = t.readOnly;
              r.type = "radio";
              r.name = t.fieldName;
              s && r.setAttribute("checked", !0);
              r.setAttribute("id", n);
              r.tabIndex = l;
              r.addEventListener("change", (t) => {
                const { name: s, checked: r } = t.target;
                for (const t of this._getElementsByName(s, n))
                  e.setValue(t.id, { value: !1 });
                e.setValue(n, { value: r });
              });
              r.addEventListener("resetform", (e) => {
                const n = t.defaultFieldValue;
                e.target.checked = null != n && n === t.buttonValue;
              });
              if (this.enableScripting && this.hasJSActions) {
                const s = t.buttonValue;
                r.addEventListener("updatefromsandbox", (t) => {
                  const r = {
                    value: (t) => {
                      const r = s === t.detail.value;
                      for (const s of this._getElementsByName(t.target.name)) {
                        const t = r && s.id === n;
                        s.domElement && (s.domElement.checked = t);
                        e.setValue(s.id, { value: t });
                      }
                    },
                  };
                  this._dispatchEventFromSandbox(r, t);
                });
                this._setEventListeners(
                  r,
                  [
                    ["change", "Validate"],
                    ["change", "Action"],
                    ["focus", "Focus"],
                    ["blur", "Blur"],
                    ["mousedown", "Mouse Down"],
                    ["mouseenter", "Mouse Enter"],
                    ["mouseleave", "Mouse Exit"],
                    ["mouseup", "Mouse Up"],
                  ],
                  (e) => e.target.checked
                );
              }
              this._setBackgroundColor(r);
              this.container.appendChild(r);
              return this.container;
            }
          }
          class PushButtonWidgetAnnotationElement extends LinkAnnotationElement {
            constructor(e) {
              super(e, { ignoreBorder: e.data.hasAppearance });
            }
            render() {
              const e = super.render();
              e.className = "buttonWidgetAnnotation pushButton";
              this.data.alternativeText &&
                (e.title = this.data.alternativeText);
              return e;
            }
          }
          class ChoiceWidgetAnnotationElement extends WidgetAnnotationElement {
            constructor(e) {
              super(e, { isRenderable: e.renderForms });
            }
            render() {
              this.container.className = "choiceWidgetAnnotation";
              const e = this.annotationStorage,
                t = this.data.id;
              e.getValue(t, {
                value:
                  this.data.fieldValue.length > 0
                    ? this.data.fieldValue[0]
                    : void 0,
              });
              let { fontSize: n } = this.data.defaultAppearanceData;
              n || (n = 9);
              const s = `calc(${n}px * var(--zoom-factor))`,
                r = document.createElement("select");
              c.add(r);
              r.disabled = this.data.readOnly;
              r.name = this.data.fieldName;
              r.setAttribute("id", t);
              r.tabIndex = l;
              r.style.fontSize = `${n}px`;
              if (!this.data.combo) {
                r.size = this.data.options.length;
                this.data.multiSelect && (r.multiple = !0);
              }
              r.addEventListener("resetform", (e) => {
                const t = this.data.defaultFieldValue;
                for (const e of r.options) e.selected = e.value === t;
              });
              for (const e of this.data.options) {
                const t = document.createElement("option");
                t.textContent = e.displayValue;
                t.value = e.exportValue;
                this.data.combo && (t.style.fontSize = s);
                this.data.fieldValue.includes(e.exportValue) &&
                  t.setAttribute("selected", !0);
                r.appendChild(t);
              }
              const getValue = (e, t) => {
                  const n = t ? "value" : "textContent",
                    s = e.target.options;
                  return e.target.multiple
                    ? Array.prototype.filter
                        .call(s, (e) => e.selected)
                        .map((e) => e[n])
                    : -1 === s.selectedIndex
                    ? null
                    : s[s.selectedIndex][n];
                },
                getItems = (e) => {
                  const t = e.target.options;
                  return Array.prototype.map.call(t, (e) => ({
                    displayValue: e.textContent,
                    exportValue: e.value,
                  }));
                };
              if (this.enableScripting && this.hasJSActions) {
                r.addEventListener("updatefromsandbox", (n) => {
                  const s = {
                    value(n) {
                      const s = n.detail.value,
                        a = new Set(Array.isArray(s) ? s : [s]);
                      for (const e of r.options) e.selected = a.has(e.value);
                      e.setValue(t, { value: getValue(n, !0) });
                    },
                    multipleSelection(e) {
                      r.multiple = !0;
                    },
                    remove(n) {
                      const s = r.options,
                        a = n.detail.remove;
                      s[a].selected = !1;
                      r.remove(a);
                      if (s.length > 0) {
                        -1 ===
                          Array.prototype.findIndex.call(
                            s,
                            (e) => e.selected
                          ) && (s[0].selected = !0);
                      }
                      e.setValue(t, {
                        value: getValue(n, !0),
                        items: getItems(n),
                      });
                    },
                    clear(n) {
                      for (; 0 !== r.length; ) r.remove(0);
                      e.setValue(t, { value: null, items: [] });
                    },
                    insert(n) {
                      const {
                          index: s,
                          displayValue: a,
                          exportValue: i,
                        } = n.detail.insert,
                        o = document.createElement("option");
                      o.textContent = a;
                      o.value = i;
                      r.insertBefore(o, r.children[s]);
                      e.setValue(t, {
                        value: getValue(n, !0),
                        items: getItems(n),
                      });
                    },
                    items(n) {
                      const { items: s } = n.detail;
                      for (; 0 !== r.length; ) r.remove(0);
                      for (const e of s) {
                        const { displayValue: t, exportValue: n } = e,
                          s = document.createElement("option");
                        s.textContent = t;
                        s.value = n;
                        r.appendChild(s);
                      }
                      r.options.length > 0 && (r.options[0].selected = !0);
                      e.setValue(t, {
                        value: getValue(n, !0),
                        items: getItems(n),
                      });
                    },
                    indices(n) {
                      const s = new Set(n.detail.indices);
                      for (const e of n.target.options)
                        e.selected = s.has(e.index);
                      e.setValue(t, { value: getValue(n, !0) });
                    },
                    editable(e) {
                      e.target.disabled = !e.detail.editable;
                    },
                  };
                  this._dispatchEventFromSandbox(s, n);
                });
                r.addEventListener("input", (n) => {
                  const s = getValue(n, !0),
                    r = getValue(n, !1);
                  e.setValue(t, { value: s });
                  this.linkService.eventBus?.dispatch(
                    "dispatcheventinsandbox",
                    {
                      source: this,
                      detail: {
                        id: t,
                        name: "Keystroke",
                        value: r,
                        changeEx: s,
                        willCommit: !0,
                        commitKey: 1,
                        keyDown: !1,
                      },
                    }
                  );
                });
                this._setEventListeners(
                  r,
                  [
                    ["focus", "Focus"],
                    ["blur", "Blur"],
                    ["mousedown", "Mouse Down"],
                    ["mouseenter", "Mouse Enter"],
                    ["mouseleave", "Mouse Exit"],
                    ["mouseup", "Mouse Up"],
                    ["input", "Action"],
                  ],
                  (e) => e.target.checked
                );
              } else
                r.addEventListener("input", function (n) {
                  e.setValue(t, { value: getValue(n) });
                });
              this._setBackgroundColor(r);
              this.container.appendChild(r);
              return this.container;
            }
          }
          class PopupAnnotationElement extends AnnotationElement {
            constructor(e) {
              super(e, {
                isRenderable: !!(
                  e.data.titleObj?.str ||
                  e.data.contentsObj?.str ||
                  e.data.richText?.str
                ),
              });
            }
            render() {
              this.container.className = "popupAnnotation";
              if (
                [
                  "Line",
                  "Square",
                  "Circle",
                  "PolyLine",
                  "Polygon",
                  "Ink",
                ].includes(this.data.parentType)
              )
                return this.container;
              const e = `[data-annotation-id="${this.data.parentId}"]`,
                t = this.layer.querySelectorAll(e);
              if (0 === t.length) return this.container;
              const n = new PopupElement({
                  container: this.container,
                  trigger: Array.from(t),
                  color: this.data.color,
                  titleObj: this.data.titleObj,
                  modificationDate: this.data.modificationDate,
                  contentsObj: this.data.contentsObj,
                  richText: this.data.richText,
                }),
                r = this.page,
                a = s.Util.normalizeRect([
                  this.data.parentRect[0],
                  r.view[3] - this.data.parentRect[1] + r.view[1],
                  this.data.parentRect[2],
                  r.view[3] - this.data.parentRect[3] + r.view[1],
                ]),
                i = a[0] + this.data.parentRect[2] - this.data.parentRect[0],
                o = a[1];
              this.container.style.transformOrigin = `${-i}px ${-o}px`;
              this.container.style.left = `${i}px`;
              this.container.style.top = `${o}px`;
              this.container.appendChild(n.render());
              return this.container;
            }
          }
          class PopupElement {
            constructor(e) {
              this.container = e.container;
              this.trigger = e.trigger;
              this.color = e.color;
              this.titleObj = e.titleObj;
              this.modificationDate = e.modificationDate;
              this.contentsObj = e.contentsObj;
              this.richText = e.richText;
              this.hideWrapper = e.hideWrapper || !1;
              this.pinned = !1;
            }
            render() {
              const e = document.createElement("div");
              e.className = "popupWrapper";
              this.hideElement = this.hideWrapper ? e : this.container;
              this.hideElement.hidden = !0;
              const t = document.createElement("div");
              t.className = "popup";
              const n = this.color;
              if (n) {
                const e = 0.7 * (255 - n[0]) + n[0],
                  r = 0.7 * (255 - n[1]) + n[1],
                  a = 0.7 * (255 - n[2]) + n[2];
                t.style.backgroundColor = s.Util.makeHexColor(
                  0 | e,
                  0 | r,
                  0 | a
                );
              }
              const a = document.createElement("h1");
              a.dir = this.titleObj.dir;
              a.textContent = this.titleObj.str;
              t.appendChild(a);
              const i = r.PDFDateString.toDateObject(this.modificationDate);
              if (i) {
                const e = document.createElement("span");
                e.className = "popupDate";
                e.textContent = "{{date}}, {{time}}";
                e.dataset.l10nId = "annotation_date_string";
                e.dataset.l10nArgs = JSON.stringify({
                  date: i.toLocaleDateString(),
                  time: i.toLocaleTimeString(),
                });
                t.appendChild(e);
              }
              if (
                !this.richText?.str ||
                (this.contentsObj?.str &&
                  this.contentsObj.str !== this.richText.str)
              ) {
                const e = this._formatContents(this.contentsObj);
                t.appendChild(e);
              } else {
                o.XfaLayer.render({
                  xfaHtml: this.richText.html,
                  intent: "richText",
                  div: t,
                });
                t.lastChild.className = "richText popupContent";
              }
              Array.isArray(this.trigger) || (this.trigger = [this.trigger]);
              for (const e of this.trigger) {
                e.addEventListener("click", this._toggle.bind(this));
                e.addEventListener("mouseover", this._show.bind(this, !1));
                e.addEventListener("mouseout", this._hide.bind(this, !1));
              }
              t.addEventListener("click", this._hide.bind(this, !0));
              e.appendChild(t);
              return e;
            }
            _formatContents({ str: e, dir: t }) {
              const n = document.createElement("p");
              n.className = "popupContent";
              n.dir = t;
              const s = e.split(/(?:\r\n?|\n)/);
              for (let e = 0, t = s.length; e < t; ++e) {
                const r = s[e];
                n.appendChild(document.createTextNode(r));
                e < t - 1 && n.appendChild(document.createElement("br"));
              }
              return n;
            }
            _toggle() {
              this.pinned ? this._hide(!0) : this._show(!0);
            }
            _show(e = !1) {
              e && (this.pinned = !0);
              if (this.hideElement.hidden) {
                this.hideElement.hidden = !1;
                this.container.style.zIndex += 1;
              }
            }
            _hide(e = !0) {
              e && (this.pinned = !1);
              if (!this.hideElement.hidden && !this.pinned) {
                this.hideElement.hidden = !0;
                this.container.style.zIndex -= 1;
              }
            }
          }
          class FreeTextAnnotationElement extends AnnotationElement {
            constructor(e) {
              super(e, {
                isRenderable: !!(
                  e.data.hasPopup ||
                  e.data.titleObj?.str ||
                  e.data.contentsObj?.str ||
                  e.data.richText?.str
                ),
                ignoreBorder: !0,
              });
            }
            render() {
              this.container.className = "freeTextAnnotation";
              this.data.hasPopup || this._createPopup(null, this.data);
              return this.container;
            }
          }
          class LineAnnotationElement extends AnnotationElement {
            constructor(e) {
              super(e, {
                isRenderable: !!(
                  e.data.hasPopup ||
                  e.data.titleObj?.str ||
                  e.data.contentsObj?.str ||
                  e.data.richText?.str
                ),
                ignoreBorder: !0,
              });
            }
            render() {
              this.container.className = "lineAnnotation";
              const e = this.data,
                { width: t, height: n } = getRectDims(e.rect),
                s = this.svgFactory.create(t, n),
                r = this.svgFactory.createElement("svg:line");
              r.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]);
              r.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]);
              r.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]);
              r.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]);
              r.setAttribute("stroke-width", e.borderStyle.width || 1);
              r.setAttribute("stroke", "transparent");
              r.setAttribute("fill", "transparent");
              s.appendChild(r);
              this.container.append(s);
              this._createPopup(r, e);
              return this.container;
            }
          }
          class SquareAnnotationElement extends AnnotationElement {
            constructor(e) {
              super(e, {
                isRenderable: !!(
                  e.data.hasPopup ||
                  e.data.titleObj?.str ||
                  e.data.contentsObj?.str ||
                  e.data.richText?.str
                ),
                ignoreBorder: !0,
              });
            }
            render() {
              this.container.className = "squareAnnotation";
              const e = this.data,
                { width: t, height: n } = getRectDims(e.rect),
                s = this.svgFactory.create(t, n),
                r = e.borderStyle.width,
                a = this.svgFactory.createElement("svg:rect");
              a.setAttribute("x", r / 2);
              a.setAttribute("y", r / 2);
              a.setAttribute("width", t - r);
              a.setAttribute("height", n - r);
              a.setAttribute("stroke-width", r || 1);
              a.setAttribute("stroke", "transparent");
              a.setAttribute("fill", "transparent");
              s.appendChild(a);
              this.container.append(s);
              this._createPopup(a, e);
              return this.container;
            }
          }
          class CircleAnnotationElement extends AnnotationElement {
            constructor(e) {
              super(e, {
                isRenderable: !!(
                  e.data.hasPopup ||
                  e.data.titleObj?.str ||
                  e.data.contentsObj?.str ||
                  e.data.richText?.str
                ),
                ignoreBorder: !0,
              });
            }
            render() {
              this.container.className = "circleAnnotation";
              const e = this.data,
                { width: t, height: n } = getRectDims(e.rect),
                s = this.svgFactory.create(t, n),
                r = e.borderStyle.width,
                a = this.svgFactory.createElement("svg:ellipse");
              a.setAttribute("cx", t / 2);
              a.setAttribute("cy", n / 2);
              a.setAttribute("rx", t / 2 - r / 2);
              a.setAttribute("ry", n / 2 - r / 2);
              a.setAttribute("stroke-width", r || 1);
              a.setAttribute("stroke", "transparent");
              a.setAttribute("fill", "transparent");
              s.appendChild(a);
              this.container.append(s);
              this._createPopup(a, e);
              return this.container;
            }
          }
          class PolylineAnnotationElement extends AnnotationElement {
            constructor(e) {
              super(e, {
                isRenderable: !!(
                  e.data.hasPopup ||
                  e.data.titleObj?.str ||
                  e.data.contentsObj?.str ||
                  e.data.richText?.str
                ),
                ignoreBorder: !0,
              });
              this.containerClassName = "polylineAnnotation";
              this.svgElementName = "svg:polyline";
            }
            render() {
              this.container.className = this.containerClassName;
              const e = this.data,
                { width: t, height: n } = getRectDims(e.rect),
                s = this.svgFactory.create(t, n);
              let r = [];
              for (const t of e.vertices) {
                const n = t.x - e.rect[0],
                  s = e.rect[3] - t.y;
                r.push(n + "," + s);
              }
              r = r.join(" ");
              const a = this.svgFactory.createElement(this.svgElementName);
              a.setAttribute("points", r);
              a.setAttribute("stroke-width", e.borderStyle.width || 1);
              a.setAttribute("stroke", "transparent");
              a.setAttribute("fill", "transparent");
              s.appendChild(a);
              this.container.append(s);
              this._createPopup(a, e);
              return this.container;
            }
          }
          class PolygonAnnotationElement extends PolylineAnnotationElement {
            constructor(e) {
              super(e);
              this.containerClassName = "polygonAnnotation";
              this.svgElementName = "svg:polygon";
            }
          }
          class CaretAnnotationElement extends AnnotationElement {
            constructor(e) {
              super(e, {
                isRenderable: !!(
                  e.data.hasPopup ||
                  e.data.titleObj?.str ||
                  e.data.contentsObj?.str ||
                  e.data.richText?.str
                ),
                ignoreBorder: !0,
              });
            }
            render() {
              this.container.className = "caretAnnotation";
              this.data.hasPopup || this._createPopup(null, this.data);
              return this.container;
            }
          }
          class InkAnnotationElement extends AnnotationElement {
            constructor(e) {
              super(e, {
                isRenderable: !!(
                  e.data.hasPopup ||
                  e.data.titleObj?.str ||
                  e.data.contentsObj?.str ||
                  e.data.richText?.str
                ),
                ignoreBorder: !0,
              });
              this.containerClassName = "inkAnnotation";
              this.svgElementName = "svg:polyline";
            }
            render() {
              this.container.className = this.containerClassName;
              const e = this.data,
                { width: t, height: n } = getRectDims(e.rect),
                s = this.svgFactory.create(t, n);
              for (const t of e.inkLists) {
                let n = [];
                for (const s of t) {
                  const t = s.x - e.rect[0],
                    r = e.rect[3] - s.y;
                  n.push(`${t},${r}`);
                }
                n = n.join(" ");
                const r = this.svgFactory.createElement(this.svgElementName);
                r.setAttribute("points", n);
                r.setAttribute("stroke-width", e.borderStyle.width || 1);
                r.setAttribute("stroke", "transparent");
                r.setAttribute("fill", "transparent");
                this._createPopup(r, e);
                s.appendChild(r);
              }
              this.container.append(s);
              return this.container;
            }
          }
          class HighlightAnnotationElement extends AnnotationElement {
            constructor(e) {
              super(e, {
                isRenderable: !!(
                  e.data.hasPopup ||
                  e.data.titleObj?.str ||
                  e.data.contentsObj?.str ||
                  e.data.richText?.str
                ),
                ignoreBorder: !0,
                createQuadrilaterals: !0,
              });
            }
            render() {
              this.data.hasPopup || this._createPopup(null, this.data);
              if (this.quadrilaterals)
                return this._renderQuadrilaterals("highlightAnnotation");
              this.container.className = "highlightAnnotation";
              return this.container;
            }
          }
          class UnderlineAnnotationElement extends AnnotationElement {
            constructor(e) {
              super(e, {
                isRenderable: !!(
                  e.data.hasPopup ||
                  e.data.titleObj?.str ||
                  e.data.contentsObj?.str ||
                  e.data.richText?.str
                ),
                ignoreBorder: !0,
                createQuadrilaterals: !0,
              });
            }
            render() {
              this.data.hasPopup || this._createPopup(null, this.data);
              if (this.quadrilaterals)
                return this._renderQuadrilaterals("underlineAnnotation");
              this.container.className = "underlineAnnotation";
              return this.container;
            }
          }
          class SquigglyAnnotationElement extends AnnotationElement {
            constructor(e) {
              super(e, {
                isRenderable: !!(
                  e.data.hasPopup ||
                  e.data.titleObj?.str ||
                  e.data.contentsObj?.str ||
                  e.data.richText?.str
                ),
                ignoreBorder: !0,
                createQuadrilaterals: !0,
              });
            }
            render() {
              this.data.hasPopup || this._createPopup(null, this.data);
              if (this.quadrilaterals)
                return this._renderQuadrilaterals("squigglyAnnotation");
              this.container.className = "squigglyAnnotation";
              return this.container;
            }
          }
          class StrikeOutAnnotationElement extends AnnotationElement {
            constructor(e) {
              super(e, {
                isRenderable: !!(
                  e.data.hasPopup ||
                  e.data.titleObj?.str ||
                  e.data.contentsObj?.str ||
                  e.data.richText?.str
                ),
                ignoreBorder: !0,
                createQuadrilaterals: !0,
              });
            }
            render() {
              this.data.hasPopup || this._createPopup(null, this.data);
              if (this.quadrilaterals)
                return this._renderQuadrilaterals("strikeoutAnnotation");
              this.container.className = "strikeoutAnnotation";
              return this.container;
            }
          }
          class StampAnnotationElement extends AnnotationElement {
            constructor(e) {
              super(e, {
                isRenderable: !!(
                  e.data.hasPopup ||
                  e.data.titleObj?.str ||
                  e.data.contentsObj?.str ||
                  e.data.richText?.str
                ),
                ignoreBorder: !0,
              });
            }
            render() {
              this.container.className = "stampAnnotation";
              this.data.hasPopup || this._createPopup(null, this.data);
              return this.container;
            }
          }
          class FileAttachmentAnnotationElement extends AnnotationElement {
            constructor(e) {
              super(e, { isRenderable: !0 });
              const { filename: t, content: n } = this.data.file;
              this.filename = (0, r.getFilenameFromUrl)(t);
              this.content = n;
              this.linkService.eventBus?.dispatch("fileattachmentannotation", {
                source: this,
                id: (0, s.stringToPDFString)(t),
                filename: t,
                content: n,
              });
            }
            render() {
              this.container.className = "fileAttachmentAnnotation";
              const e = document.createElement("div");
              e.style.height = this.container.style.height;
              e.style.width = this.container.style.width;
              e.addEventListener("dblclick", this._download.bind(this));
              !this.data.hasPopup &&
                (this.data.titleObj?.str ||
                  this.data.contentsObj?.str ||
                  this.data.richText) &&
                this._createPopup(e, this.data);
              this.container.appendChild(e);
              return this.container;
            }
            _download() {
              this.downloadManager?.openOrDownloadData(
                this.container,
                this.content,
                this.filename
              );
            }
          }
          t.AnnotationLayer = class AnnotationLayer {
            static render(e) {
              const t = [],
                n = [];
              for (const r of e.annotations) {
                if (!r) continue;
                const { width: e, height: a } = getRectDims(r.rect);
                e <= 0 ||
                  a <= 0 ||
                  (r.annotationType !== s.AnnotationType.POPUP
                    ? t.push(r)
                    : n.push(r));
              }
              n.length && t.push(...n);
              const i = e.div;
              for (const n of t) {
                const t = AnnotationElementFactory.create({
                  data: n,
                  layer: i,
                  page: e.page,
                  viewport: e.viewport,
                  linkService: e.linkService,
                  downloadManager: e.downloadManager,
                  imageResourcesPath: e.imageResourcesPath || "",
                  renderForms: !1 !== e.renderForms,
                  svgFactory: new r.DOMSVGFactory(),
                  annotationStorage:
                    e.annotationStorage || new a.AnnotationStorage(),
                  enableScripting: e.enableScripting,
                  hasJSActions: e.hasJSActions,
                  fieldObjects: e.fieldObjects,
                  mouseState: e.mouseState || { isDown: !1 },
                });
                if (t.isRenderable) {
                  const e = t.render();
                  n.hidden && (e.style.visibility = "hidden");
                  if (Array.isArray(e)) for (const t of e) i.appendChild(t);
                  else
                    t instanceof PopupAnnotationElement
                      ? i.prepend(e)
                      : i.appendChild(e);
                }
              }
              this.#l(i, e.annotationCanvasMap);
            }
            static update(e) {
              const {
                  page: t,
                  viewport: n,
                  annotations: r,
                  annotationCanvasMap: a,
                  div: i,
                } = e,
                o = n.transform,
                l = `matrix(${o.join(",")})`;
              let c, h;
              for (const e of r) {
                const n = i.querySelectorAll(`[data-annotation-id="${e.id}"]`);
                if (n)
                  for (const r of n)
                    if (e.hasOwnCanvas) {
                      const n = s.Util.normalizeRect([
                        e.rect[0],
                        t.view[3] - e.rect[1] + t.view[1],
                        e.rect[2],
                        t.view[3] - e.rect[3] + t.view[1],
                      ]);
                      if (!h) {
                        c = Math.abs(o[0] || o[1]);
                        const e = o.slice();
                        for (let t = 0; t < 4; t++) e[t] = Math.sign(e[t]);
                        h = `matrix(${e.join(",")})`;
                      }
                      const a = n[0] * c,
                        i = n[1] * c;
                      r.style.left = `${a}px`;
                      r.style.top = `${i}px`;
                      r.style.transformOrigin = `${-a}px ${-i}px`;
                      r.style.transform = h;
                    } else r.style.transform = l;
              }
              this.#l(i, a);
              i.hidden = !1;
            }
            static #l(e, t) {
              if (t) {
                for (const [n, s] of t) {
                  const t = e.querySelector(`[data-annotation-id="${n}"]`);
                  if (!t) continue;
                  const { firstChild: r } = t;
                  "CANVAS" === r.nodeName
                    ? t.replaceChild(s, r)
                    : t.insertBefore(s, r);
                }
                t.clear();
              }
            }
          };
        },
        (e, t) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.ColorConverters = void 0;
          function makeColorComp(e) {
            return Math.floor(255 * Math.max(0, Math.min(1, e)))
              .toString(16)
              .padStart(2, "0");
          }
          t.ColorConverters = class ColorConverters {
            static CMYK_G([e, t, n, s]) {
              return ["G", 1 - Math.min(1, 0.3 * e + 0.59 * n + 0.11 * t + s)];
            }
            static G_CMYK([e]) {
              return ["CMYK", 0, 0, 0, 1 - e];
            }
            static G_RGB([e]) {
              return ["RGB", e, e, e];
            }
            static G_HTML([e]) {
              const t = makeColorComp(e);
              return `#${t}${t}${t}`;
            }
            static RGB_G([e, t, n]) {
              return ["G", 0.3 * e + 0.59 * t + 0.11 * n];
            }
            static RGB_HTML([e, t, n]) {
              return `#${makeColorComp(e)}${makeColorComp(t)}${makeColorComp(
                n
              )}`;
            }
            static T_HTML() {
              return "#00000000";
            }
            static CMYK_RGB([e, t, n, s]) {
              return [
                "RGB",
                1 - Math.min(1, e + s),
                1 - Math.min(1, n + s),
                1 - Math.min(1, t + s),
              ];
            }
            static CMYK_HTML(e) {
              return this.RGB_HTML(this.CMYK_RGB(e));
            }
            static RGB_CMYK([e, t, n]) {
              const s = 1 - e,
                r = 1 - t,
                a = 1 - n;
              return ["CMYK", s, r, a, Math.min(s, r, a)];
            }
          };
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.XfaLayer = void 0;
          var s = n(1),
            r = n(17);
          t.XfaLayer = class XfaLayer {
            static setupStorage(e, t, n, s, r) {
              const a = s.getValue(t, { value: null });
              switch (n.name) {
                case "textarea":
                  null !== a.value && (e.textContent = a.value);
                  if ("print" === r) break;
                  e.addEventListener("input", (e) => {
                    s.setValue(t, { value: e.target.value });
                  });
                  break;
                case "input":
                  if (
                    "radio" === n.attributes.type ||
                    "checkbox" === n.attributes.type
                  ) {
                    a.value === n.attributes.xfaOn
                      ? e.setAttribute("checked", !0)
                      : a.value === n.attributes.xfaOff &&
                        e.removeAttribute("checked");
                    if ("print" === r) break;
                    e.addEventListener("change", (e) => {
                      s.setValue(t, {
                        value: e.target.checked
                          ? e.target.getAttribute("xfaOn")
                          : e.target.getAttribute("xfaOff"),
                      });
                    });
                  } else {
                    null !== a.value && e.setAttribute("value", a.value);
                    if ("print" === r) break;
                    e.addEventListener("input", (e) => {
                      s.setValue(t, { value: e.target.value });
                    });
                  }
                  break;
                case "select":
                  if (null !== a.value)
                    for (const e of n.children)
                      e.attributes.value === a.value &&
                        (e.attributes.selected = !0);
                  e.addEventListener("input", (e) => {
                    const n = e.target.options,
                      r =
                        -1 === n.selectedIndex ? "" : n[n.selectedIndex].value;
                    s.setValue(t, { value: r });
                  });
              }
            }
            static setAttributes({
              html: e,
              element: t,
              storage: n = null,
              intent: r,
              linkService: a,
            }) {
              const { attributes: i } = t,
                o = e instanceof HTMLAnchorElement;
              "radio" === i.type && (i.name = `${i.name}-${r}`);
              for (const [t, n] of Object.entries(i))
                if (null != n && "dataId" !== t)
                  if ("style" !== t)
                    if ("textContent" === t) e.textContent = n;
                    else if ("class" === t)
                      n.length && e.setAttribute(t, n.join(" "));
                    else {
                      if (o && ("href" === t || "newWindow" === t)) continue;
                      e.setAttribute(t, n);
                    }
                  else Object.assign(e.style, n);
              if (o) {
                a.addLinkAttributes ||
                  (0, s.warn)(
                    "XfaLayer.setAttribute - missing `addLinkAttributes`-method on the `linkService`-instance."
                  );
                a.addLinkAttributes?.(e, i.href, i.newWindow);
              }
              n && i.dataId && this.setupStorage(e, i.dataId, t, n);
            }
            static render(e) {
              const t = e.annotationStorage,
                n = e.linkService,
                s = e.xfaHtml,
                a = e.intent || "display",
                i = document.createElement(s.name);
              s.attributes &&
                this.setAttributes({
                  html: i,
                  element: s,
                  intent: a,
                  linkService: n,
                });
              const o = [[s, -1, i]],
                l = e.div;
              l.appendChild(i);
              if (e.viewport) {
                const t = `matrix(${e.viewport.transform.join(",")})`;
                l.style.transform = t;
              }
              "richText" !== a && l.setAttribute("class", "xfaLayer xfaFont");
              const c = [];
              for (; o.length > 0; ) {
                const [e, s, i] = o[o.length - 1];
                if (s + 1 === e.children.length) {
                  o.pop();
                  continue;
                }
                const l = e.children[++o[o.length - 1][1]];
                if (null === l) continue;
                const { name: h } = l;
                if ("#text" === h) {
                  const e = document.createTextNode(l.value);
                  c.push(e);
                  i.appendChild(e);
                  continue;
                }
                let d;
                d = l?.attributes?.xmlns
                  ? document.createElementNS(l.attributes.xmlns, h)
                  : document.createElement(h);
                i.appendChild(d);
                l.attributes &&
                  this.setAttributes({
                    html: d,
                    element: l,
                    storage: t,
                    intent: a,
                    linkService: n,
                  });
                if (l.children && l.children.length > 0) o.push([l, -1, d]);
                else if (l.value) {
                  const e = document.createTextNode(l.value);
                  r.XfaText.shouldBuildText(h) && c.push(e);
                  d.appendChild(e);
                }
              }
              for (const e of l.querySelectorAll(
                ".xfaNonInteractive input, .xfaNonInteractive textarea"
              ))
                e.setAttribute("readOnly", !0);
              return { textDivs: c };
            }
            static update(e) {
              const t = `matrix(${e.viewport.transform.join(",")})`;
              e.div.style.transform = t;
              e.div.hidden = !1;
            }
          };
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.renderTextLayer = function renderTextLayer(e) {
            const t = new TextLayerRenderTask({
              textContent: e.textContent,
              textContentStream: e.textContentStream,
              container: e.container,
              viewport: e.viewport,
              textDivs: e.textDivs,
              textContentItemsStr: e.textContentItemsStr,
              enhanceTextSelection: e.enhanceTextSelection,
            });
            t._render(e.timeout);
            return t;
          };
          var s = n(1);
          const r = 30,
            a = new Map(),
            i = /^\s+$/g;
          function appendText(e, t, n, o) {
            const l = document.createElement("span"),
              c = e._enhanceTextSelection
                ? {
                    angle: 0,
                    canvasWidth: 0,
                    hasText: "" !== t.str,
                    hasEOL: t.hasEOL,
                    originalTransform: null,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    scale: 1,
                  }
                : {
                    angle: 0,
                    canvasWidth: 0,
                    hasText: "" !== t.str,
                    hasEOL: t.hasEOL,
                  };
            e._textDivs.push(l);
            const h = s.Util.transform(e._viewport.transform, t.transform);
            let d = Math.atan2(h[1], h[0]);
            const u = n[t.fontName];
            u.vertical && (d += Math.PI / 2);
            const p = Math.hypot(h[2], h[3]),
              g =
                p *
                (function getAscent(e, t) {
                  const n = a.get(e);
                  if (n) return n;
                  t.save();
                  t.font = `30px ${e}`;
                  const s = t.measureText("");
                  let i = s.fontBoundingBoxAscent,
                    o = Math.abs(s.fontBoundingBoxDescent);
                  if (i) {
                    t.restore();
                    const n = i / (i + o);
                    a.set(e, n);
                    return n;
                  }
                  t.strokeStyle = "red";
                  t.clearRect(0, 0, r, r);
                  t.strokeText("g", 0, 0);
                  let l = t.getImageData(0, 0, r, r).data;
                  o = 0;
                  for (let e = l.length - 1 - 3; e >= 0; e -= 4)
                    if (l[e] > 0) {
                      o = Math.ceil(e / 4 / r);
                      break;
                    }
                  t.clearRect(0, 0, r, r);
                  t.strokeText("A", 0, r);
                  l = t.getImageData(0, 0, r, r).data;
                  i = 0;
                  for (let e = 0, t = l.length; e < t; e += 4)
                    if (l[e] > 0) {
                      i = r - Math.floor(e / 4 / r);
                      break;
                    }
                  t.restore();
                  if (i) {
                    const t = i / (i + o);
                    a.set(e, t);
                    return t;
                  }
                  a.set(e, 0.8);
                  return 0.8;
                })(u.fontFamily, o);
            let f, m;
            if (0 === d) {
              f = h[4];
              m = h[5] - g;
            } else {
              f = h[4] + g * Math.sin(d);
              m = h[5] - g * Math.cos(d);
            }
            l.style.left = `${f}px`;
            l.style.top = `${m}px`;
            l.style.fontSize = `${p}px`;
            l.style.fontFamily = u.fontFamily;
            l.setAttribute("role", "presentation");
            l.textContent = t.str;
            l.dir = t.dir;
            e._fontInspectorEnabled && (l.dataset.fontName = t.fontName);
            0 !== d && (c.angle = d * (180 / Math.PI));
            let _ = !1;
            if (t.str.length > 1 || (e._enhanceTextSelection && i.test(t.str)))
              _ = !0;
            else if (" " !== t.str && t.transform[0] !== t.transform[3]) {
              const e = Math.abs(t.transform[0]),
                n = Math.abs(t.transform[3]);
              e !== n && Math.max(e, n) / Math.min(e, n) > 1.5 && (_ = !0);
            }
            _ &&
              (u.vertical
                ? (c.canvasWidth = t.height * e._viewport.scale)
                : (c.canvasWidth = t.width * e._viewport.scale));
            e._textDivProperties.set(l, c);
            e._textContentStream && e._layoutText(l);
            if (e._enhanceTextSelection && c.hasText) {
              let n = 1,
                r = 0;
              if (0 !== d) {
                n = Math.cos(d);
                r = Math.sin(d);
              }
              const a = (u.vertical ? t.height : t.width) * e._viewport.scale,
                i = p;
              let o, c;
              if (0 !== d) {
                o = [n, r, -r, n, f, m];
                c = s.Util.getAxialAlignedBoundingBox([0, 0, a, i], o);
              } else c = [f, m, f + a, m + i];
              e._bounds.push({
                left: c[0],
                top: c[1],
                right: c[2],
                bottom: c[3],
                div: l,
                size: [a, i],
                m: o,
              });
            }
          }
          function render(e) {
            if (e._canceled) return;
            const t = e._textDivs,
              n = e._capability,
              s = t.length;
            if (s > 1e5) {
              e._renderingDone = !0;
              n.resolve();
            } else {
              if (!e._textContentStream)
                for (let n = 0; n < s; n++) e._layoutText(t[n]);
              e._renderingDone = !0;
              n.resolve();
            }
          }
          function findPositiveMin(e, t, n) {
            let s = 0;
            for (let r = 0; r < n; r++) {
              const n = e[t++];
              n > 0 && (s = s ? Math.min(n, s) : n);
            }
            return s;
          }
          function expand(e) {
            const t = e._bounds,
              n = e._viewport,
              r = (function expandBounds(e, t, n) {
                const s = n.map(function (e, t) {
                  return {
                    x1: e.left,
                    y1: e.top,
                    x2: e.right,
                    y2: e.bottom,
                    index: t,
                    x1New: void 0,
                    x2New: void 0,
                  };
                });
                expandBoundsLTR(e, s);
                const r = new Array(n.length);
                for (const e of s) {
                  const t = e.index;
                  r[t] = { left: e.x1New, top: 0, right: e.x2New, bottom: 0 };
                }
                n.map(function (t, n) {
                  const a = r[n],
                    i = s[n];
                  i.x1 = t.top;
                  i.y1 = e - a.right;
                  i.x2 = t.bottom;
                  i.y2 = e - a.left;
                  i.index = n;
                  i.x1New = void 0;
                  i.x2New = void 0;
                });
                expandBoundsLTR(t, s);
                for (const e of s) {
                  const t = e.index;
                  r[t].top = e.x1New;
                  r[t].bottom = e.x2New;
                }
                return r;
              })(n.width, n.height, t);
            for (let n = 0; n < r.length; n++) {
              const a = t[n].div,
                i = e._textDivProperties.get(a);
              if (0 === i.angle) {
                i.paddingLeft = t[n].left - r[n].left;
                i.paddingTop = t[n].top - r[n].top;
                i.paddingRight = r[n].right - t[n].right;
                i.paddingBottom = r[n].bottom - t[n].bottom;
                e._textDivProperties.set(a, i);
                continue;
              }
              const o = r[n],
                l = t[n],
                c = l.m,
                h = c[0],
                d = c[1],
                u = [[0, 0], [0, l.size[1]], [l.size[0], 0], l.size],
                p = new Float64Array(64);
              for (let e = 0, t = u.length; e < t; e++) {
                const t = s.Util.applyTransform(u[e], c);
                p[e + 0] = h && (o.left - t[0]) / h;
                p[e + 4] = d && (o.top - t[1]) / d;
                p[e + 8] = h && (o.right - t[0]) / h;
                p[e + 12] = d && (o.bottom - t[1]) / d;
                p[e + 16] = d && (o.left - t[0]) / -d;
                p[e + 20] = h && (o.top - t[1]) / h;
                p[e + 24] = d && (o.right - t[0]) / -d;
                p[e + 28] = h && (o.bottom - t[1]) / h;
                p[e + 32] = h && (o.left - t[0]) / -h;
                p[e + 36] = d && (o.top - t[1]) / -d;
                p[e + 40] = h && (o.right - t[0]) / -h;
                p[e + 44] = d && (o.bottom - t[1]) / -d;
                p[e + 48] = d && (o.left - t[0]) / d;
                p[e + 52] = h && (o.top - t[1]) / -h;
                p[e + 56] = d && (o.right - t[0]) / d;
                p[e + 60] = h && (o.bottom - t[1]) / -h;
              }
              const g = 1 + Math.min(Math.abs(h), Math.abs(d));
              i.paddingLeft = findPositiveMin(p, 32, 16) / g;
              i.paddingTop = findPositiveMin(p, 48, 16) / g;
              i.paddingRight = findPositiveMin(p, 0, 16) / g;
              i.paddingBottom = findPositiveMin(p, 16, 16) / g;
              e._textDivProperties.set(a, i);
            }
          }
          function expandBoundsLTR(e, t) {
            t.sort(function (e, t) {
              return e.x1 - t.x1 || e.index - t.index;
            });
            const n = [
              {
                start: -1 / 0,
                end: 1 / 0,
                boundary: {
                  x1: -1 / 0,
                  y1: -1 / 0,
                  x2: 0,
                  y2: 1 / 0,
                  index: -1,
                  x1New: 0,
                  x2New: 0,
                },
              },
            ];
            for (const e of t) {
              let t = 0;
              for (; t < n.length && n[t].end <= e.y1; ) t++;
              let s,
                r,
                a = n.length - 1;
              for (; a >= 0 && n[a].start >= e.y2; ) a--;
              let i,
                o,
                l = -1 / 0;
              for (i = t; i <= a; i++) {
                s = n[i];
                r = s.boundary;
                let t;
                t =
                  r.x2 > e.x1
                    ? r.index > e.index
                      ? r.x1New
                      : e.x1
                    : void 0 === r.x2New
                    ? (r.x2 + e.x1) / 2
                    : r.x2New;
                t > l && (l = t);
              }
              e.x1New = l;
              for (i = t; i <= a; i++) {
                s = n[i];
                r = s.boundary;
                void 0 === r.x2New
                  ? r.x2 > e.x1
                    ? r.index > e.index && (r.x2New = r.x2)
                    : (r.x2New = l)
                  : r.x2New > l && (r.x2New = Math.max(l, r.x2));
              }
              const c = [];
              let h = null;
              for (i = t; i <= a; i++) {
                s = n[i];
                r = s.boundary;
                const t = r.x2 > e.x2 ? r : e;
                if (h === t) c[c.length - 1].end = s.end;
                else {
                  c.push({ start: s.start, end: s.end, boundary: t });
                  h = t;
                }
              }
              if (n[t].start < e.y1) {
                c[0].start = e.y1;
                c.unshift({
                  start: n[t].start,
                  end: e.y1,
                  boundary: n[t].boundary,
                });
              }
              if (e.y2 < n[a].end) {
                c[c.length - 1].end = e.y2;
                c.push({ start: e.y2, end: n[a].end, boundary: n[a].boundary });
              }
              for (i = t; i <= a; i++) {
                s = n[i];
                r = s.boundary;
                if (void 0 !== r.x2New) continue;
                let e = !1;
                for (o = t - 1; !e && o >= 0 && n[o].start >= r.y1; o--)
                  e = n[o].boundary === r;
                for (o = a + 1; !e && o < n.length && n[o].end <= r.y2; o++)
                  e = n[o].boundary === r;
                for (o = 0; !e && o < c.length; o++) e = c[o].boundary === r;
                e || (r.x2New = l);
              }
              Array.prototype.splice.apply(n, [t, a - t + 1].concat(c));
            }
            for (const t of n) {
              const n = t.boundary;
              void 0 === n.x2New && (n.x2New = Math.max(e, n.x2));
            }
          }
          class TextLayerRenderTask {
            constructor({
              textContent: e,
              textContentStream: t,
              container: n,
              viewport: r,
              textDivs: a,
              textContentItemsStr: i,
              enhanceTextSelection: o,
            }) {
              this._textContent = e;
              this._textContentStream = t;
              this._container = n;
              this._document = n.ownerDocument;
              this._viewport = r;
              this._textDivs = a || [];
              this._textContentItemsStr = i || [];
              this._enhanceTextSelection = !!o;
              this._fontInspectorEnabled = !!globalThis.FontInspector?.enabled;
              this._reader = null;
              this._layoutTextLastFontSize = null;
              this._layoutTextLastFontFamily = null;
              this._layoutTextCtx = null;
              this._textDivProperties = new WeakMap();
              this._renderingDone = !1;
              this._canceled = !1;
              this._capability = (0, s.createPromiseCapability)();
              this._renderTimer = null;
              this._bounds = [];
              this._capability.promise
                .finally(() => {
                  this._enhanceTextSelection ||
                    (this._textDivProperties = null);
                  if (this._layoutTextCtx) {
                    this._layoutTextCtx.canvas.width = 0;
                    this._layoutTextCtx.canvas.height = 0;
                    this._layoutTextCtx = null;
                  }
                })
                .catch(() => {});
            }
            get promise() {
              return this._capability.promise;
            }
            cancel() {
              this._canceled = !0;
              if (this._reader) {
                this._reader
                  .cancel(new s.AbortException("TextLayer task cancelled."))
                  .catch(() => {});
                this._reader = null;
              }
              if (null !== this._renderTimer) {
                clearTimeout(this._renderTimer);
                this._renderTimer = null;
              }
              this._capability.reject(new Error("TextLayer task cancelled."));
            }
            _processItems(e, t) {
              for (let n = 0, s = e.length; n < s; n++)
                if (void 0 !== e[n].str) {
                  this._textContentItemsStr.push(e[n].str);
                  appendText(this, e[n], t, this._layoutTextCtx);
                } else if (
                  "beginMarkedContentProps" === e[n].type ||
                  "beginMarkedContent" === e[n].type
                ) {
                  const t = this._container;
                  this._container = document.createElement("span");
                  this._container.classList.add("markedContent");
                  null !== e[n].id &&
                    this._container.setAttribute("id", `${e[n].id}`);
                  t.appendChild(this._container);
                } else
                  "endMarkedContent" === e[n].type &&
                    (this._container = this._container.parentNode);
            }
            _layoutText(e) {
              const t = this._textDivProperties.get(e);
              let n = "";
              if (0 !== t.canvasWidth && t.hasText) {
                const { fontSize: s, fontFamily: r } = e.style;
                if (
                  s !== this._layoutTextLastFontSize ||
                  r !== this._layoutTextLastFontFamily
                ) {
                  this._layoutTextCtx.font = `${s} ${r}`;
                  this._layoutTextLastFontSize = s;
                  this._layoutTextLastFontFamily = r;
                }
                const { width: a } = this._layoutTextCtx.measureText(
                  e.textContent
                );
                if (a > 0) {
                  const e = t.canvasWidth / a;
                  this._enhanceTextSelection && (t.scale = e);
                  n = `scaleX(${e})`;
                }
              }
              0 !== t.angle && (n = `rotate(${t.angle}deg) ${n}`);
              if (n.length > 0) {
                this._enhanceTextSelection && (t.originalTransform = n);
                e.style.transform = n;
              }
              t.hasText && this._container.appendChild(e);
              if (t.hasEOL) {
                const e = document.createElement("br");
                e.setAttribute("role", "presentation");
                this._container.appendChild(e);
              }
            }
            _render(e = 0) {
              const t = (0, s.createPromiseCapability)();
              let n = Object.create(null);
              const a = this._document.createElement("canvas");
              a.height = a.width = r;
              a.mozOpaque = !0;
              this._layoutTextCtx = a.getContext("2d", { alpha: !1 });
              if (this._textContent) {
                const e = this._textContent.items,
                  n = this._textContent.styles;
                this._processItems(e, n);
                t.resolve();
              } else {
                if (!this._textContentStream)
                  throw new Error(
                    'Neither "textContent" nor "textContentStream" parameters specified.'
                  );
                {
                  const pump = () => {
                    this._reader.read().then(({ value: e, done: s }) => {
                      if (s) t.resolve();
                      else {
                        Object.assign(n, e.styles);
                        this._processItems(e.items, n);
                        pump();
                      }
                    }, t.reject);
                  };
                  this._reader = this._textContentStream.getReader();
                  pump();
                }
              }
              t.promise.then(() => {
                n = null;
                e
                  ? (this._renderTimer = setTimeout(() => {
                      render(this);
                      this._renderTimer = null;
                    }, e))
                  : render(this);
              }, this._capability.reject);
            }
            expandTextDivs(e = !1) {
              if (!this._enhanceTextSelection || !this._renderingDone) return;
              if (null !== this._bounds) {
                expand(this);
                this._bounds = null;
              }
              const t = [],
                n = [];
              for (let s = 0, r = this._textDivs.length; s < r; s++) {
                const r = this._textDivs[s],
                  a = this._textDivProperties.get(r);
                if (a.hasText)
                  if (e) {
                    t.length = 0;
                    n.length = 0;
                    a.originalTransform && t.push(a.originalTransform);
                    if (a.paddingTop > 0) {
                      n.push(`${a.paddingTop}px`);
                      t.push(`translateY(${-a.paddingTop}px)`);
                    } else n.push(0);
                    a.paddingRight > 0
                      ? n.push(a.paddingRight / a.scale + "px")
                      : n.push(0);
                    a.paddingBottom > 0
                      ? n.push(`${a.paddingBottom}px`)
                      : n.push(0);
                    if (a.paddingLeft > 0) {
                      n.push(a.paddingLeft / a.scale + "px");
                      t.push(`translateX(${-a.paddingLeft / a.scale}px)`);
                    } else n.push(0);
                    r.style.padding = n.join(" ");
                    t.length && (r.style.transform = t.join(" "));
                  } else {
                    r.style.padding = null;
                    r.style.transform = a.originalTransform;
                  }
              }
            }
          }
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.SVGGraphics = void 0;
          var s = n(1),
            r = n(5),
            a = n(3);
          let i = class {
            constructor() {
              (0, s.unreachable)("Not implemented: SVGGraphics");
            }
          };
          t.SVGGraphics = i;
          {
            const e = {
                fontStyle: "normal",
                fontWeight: "normal",
                fillColor: "#000000",
              },
              n = "http://www.w3.org/XML/1998/namespace",
              o = "http://www.w3.org/1999/xlink",
              l = ["butt", "round", "square"],
              c = ["miter", "round", "bevel"],
              createObjectURL = function (e, t = "", n = !1) {
                if (URL.createObjectURL && "undefined" != typeof Blob && !n)
                  return URL.createObjectURL(new Blob([e], { type: t }));
                const s =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                let r = `data:${t};base64,`;
                for (let t = 0, n = e.length; t < n; t += 3) {
                  const a = 255 & e[t],
                    i = 255 & e[t + 1],
                    o = 255 & e[t + 2];
                  r +=
                    s[a >> 2] +
                    s[((3 & a) << 4) | (i >> 4)] +
                    s[t + 1 < n ? ((15 & i) << 2) | (o >> 6) : 64] +
                    s[t + 2 < n ? 63 & o : 64];
                }
                return r;
              },
              h = (function () {
                const e = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
                  t = new Int32Array(256);
                for (let e = 0; e < 256; e++) {
                  let n = e;
                  for (let e = 0; e < 8; e++)
                    n =
                      1 & n
                        ? 3988292384 ^ ((n >> 1) & 2147483647)
                        : (n >> 1) & 2147483647;
                  t[e] = n;
                }
                function writePngChunk(e, n, s, r) {
                  let a = r;
                  const i = n.length;
                  s[a] = (i >> 24) & 255;
                  s[a + 1] = (i >> 16) & 255;
                  s[a + 2] = (i >> 8) & 255;
                  s[a + 3] = 255 & i;
                  a += 4;
                  s[a] = 255 & e.charCodeAt(0);
                  s[a + 1] = 255 & e.charCodeAt(1);
                  s[a + 2] = 255 & e.charCodeAt(2);
                  s[a + 3] = 255 & e.charCodeAt(3);
                  a += 4;
                  s.set(n, a);
                  a += n.length;
                  const o = (function crc32(e, n, s) {
                    let r = -1;
                    for (let a = n; a < s; a++) {
                      const n = 255 & (r ^ e[a]);
                      r = (r >>> 8) ^ t[n];
                    }
                    return -1 ^ r;
                  })(s, r + 4, a);
                  s[a] = (o >> 24) & 255;
                  s[a + 1] = (o >> 16) & 255;
                  s[a + 2] = (o >> 8) & 255;
                  s[a + 3] = 255 & o;
                }
                function deflateSyncUncompressed(e) {
                  let t = e.length;
                  const n = 65535,
                    s = Math.ceil(t / n),
                    r = new Uint8Array(2 + t + 5 * s + 4);
                  let a = 0;
                  r[a++] = 120;
                  r[a++] = 156;
                  let i = 0;
                  for (; t > n; ) {
                    r[a++] = 0;
                    r[a++] = 255;
                    r[a++] = 255;
                    r[a++] = 0;
                    r[a++] = 0;
                    r.set(e.subarray(i, i + n), a);
                    a += n;
                    i += n;
                    t -= n;
                  }
                  r[a++] = 1;
                  r[a++] = 255 & t;
                  r[a++] = (t >> 8) & 255;
                  r[a++] = 255 & ~t;
                  r[a++] = ((65535 & ~t) >> 8) & 255;
                  r.set(e.subarray(i), a);
                  a += e.length - i;
                  const o = (function adler32(e, t, n) {
                    let s = 1,
                      r = 0;
                    for (let a = t; a < n; ++a) {
                      s = (s + (255 & e[a])) % 65521;
                      r = (r + s) % 65521;
                    }
                    return (r << 16) | s;
                  })(e, 0, e.length);
                  r[a++] = (o >> 24) & 255;
                  r[a++] = (o >> 16) & 255;
                  r[a++] = (o >> 8) & 255;
                  r[a++] = 255 & o;
                  return r;
                }
                function encode(t, n, r, i) {
                  const o = t.width,
                    l = t.height;
                  let c, h, d;
                  const u = t.data;
                  switch (n) {
                    case s.ImageKind.GRAYSCALE_1BPP:
                      h = 0;
                      c = 1;
                      d = (o + 7) >> 3;
                      break;
                    case s.ImageKind.RGB_24BPP:
                      h = 2;
                      c = 8;
                      d = 3 * o;
                      break;
                    case s.ImageKind.RGBA_32BPP:
                      h = 6;
                      c = 8;
                      d = 4 * o;
                      break;
                    default:
                      throw new Error("invalid format");
                  }
                  const p = new Uint8Array((1 + d) * l);
                  let g = 0,
                    f = 0;
                  for (let e = 0; e < l; ++e) {
                    p[g++] = 0;
                    p.set(u.subarray(f, f + d), g);
                    f += d;
                    g += d;
                  }
                  if (n === s.ImageKind.GRAYSCALE_1BPP && i) {
                    g = 0;
                    for (let e = 0; e < l; e++) {
                      g++;
                      for (let e = 0; e < d; e++) p[g++] ^= 255;
                    }
                  }
                  const m = new Uint8Array([
                      (o >> 24) & 255,
                      (o >> 16) & 255,
                      (o >> 8) & 255,
                      255 & o,
                      (l >> 24) & 255,
                      (l >> 16) & 255,
                      (l >> 8) & 255,
                      255 & l,
                      c,
                      h,
                      0,
                      0,
                      0,
                    ]),
                    _ = (function deflateSync(e) {
                      if (!a.isNodeJS) return deflateSyncUncompressed(e);
                      try {
                        let t;
                        t =
                          parseInt(process.versions.node) >= 8
                            ? e
                            : Buffer.from(e);
                        const n = require("zlib").deflateSync(t, { level: 9 });
                        return n instanceof Uint8Array ? n : new Uint8Array(n);
                      } catch (e) {
                        (0, s.warn)(
                          "Not compressing PNG because zlib.deflateSync is unavailable: " +
                            e
                        );
                      }
                      return deflateSyncUncompressed(e);
                    })(p),
                    A = e.length + 36 + m.length + _.length,
                    b = new Uint8Array(A);
                  let y = 0;
                  b.set(e, y);
                  y += e.length;
                  writePngChunk("IHDR", m, b, y);
                  y += 12 + m.length;
                  writePngChunk("IDATA", _, b, y);
                  y += 12 + _.length;
                  writePngChunk("IEND", new Uint8Array(0), b, y);
                  return createObjectURL(b, "image/png", r);
                }
                return function convertImgDataToPng(e, t, n) {
                  return encode(
                    e,
                    void 0 === e.kind ? s.ImageKind.GRAYSCALE_1BPP : e.kind,
                    t,
                    n
                  );
                };
              })();
            class SVGExtraState {
              constructor() {
                this.fontSizeScale = 1;
                this.fontWeight = e.fontWeight;
                this.fontSize = 0;
                this.textMatrix = s.IDENTITY_MATRIX;
                this.fontMatrix = s.FONT_IDENTITY_MATRIX;
                this.leading = 0;
                this.textRenderingMode = s.TextRenderingMode.FILL;
                this.textMatrixScale = 1;
                this.x = 0;
                this.y = 0;
                this.lineX = 0;
                this.lineY = 0;
                this.charSpacing = 0;
                this.wordSpacing = 0;
                this.textHScale = 1;
                this.textRise = 0;
                this.fillColor = e.fillColor;
                this.strokeColor = "#000000";
                this.fillAlpha = 1;
                this.strokeAlpha = 1;
                this.lineWidth = 1;
                this.lineJoin = "";
                this.lineCap = "";
                this.miterLimit = 0;
                this.dashArray = [];
                this.dashPhase = 0;
                this.dependencies = [];
                this.activeClipUrl = null;
                this.clipGroup = null;
                this.maskId = "";
              }
              clone() {
                return Object.create(this);
              }
              setCurrentPoint(e, t) {
                this.x = e;
                this.y = t;
              }
            }
            function opListToTree(e) {
              let t = [];
              const n = [];
              for (const s of e)
                if ("save" !== s.fn)
                  "restore" === s.fn ? (t = n.pop()) : t.push(s);
                else {
                  t.push({ fnId: 92, fn: "group", items: [] });
                  n.push(t);
                  t = t[t.length - 1].items;
                }
              return t;
            }
            function pf(e) {
              if (Number.isInteger(e)) return e.toString();
              const t = e.toFixed(10);
              let n = t.length - 1;
              if ("0" !== t[n]) return t;
              do {
                n--;
              } while ("0" === t[n]);
              return t.substring(0, "." === t[n] ? n : n + 1);
            }
            function pm(e) {
              if (0 === e[4] && 0 === e[5]) {
                if (0 === e[1] && 0 === e[2])
                  return 1 === e[0] && 1 === e[3]
                    ? ""
                    : `scale(${pf(e[0])} ${pf(e[3])})`;
                if (e[0] === e[3] && e[1] === -e[2]) {
                  return `rotate(${pf((180 * Math.acos(e[0])) / Math.PI)})`;
                }
              } else if (1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3])
                return `translate(${pf(e[4])} ${pf(e[5])})`;
              return `matrix(${pf(e[0])} ${pf(e[1])} ${pf(e[2])} ${pf(
                e[3]
              )} ${pf(e[4])} ${pf(e[5])})`;
            }
            let d = 0,
              u = 0,
              p = 0;
            t.SVGGraphics = i = class {
              constructor(e, t, n = !1) {
                this.svgFactory = new r.DOMSVGFactory();
                this.current = new SVGExtraState();
                this.transformMatrix = s.IDENTITY_MATRIX;
                this.transformStack = [];
                this.extraStack = [];
                this.commonObjs = e;
                this.objs = t;
                this.pendingClip = null;
                this.pendingEOFill = !1;
                this.embedFonts = !1;
                this.embeddedFonts = Object.create(null);
                this.cssStyle = null;
                this.forceDataSchema = !!n;
                this._operatorIdMapping = [];
                for (const e in s.OPS) this._operatorIdMapping[s.OPS[e]] = e;
              }
              save() {
                this.transformStack.push(this.transformMatrix);
                const e = this.current;
                this.extraStack.push(e);
                this.current = e.clone();
              }
              restore() {
                this.transformMatrix = this.transformStack.pop();
                this.current = this.extraStack.pop();
                this.pendingClip = null;
                this.tgrp = null;
              }
              group(e) {
                this.save();
                this.executeOpTree(e);
                this.restore();
              }
              loadDependencies(e) {
                const t = e.fnArray,
                  n = e.argsArray;
                for (let e = 0, r = t.length; e < r; e++)
                  if (t[e] === s.OPS.dependency)
                    for (const t of n[e]) {
                      const e = t.startsWith("g_")
                          ? this.commonObjs
                          : this.objs,
                        n = new Promise((n) => {
                          e.get(t, n);
                        });
                      this.current.dependencies.push(n);
                    }
                return Promise.all(this.current.dependencies);
              }
              transform(e, t, n, r, a, i) {
                const o = [e, t, n, r, a, i];
                this.transformMatrix = s.Util.transform(
                  this.transformMatrix,
                  o
                );
                this.tgrp = null;
              }
              getSVG(e, t) {
                this.viewport = t;
                const n = this._initialize(t);
                return this.loadDependencies(e).then(() => {
                  this.transformMatrix = s.IDENTITY_MATRIX;
                  this.executeOpTree(this.convertOpList(e));
                  return n;
                });
              }
              convertOpList(e) {
                const t = this._operatorIdMapping,
                  n = e.argsArray,
                  s = e.fnArray,
                  r = [];
                for (let e = 0, a = s.length; e < a; e++) {
                  const a = s[e];
                  r.push({ fnId: a, fn: t[a], args: n[e] });
                }
                return opListToTree(r);
              }
              executeOpTree(e) {
                for (const t of e) {
                  const e = t.fn,
                    n = t.fnId,
                    r = t.args;
                  switch (0 | n) {
                    case s.OPS.beginText:
                      this.beginText();
                      break;
                    case s.OPS.dependency:
                      break;
                    case s.OPS.setLeading:
                      this.setLeading(r);
                      break;
                    case s.OPS.setLeadingMoveText:
                      this.setLeadingMoveText(r[0], r[1]);
                      break;
                    case s.OPS.setFont:
                      this.setFont(r);
                      break;
                    case s.OPS.showText:
                    case s.OPS.showSpacedText:
                      this.showText(r[0]);
                      break;
                    case s.OPS.endText:
                      this.endText();
                      break;
                    case s.OPS.moveText:
                      this.moveText(r[0], r[1]);
                      break;
                    case s.OPS.setCharSpacing:
                      this.setCharSpacing(r[0]);
                      break;
                    case s.OPS.setWordSpacing:
                      this.setWordSpacing(r[0]);
                      break;
                    case s.OPS.setHScale:
                      this.setHScale(r[0]);
                      break;
                    case s.OPS.setTextMatrix:
                      this.setTextMatrix(r[0], r[1], r[2], r[3], r[4], r[5]);
                      break;
                    case s.OPS.setTextRise:
                      this.setTextRise(r[0]);
                      break;
                    case s.OPS.setTextRenderingMode:
                      this.setTextRenderingMode(r[0]);
                      break;
                    case s.OPS.setLineWidth:
                      this.setLineWidth(r[0]);
                      break;
                    case s.OPS.setLineJoin:
                      this.setLineJoin(r[0]);
                      break;
                    case s.OPS.setLineCap:
                      this.setLineCap(r[0]);
                      break;
                    case s.OPS.setMiterLimit:
                      this.setMiterLimit(r[0]);
                      break;
                    case s.OPS.setFillRGBColor:
                      this.setFillRGBColor(r[0], r[1], r[2]);
                      break;
                    case s.OPS.setStrokeRGBColor:
                      this.setStrokeRGBColor(r[0], r[1], r[2]);
                      break;
                    case s.OPS.setStrokeColorN:
                      this.setStrokeColorN(r);
                      break;
                    case s.OPS.setFillColorN:
                      this.setFillColorN(r);
                      break;
                    case s.OPS.shadingFill:
                      this.shadingFill(r[0]);
                      break;
                    case s.OPS.setDash:
                      this.setDash(r[0], r[1]);
                      break;
                    case s.OPS.setRenderingIntent:
                      this.setRenderingIntent(r[0]);
                      break;
                    case s.OPS.setFlatness:
                      this.setFlatness(r[0]);
                      break;
                    case s.OPS.setGState:
                      this.setGState(r[0]);
                      break;
                    case s.OPS.fill:
                      this.fill();
                      break;
                    case s.OPS.eoFill:
                      this.eoFill();
                      break;
                    case s.OPS.stroke:
                      this.stroke();
                      break;
                    case s.OPS.fillStroke:
                      this.fillStroke();
                      break;
                    case s.OPS.eoFillStroke:
                      this.eoFillStroke();
                      break;
                    case s.OPS.clip:
                      this.clip("nonzero");
                      break;
                    case s.OPS.eoClip:
                      this.clip("evenodd");
                      break;
                    case s.OPS.paintSolidColorImageMask:
                      this.paintSolidColorImageMask();
                      break;
                    case s.OPS.paintImageXObject:
                      this.paintImageXObject(r[0]);
                      break;
                    case s.OPS.paintInlineImageXObject:
                      this.paintInlineImageXObject(r[0]);
                      break;
                    case s.OPS.paintImageMaskXObject:
                      this.paintImageMaskXObject(r[0]);
                      break;
                    case s.OPS.paintFormXObjectBegin:
                      this.paintFormXObjectBegin(r[0], r[1]);
                      break;
                    case s.OPS.paintFormXObjectEnd:
                      this.paintFormXObjectEnd();
                      break;
                    case s.OPS.closePath:
                      this.closePath();
                      break;
                    case s.OPS.closeStroke:
                      this.closeStroke();
                      break;
                    case s.OPS.closeFillStroke:
                      this.closeFillStroke();
                      break;
                    case s.OPS.closeEOFillStroke:
                      this.closeEOFillStroke();
                      break;
                    case s.OPS.nextLine:
                      this.nextLine();
                      break;
                    case s.OPS.transform:
                      this.transform(r[0], r[1], r[2], r[3], r[4], r[5]);
                      break;
                    case s.OPS.constructPath:
                      this.constructPath(r[0], r[1]);
                      break;
                    case s.OPS.endPath:
                      this.endPath();
                      break;
                    case 92:
                      this.group(t.items);
                      break;
                    default:
                      (0, s.warn)(`Unimplemented operator ${e}`);
                  }
                }
              }
              setWordSpacing(e) {
                this.current.wordSpacing = e;
              }
              setCharSpacing(e) {
                this.current.charSpacing = e;
              }
              nextLine() {
                this.moveText(0, this.current.leading);
              }
              setTextMatrix(e, t, n, s, r, a) {
                const i = this.current;
                i.textMatrix = i.lineMatrix = [e, t, n, s, r, a];
                i.textMatrixScale = Math.hypot(e, t);
                i.x = i.lineX = 0;
                i.y = i.lineY = 0;
                i.xcoords = [];
                i.ycoords = [];
                i.tspan = this.svgFactory.createElement("svg:tspan");
                i.tspan.setAttributeNS(null, "font-family", i.fontFamily);
                i.tspan.setAttributeNS(
                  null,
                  "font-size",
                  `${pf(i.fontSize)}px`
                );
                i.tspan.setAttributeNS(null, "y", pf(-i.y));
                i.txtElement = this.svgFactory.createElement("svg:text");
                i.txtElement.appendChild(i.tspan);
              }
              beginText() {
                const e = this.current;
                e.x = e.lineX = 0;
                e.y = e.lineY = 0;
                e.textMatrix = s.IDENTITY_MATRIX;
                e.lineMatrix = s.IDENTITY_MATRIX;
                e.textMatrixScale = 1;
                e.tspan = this.svgFactory.createElement("svg:tspan");
                e.txtElement = this.svgFactory.createElement("svg:text");
                e.txtgrp = this.svgFactory.createElement("svg:g");
                e.xcoords = [];
                e.ycoords = [];
              }
              moveText(e, t) {
                const n = this.current;
                n.x = n.lineX += e;
                n.y = n.lineY += t;
                n.xcoords = [];
                n.ycoords = [];
                n.tspan = this.svgFactory.createElement("svg:tspan");
                n.tspan.setAttributeNS(null, "font-family", n.fontFamily);
                n.tspan.setAttributeNS(
                  null,
                  "font-size",
                  `${pf(n.fontSize)}px`
                );
                n.tspan.setAttributeNS(null, "y", pf(-n.y));
              }
              showText(t) {
                const r = this.current,
                  a = r.font,
                  i = r.fontSize;
                if (0 === i) return;
                const o = r.fontSizeScale,
                  l = r.charSpacing,
                  c = r.wordSpacing,
                  h = r.fontDirection,
                  d = r.textHScale * h,
                  u = a.vertical,
                  p = u ? 1 : -1,
                  g = a.defaultVMetrics,
                  f = i * r.fontMatrix[0];
                let m = 0;
                for (const e of t) {
                  if (null === e) {
                    m += h * c;
                    continue;
                  }
                  if ("number" == typeof e) {
                    m += (p * e * i) / 1e3;
                    continue;
                  }
                  const t = (e.isSpace ? c : 0) + l,
                    n = e.fontChar;
                  let s,
                    d,
                    _,
                    A = e.width;
                  if (u) {
                    let t;
                    const n = e.vmetric || g;
                    t = e.vmetric ? n[1] : 0.5 * A;
                    t = -t * f;
                    const r = n[2] * f;
                    A = n ? -n[0] : A;
                    s = t / o;
                    d = (m + r) / o;
                  } else {
                    s = m / o;
                    d = 0;
                  }
                  if (e.isInFont || a.missingFile) {
                    r.xcoords.push(r.x + s);
                    u && r.ycoords.push(-r.y + d);
                    r.tspan.textContent += n;
                  }
                  _ = u ? A * f - t * h : A * f + t * h;
                  m += _;
                }
                r.tspan.setAttributeNS(null, "x", r.xcoords.map(pf).join(" "));
                u
                  ? r.tspan.setAttributeNS(
                      null,
                      "y",
                      r.ycoords.map(pf).join(" ")
                    )
                  : r.tspan.setAttributeNS(null, "y", pf(-r.y));
                u ? (r.y -= m) : (r.x += m * d);
                r.tspan.setAttributeNS(null, "font-family", r.fontFamily);
                r.tspan.setAttributeNS(
                  null,
                  "font-size",
                  `${pf(r.fontSize)}px`
                );
                r.fontStyle !== e.fontStyle &&
                  r.tspan.setAttributeNS(null, "font-style", r.fontStyle);
                r.fontWeight !== e.fontWeight &&
                  r.tspan.setAttributeNS(null, "font-weight", r.fontWeight);
                const _ =
                  r.textRenderingMode & s.TextRenderingMode.FILL_STROKE_MASK;
                if (
                  _ === s.TextRenderingMode.FILL ||
                  _ === s.TextRenderingMode.FILL_STROKE
                ) {
                  r.fillColor !== e.fillColor &&
                    r.tspan.setAttributeNS(null, "fill", r.fillColor);
                  r.fillAlpha < 1 &&
                    r.tspan.setAttributeNS(null, "fill-opacity", r.fillAlpha);
                } else
                  r.textRenderingMode === s.TextRenderingMode.ADD_TO_PATH
                    ? r.tspan.setAttributeNS(null, "fill", "transparent")
                    : r.tspan.setAttributeNS(null, "fill", "none");
                if (
                  _ === s.TextRenderingMode.STROKE ||
                  _ === s.TextRenderingMode.FILL_STROKE
                ) {
                  const e = 1 / (r.textMatrixScale || 1);
                  this._setStrokeAttributes(r.tspan, e);
                }
                let A = r.textMatrix;
                if (0 !== r.textRise) {
                  A = A.slice();
                  A[5] += r.textRise;
                }
                r.txtElement.setAttributeNS(
                  null,
                  "transform",
                  `${pm(A)} scale(${pf(d)}, -1)`
                );
                r.txtElement.setAttributeNS(n, "xml:space", "preserve");
                r.txtElement.appendChild(r.tspan);
                r.txtgrp.appendChild(r.txtElement);
                this._ensureTransformGroup().appendChild(r.txtElement);
              }
              setLeadingMoveText(e, t) {
                this.setLeading(-t);
                this.moveText(e, t);
              }
              addFontStyle(e) {
                if (!e.data)
                  throw new Error(
                    'addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.'
                  );
                if (!this.cssStyle) {
                  this.cssStyle = this.svgFactory.createElement("svg:style");
                  this.cssStyle.setAttributeNS(null, "type", "text/css");
                  this.defs.appendChild(this.cssStyle);
                }
                const t = createObjectURL(
                  e.data,
                  e.mimetype,
                  this.forceDataSchema
                );
                this.cssStyle.textContent += `@font-face { font-family: "${e.loadedName}"; src: url(${t}); }\n`;
              }
              setFont(e) {
                const t = this.current,
                  n = this.commonObjs.get(e[0]);
                let r = e[1];
                t.font = n;
                if (
                  this.embedFonts &&
                  !n.missingFile &&
                  !this.embeddedFonts[n.loadedName]
                ) {
                  this.addFontStyle(n);
                  this.embeddedFonts[n.loadedName] = n;
                }
                t.fontMatrix = n.fontMatrix || s.FONT_IDENTITY_MATRIX;
                let a = "normal";
                n.black ? (a = "900") : n.bold && (a = "bold");
                const i = n.italic ? "italic" : "normal";
                if (r < 0) {
                  r = -r;
                  t.fontDirection = -1;
                } else t.fontDirection = 1;
                t.fontSize = r;
                t.fontFamily = n.loadedName;
                t.fontWeight = a;
                t.fontStyle = i;
                t.tspan = this.svgFactory.createElement("svg:tspan");
                t.tspan.setAttributeNS(null, "y", pf(-t.y));
                t.xcoords = [];
                t.ycoords = [];
              }
              endText() {
                const e = this.current;
                if (
                  e.textRenderingMode & s.TextRenderingMode.ADD_TO_PATH_FLAG &&
                  e.txtElement?.hasChildNodes()
                ) {
                  e.element = e.txtElement;
                  this.clip("nonzero");
                  this.endPath();
                }
              }
              setLineWidth(e) {
                e > 0 && (this.current.lineWidth = e);
              }
              setLineCap(e) {
                this.current.lineCap = l[e];
              }
              setLineJoin(e) {
                this.current.lineJoin = c[e];
              }
              setMiterLimit(e) {
                this.current.miterLimit = e;
              }
              setStrokeAlpha(e) {
                this.current.strokeAlpha = e;
              }
              setStrokeRGBColor(e, t, n) {
                this.current.strokeColor = s.Util.makeHexColor(e, t, n);
              }
              setFillAlpha(e) {
                this.current.fillAlpha = e;
              }
              setFillRGBColor(e, t, n) {
                this.current.fillColor = s.Util.makeHexColor(e, t, n);
                this.current.tspan = this.svgFactory.createElement("svg:tspan");
                this.current.xcoords = [];
                this.current.ycoords = [];
              }
              setStrokeColorN(e) {
                this.current.strokeColor = this._makeColorN_Pattern(e);
              }
              setFillColorN(e) {
                this.current.fillColor = this._makeColorN_Pattern(e);
              }
              shadingFill(e) {
                const t = this.viewport.width,
                  n = this.viewport.height,
                  r = s.Util.inverseTransform(this.transformMatrix),
                  a = s.Util.applyTransform([0, 0], r),
                  i = s.Util.applyTransform([0, n], r),
                  o = s.Util.applyTransform([t, 0], r),
                  l = s.Util.applyTransform([t, n], r),
                  c = Math.min(a[0], i[0], o[0], l[0]),
                  h = Math.min(a[1], i[1], o[1], l[1]),
                  d = Math.max(a[0], i[0], o[0], l[0]),
                  u = Math.max(a[1], i[1], o[1], l[1]),
                  p = this.svgFactory.createElement("svg:rect");
                p.setAttributeNS(null, "x", c);
                p.setAttributeNS(null, "y", h);
                p.setAttributeNS(null, "width", d - c);
                p.setAttributeNS(null, "height", u - h);
                p.setAttributeNS(null, "fill", this._makeShadingPattern(e));
                this.current.fillAlpha < 1 &&
                  p.setAttributeNS(
                    null,
                    "fill-opacity",
                    this.current.fillAlpha
                  );
                this._ensureTransformGroup().appendChild(p);
              }
              _makeColorN_Pattern(e) {
                return "TilingPattern" === e[0]
                  ? this._makeTilingPattern(e)
                  : this._makeShadingPattern(e);
              }
              _makeTilingPattern(e) {
                const t = e[1],
                  n = e[2],
                  r = e[3] || s.IDENTITY_MATRIX,
                  [a, i, o, l] = e[4],
                  c = e[5],
                  h = e[6],
                  d = e[7],
                  u = "shading" + p++,
                  [g, f, m, _] = s.Util.normalizeRect([
                    ...s.Util.applyTransform([a, i], r),
                    ...s.Util.applyTransform([o, l], r),
                  ]),
                  [A, b] = s.Util.singularValueDecompose2dScale(r),
                  y = c * A,
                  S = h * b,
                  x = this.svgFactory.createElement("svg:pattern");
                x.setAttributeNS(null, "id", u);
                x.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
                x.setAttributeNS(null, "width", y);
                x.setAttributeNS(null, "height", S);
                x.setAttributeNS(null, "x", `${g}`);
                x.setAttributeNS(null, "y", `${f}`);
                const v = this.svg,
                  C = this.transformMatrix,
                  P = this.current.fillColor,
                  w = this.current.strokeColor,
                  T = this.svgFactory.create(m - g, _ - f);
                this.svg = T;
                this.transformMatrix = r;
                if (2 === d) {
                  const e = s.Util.makeHexColor(...t);
                  this.current.fillColor = e;
                  this.current.strokeColor = e;
                }
                this.executeOpTree(this.convertOpList(n));
                this.svg = v;
                this.transformMatrix = C;
                this.current.fillColor = P;
                this.current.strokeColor = w;
                x.appendChild(T.childNodes[0]);
                this.defs.appendChild(x);
                return `url(#${u})`;
              }
              _makeShadingPattern(e) {
                "string" == typeof e && (e = this.objs.get(e));
                switch (e[0]) {
                  case "RadialAxial":
                    const t = "shading" + p++,
                      n = e[3];
                    let r;
                    switch (e[1]) {
                      case "axial":
                        const n = e[4],
                          s = e[5];
                        r = this.svgFactory.createElement("svg:linearGradient");
                        r.setAttributeNS(null, "id", t);
                        r.setAttributeNS(
                          null,
                          "gradientUnits",
                          "userSpaceOnUse"
                        );
                        r.setAttributeNS(null, "x1", n[0]);
                        r.setAttributeNS(null, "y1", n[1]);
                        r.setAttributeNS(null, "x2", s[0]);
                        r.setAttributeNS(null, "y2", s[1]);
                        break;
                      case "radial":
                        const a = e[4],
                          i = e[5],
                          o = e[6],
                          l = e[7];
                        r = this.svgFactory.createElement("svg:radialGradient");
                        r.setAttributeNS(null, "id", t);
                        r.setAttributeNS(
                          null,
                          "gradientUnits",
                          "userSpaceOnUse"
                        );
                        r.setAttributeNS(null, "cx", i[0]);
                        r.setAttributeNS(null, "cy", i[1]);
                        r.setAttributeNS(null, "r", l);
                        r.setAttributeNS(null, "fx", a[0]);
                        r.setAttributeNS(null, "fy", a[1]);
                        r.setAttributeNS(null, "fr", o);
                        break;
                      default:
                        throw new Error(`Unknown RadialAxial type: ${e[1]}`);
                    }
                    for (const e of n) {
                      const t = this.svgFactory.createElement("svg:stop");
                      t.setAttributeNS(null, "offset", e[0]);
                      t.setAttributeNS(null, "stop-color", e[1]);
                      r.appendChild(t);
                    }
                    this.defs.appendChild(r);
                    return `url(#${t})`;
                  case "Mesh":
                    (0, s.warn)("Unimplemented pattern Mesh");
                    return null;
                  case "Dummy":
                    return "hotpink";
                  default:
                    throw new Error(`Unknown IR type: ${e[0]}`);
                }
              }
              setDash(e, t) {
                this.current.dashArray = e;
                this.current.dashPhase = t;
              }
              constructPath(e, t) {
                const n = this.current;
                let r = n.x,
                  a = n.y,
                  i = [],
                  o = 0;
                for (const n of e)
                  switch (0 | n) {
                    case s.OPS.rectangle:
                      r = t[o++];
                      a = t[o++];
                      const e = r + t[o++],
                        n = a + t[o++];
                      i.push(
                        "M",
                        pf(r),
                        pf(a),
                        "L",
                        pf(e),
                        pf(a),
                        "L",
                        pf(e),
                        pf(n),
                        "L",
                        pf(r),
                        pf(n),
                        "Z"
                      );
                      break;
                    case s.OPS.moveTo:
                      r = t[o++];
                      a = t[o++];
                      i.push("M", pf(r), pf(a));
                      break;
                    case s.OPS.lineTo:
                      r = t[o++];
                      a = t[o++];
                      i.push("L", pf(r), pf(a));
                      break;
                    case s.OPS.curveTo:
                      r = t[o + 4];
                      a = t[o + 5];
                      i.push(
                        "C",
                        pf(t[o]),
                        pf(t[o + 1]),
                        pf(t[o + 2]),
                        pf(t[o + 3]),
                        pf(r),
                        pf(a)
                      );
                      o += 6;
                      break;
                    case s.OPS.curveTo2:
                      i.push(
                        "C",
                        pf(r),
                        pf(a),
                        pf(t[o]),
                        pf(t[o + 1]),
                        pf(t[o + 2]),
                        pf(t[o + 3])
                      );
                      r = t[o + 2];
                      a = t[o + 3];
                      o += 4;
                      break;
                    case s.OPS.curveTo3:
                      r = t[o + 2];
                      a = t[o + 3];
                      i.push(
                        "C",
                        pf(t[o]),
                        pf(t[o + 1]),
                        pf(r),
                        pf(a),
                        pf(r),
                        pf(a)
                      );
                      o += 4;
                      break;
                    case s.OPS.closePath:
                      i.push("Z");
                  }
                i = i.join(" ");
                if (
                  n.path &&
                  e.length > 0 &&
                  e[0] !== s.OPS.rectangle &&
                  e[0] !== s.OPS.moveTo
                )
                  i = n.path.getAttributeNS(null, "d") + i;
                else {
                  n.path = this.svgFactory.createElement("svg:path");
                  this._ensureTransformGroup().appendChild(n.path);
                }
                n.path.setAttributeNS(null, "d", i);
                n.path.setAttributeNS(null, "fill", "none");
                n.element = n.path;
                n.setCurrentPoint(r, a);
              }
              endPath() {
                const e = this.current;
                e.path = null;
                if (!this.pendingClip) return;
                if (!e.element) {
                  this.pendingClip = null;
                  return;
                }
                const t = "clippath" + d++,
                  n = this.svgFactory.createElement("svg:clipPath");
                n.setAttributeNS(null, "id", t);
                n.setAttributeNS(null, "transform", pm(this.transformMatrix));
                const s = e.element.cloneNode(!0);
                "evenodd" === this.pendingClip
                  ? s.setAttributeNS(null, "clip-rule", "evenodd")
                  : s.setAttributeNS(null, "clip-rule", "nonzero");
                this.pendingClip = null;
                n.appendChild(s);
                this.defs.appendChild(n);
                if (e.activeClipUrl) {
                  e.clipGroup = null;
                  for (const e of this.extraStack) e.clipGroup = null;
                  n.setAttributeNS(null, "clip-path", e.activeClipUrl);
                }
                e.activeClipUrl = `url(#${t})`;
                this.tgrp = null;
              }
              clip(e) {
                this.pendingClip = e;
              }
              closePath() {
                const e = this.current;
                if (e.path) {
                  const t = `${e.path.getAttributeNS(null, "d")}Z`;
                  e.path.setAttributeNS(null, "d", t);
                }
              }
              setLeading(e) {
                this.current.leading = -e;
              }
              setTextRise(e) {
                this.current.textRise = e;
              }
              setTextRenderingMode(e) {
                this.current.textRenderingMode = e;
              }
              setHScale(e) {
                this.current.textHScale = e / 100;
              }
              setRenderingIntent(e) {}
              setFlatness(e) {}
              setGState(e) {
                for (const [t, n] of e)
                  switch (t) {
                    case "LW":
                      this.setLineWidth(n);
                      break;
                    case "LC":
                      this.setLineCap(n);
                      break;
                    case "LJ":
                      this.setLineJoin(n);
                      break;
                    case "ML":
                      this.setMiterLimit(n);
                      break;
                    case "D":
                      this.setDash(n[0], n[1]);
                      break;
                    case "RI":
                      this.setRenderingIntent(n);
                      break;
                    case "FL":
                      this.setFlatness(n);
                      break;
                    case "Font":
                      this.setFont(n);
                      break;
                    case "CA":
                      this.setStrokeAlpha(n);
                      break;
                    case "ca":
                      this.setFillAlpha(n);
                      break;
                    default:
                      (0, s.warn)(`Unimplemented graphic state operator ${t}`);
                  }
              }
              fill() {
                const e = this.current;
                if (e.element) {
                  e.element.setAttributeNS(null, "fill", e.fillColor);
                  e.element.setAttributeNS(null, "fill-opacity", e.fillAlpha);
                  this.endPath();
                }
              }
              stroke() {
                const e = this.current;
                if (e.element) {
                  this._setStrokeAttributes(e.element);
                  e.element.setAttributeNS(null, "fill", "none");
                  this.endPath();
                }
              }
              _setStrokeAttributes(e, t = 1) {
                const n = this.current;
                let s = n.dashArray;
                1 !== t &&
                  s.length > 0 &&
                  (s = s.map(function (e) {
                    return t * e;
                  }));
                e.setAttributeNS(null, "stroke", n.strokeColor);
                e.setAttributeNS(null, "stroke-opacity", n.strokeAlpha);
                e.setAttributeNS(null, "stroke-miterlimit", pf(n.miterLimit));
                e.setAttributeNS(null, "stroke-linecap", n.lineCap);
                e.setAttributeNS(null, "stroke-linejoin", n.lineJoin);
                e.setAttributeNS(
                  null,
                  "stroke-width",
                  pf(t * n.lineWidth) + "px"
                );
                e.setAttributeNS(null, "stroke-dasharray", s.map(pf).join(" "));
                e.setAttributeNS(
                  null,
                  "stroke-dashoffset",
                  pf(t * n.dashPhase) + "px"
                );
              }
              eoFill() {
                this.current.element &&
                  this.current.element.setAttributeNS(
                    null,
                    "fill-rule",
                    "evenodd"
                  );
                this.fill();
              }
              fillStroke() {
                this.stroke();
                this.fill();
              }
              eoFillStroke() {
                this.current.element &&
                  this.current.element.setAttributeNS(
                    null,
                    "fill-rule",
                    "evenodd"
                  );
                this.fillStroke();
              }
              closeStroke() {
                this.closePath();
                this.stroke();
              }
              closeFillStroke() {
                this.closePath();
                this.fillStroke();
              }
              closeEOFillStroke() {
                this.closePath();
                this.eoFillStroke();
              }
              paintSolidColorImageMask() {
                const e = this.svgFactory.createElement("svg:rect");
                e.setAttributeNS(null, "x", "0");
                e.setAttributeNS(null, "y", "0");
                e.setAttributeNS(null, "width", "1px");
                e.setAttributeNS(null, "height", "1px");
                e.setAttributeNS(null, "fill", this.current.fillColor);
                this._ensureTransformGroup().appendChild(e);
              }
              paintImageXObject(e) {
                const t = e.startsWith("g_")
                  ? this.commonObjs.get(e)
                  : this.objs.get(e);
                t
                  ? this.paintInlineImageXObject(t)
                  : (0, s.warn)(
                      `Dependent image with object ID ${e} is not ready yet`
                    );
              }
              paintInlineImageXObject(e, t) {
                const n = e.width,
                  s = e.height,
                  r = h(e, this.forceDataSchema, !!t),
                  a = this.svgFactory.createElement("svg:rect");
                a.setAttributeNS(null, "x", "0");
                a.setAttributeNS(null, "y", "0");
                a.setAttributeNS(null, "width", pf(n));
                a.setAttributeNS(null, "height", pf(s));
                this.current.element = a;
                this.clip("nonzero");
                const i = this.svgFactory.createElement("svg:image");
                i.setAttributeNS(o, "xlink:href", r);
                i.setAttributeNS(null, "x", "0");
                i.setAttributeNS(null, "y", pf(-s));
                i.setAttributeNS(null, "width", pf(n) + "px");
                i.setAttributeNS(null, "height", pf(s) + "px");
                i.setAttributeNS(
                  null,
                  "transform",
                  `scale(${pf(1 / n)} ${pf(-1 / s)})`
                );
                t
                  ? t.appendChild(i)
                  : this._ensureTransformGroup().appendChild(i);
              }
              paintImageMaskXObject(e) {
                const t = this.current,
                  n = e.width,
                  s = e.height,
                  r = t.fillColor;
                t.maskId = "mask" + u++;
                const a = this.svgFactory.createElement("svg:mask");
                a.setAttributeNS(null, "id", t.maskId);
                const i = this.svgFactory.createElement("svg:rect");
                i.setAttributeNS(null, "x", "0");
                i.setAttributeNS(null, "y", "0");
                i.setAttributeNS(null, "width", pf(n));
                i.setAttributeNS(null, "height", pf(s));
                i.setAttributeNS(null, "fill", r);
                i.setAttributeNS(null, "mask", `url(#${t.maskId})`);
                this.defs.appendChild(a);
                this._ensureTransformGroup().appendChild(i);
                this.paintInlineImageXObject(e, a);
              }
              paintFormXObjectBegin(e, t) {
                Array.isArray(e) &&
                  6 === e.length &&
                  this.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
                if (t) {
                  const e = t[2] - t[0],
                    n = t[3] - t[1],
                    s = this.svgFactory.createElement("svg:rect");
                  s.setAttributeNS(null, "x", t[0]);
                  s.setAttributeNS(null, "y", t[1]);
                  s.setAttributeNS(null, "width", pf(e));
                  s.setAttributeNS(null, "height", pf(n));
                  this.current.element = s;
                  this.clip("nonzero");
                  this.endPath();
                }
              }
              paintFormXObjectEnd() {}
              _initialize(e) {
                const t = this.svgFactory.create(e.width, e.height),
                  n = this.svgFactory.createElement("svg:defs");
                t.appendChild(n);
                this.defs = n;
                const s = this.svgFactory.createElement("svg:g");
                s.setAttributeNS(null, "transform", pm(e.transform));
                t.appendChild(s);
                this.svg = s;
                return t;
              }
              _ensureClipGroup() {
                if (!this.current.clipGroup) {
                  const e = this.svgFactory.createElement("svg:g");
                  e.setAttributeNS(
                    null,
                    "clip-path",
                    this.current.activeClipUrl
                  );
                  this.svg.appendChild(e);
                  this.current.clipGroup = e;
                }
                return this.current.clipGroup;
              }
              _ensureTransformGroup() {
                if (!this.tgrp) {
                  this.tgrp = this.svgFactory.createElement("svg:g");
                  this.tgrp.setAttributeNS(
                    null,
                    "transform",
                    pm(this.transformMatrix)
                  );
                  this.current.activeClipUrl
                    ? this._ensureClipGroup().appendChild(this.tgrp)
                    : this.svg.appendChild(this.tgrp);
                }
                return this.tgrp;
              }
            };
          }
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.PDFNodeStream = void 0;
          var s = n(1),
            r = n(24);
          const a = require("fs"),
            i = require("http"),
            o = require("https"),
            l = require("url"),
            c = /^file:\/\/\/[a-zA-Z]:\//;
          t.PDFNodeStream = class PDFNodeStream {
            constructor(e) {
              this.source = e;
              this.url = (function parseUrl(e) {
                const t = l.parse(e);
                if ("file:" === t.protocol || t.host) return t;
                if (/^[a-z]:[/\\]/i.test(e)) return l.parse(`file:///${e}`);
                t.host || (t.protocol = "file:");
                return t;
              })(e.url);
              this.isHttp =
                "http:" === this.url.protocol || "https:" === this.url.protocol;
              this.isFsUrl = "file:" === this.url.protocol;
              this.httpHeaders = (this.isHttp && e.httpHeaders) || {};
              this._fullRequestReader = null;
              this._rangeRequestReaders = [];
            }
            get _progressiveDataLength() {
              return this._fullRequestReader?._loaded ?? 0;
            }
            getFullReader() {
              (0, s.assert)(
                !this._fullRequestReader,
                "PDFNodeStream.getFullReader can only be called once."
              );
              this._fullRequestReader = this.isFsUrl
                ? new PDFNodeStreamFsFullReader(this)
                : new PDFNodeStreamFullReader(this);
              return this._fullRequestReader;
            }
            getRangeReader(e, t) {
              if (t <= this._progressiveDataLength) return null;
              const n = this.isFsUrl
                ? new PDFNodeStreamFsRangeReader(this, e, t)
                : new PDFNodeStreamRangeReader(this, e, t);
              this._rangeRequestReaders.push(n);
              return n;
            }
            cancelAllRequests(e) {
              this._fullRequestReader && this._fullRequestReader.cancel(e);
              for (const t of this._rangeRequestReaders.slice(0)) t.cancel(e);
            }
          };
          class BaseFullReader {
            constructor(e) {
              this._url = e.url;
              this._done = !1;
              this._storedError = null;
              this.onProgress = null;
              const t = e.source;
              this._contentLength = t.length;
              this._loaded = 0;
              this._filename = null;
              this._disableRange = t.disableRange || !1;
              this._rangeChunkSize = t.rangeChunkSize;
              this._rangeChunkSize ||
                this._disableRange ||
                (this._disableRange = !0);
              this._isStreamingSupported = !t.disableStream;
              this._isRangeSupported = !t.disableRange;
              this._readableStream = null;
              this._readCapability = (0, s.createPromiseCapability)();
              this._headersCapability = (0, s.createPromiseCapability)();
            }
            get headersReady() {
              return this._headersCapability.promise;
            }
            get filename() {
              return this._filename;
            }
            get contentLength() {
              return this._contentLength;
            }
            get isRangeSupported() {
              return this._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              await this._readCapability.promise;
              if (this._done) return { value: void 0, done: !0 };
              if (this._storedError) throw this._storedError;
              const e = this._readableStream.read();
              if (null === e) {
                this._readCapability = (0, s.createPromiseCapability)();
                return this.read();
              }
              this._loaded += e.length;
              this.onProgress &&
                this.onProgress({
                  loaded: this._loaded,
                  total: this._contentLength,
                });
              return { value: new Uint8Array(e).buffer, done: !1 };
            }
            cancel(e) {
              this._readableStream
                ? this._readableStream.destroy(e)
                : this._error(e);
            }
            _error(e) {
              this._storedError = e;
              this._readCapability.resolve();
            }
            _setReadableStream(e) {
              this._readableStream = e;
              e.on("readable", () => {
                this._readCapability.resolve();
              });
              e.on("end", () => {
                e.destroy();
                this._done = !0;
                this._readCapability.resolve();
              });
              e.on("error", (e) => {
                this._error(e);
              });
              !this._isStreamingSupported &&
                this._isRangeSupported &&
                this._error(new s.AbortException("streaming is disabled"));
              this._storedError &&
                this._readableStream.destroy(this._storedError);
            }
          }
          class BaseRangeReader {
            constructor(e) {
              this._url = e.url;
              this._done = !1;
              this._storedError = null;
              this.onProgress = null;
              this._loaded = 0;
              this._readableStream = null;
              this._readCapability = (0, s.createPromiseCapability)();
              const t = e.source;
              this._isStreamingSupported = !t.disableStream;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              await this._readCapability.promise;
              if (this._done) return { value: void 0, done: !0 };
              if (this._storedError) throw this._storedError;
              const e = this._readableStream.read();
              if (null === e) {
                this._readCapability = (0, s.createPromiseCapability)();
                return this.read();
              }
              this._loaded += e.length;
              this.onProgress && this.onProgress({ loaded: this._loaded });
              return { value: new Uint8Array(e).buffer, done: !1 };
            }
            cancel(e) {
              this._readableStream
                ? this._readableStream.destroy(e)
                : this._error(e);
            }
            _error(e) {
              this._storedError = e;
              this._readCapability.resolve();
            }
            _setReadableStream(e) {
              this._readableStream = e;
              e.on("readable", () => {
                this._readCapability.resolve();
              });
              e.on("end", () => {
                e.destroy();
                this._done = !0;
                this._readCapability.resolve();
              });
              e.on("error", (e) => {
                this._error(e);
              });
              this._storedError &&
                this._readableStream.destroy(this._storedError);
            }
          }
          function createRequestOptions(e, t) {
            return {
              protocol: e.protocol,
              auth: e.auth,
              host: e.hostname,
              port: e.port,
              path: e.path,
              method: "GET",
              headers: t,
            };
          }
          class PDFNodeStreamFullReader extends BaseFullReader {
            constructor(e) {
              super(e);
              const handleResponse = (t) => {
                if (404 === t.statusCode) {
                  const e = new s.MissingPDFException(
                    `Missing PDF "${this._url}".`
                  );
                  this._storedError = e;
                  this._headersCapability.reject(e);
                  return;
                }
                this._headersCapability.resolve();
                this._setReadableStream(t);
                const getResponseHeader = (e) =>
                    this._readableStream.headers[e.toLowerCase()],
                  { allowRangeRequests: n, suggestedLength: a } = (0,
                  r.validateRangeRequestCapabilities)({
                    getResponseHeader: getResponseHeader,
                    isHttp: e.isHttp,
                    rangeChunkSize: this._rangeChunkSize,
                    disableRange: this._disableRange,
                  });
                this._isRangeSupported = n;
                this._contentLength = a || this._contentLength;
                this._filename = (0, r.extractFilenameFromHeader)(
                  getResponseHeader
                );
              };
              this._request = null;
              "http:" === this._url.protocol
                ? (this._request = i.request(
                    createRequestOptions(this._url, e.httpHeaders),
                    handleResponse
                  ))
                : (this._request = o.request(
                    createRequestOptions(this._url, e.httpHeaders),
                    handleResponse
                  ));
              this._request.on("error", (e) => {
                this._storedError = e;
                this._headersCapability.reject(e);
              });
              this._request.end();
            }
          }
          class PDFNodeStreamRangeReader extends BaseRangeReader {
            constructor(e, t, n) {
              super(e);
              this._httpHeaders = {};
              for (const t in e.httpHeaders) {
                const n = e.httpHeaders[t];
                void 0 !== n && (this._httpHeaders[t] = n);
              }
              this._httpHeaders.Range = `bytes=${t}-${n - 1}`;
              const handleResponse = (e) => {
                if (404 !== e.statusCode) this._setReadableStream(e);
                else {
                  const e = new s.MissingPDFException(
                    `Missing PDF "${this._url}".`
                  );
                  this._storedError = e;
                }
              };
              this._request = null;
              "http:" === this._url.protocol
                ? (this._request = i.request(
                    createRequestOptions(this._url, this._httpHeaders),
                    handleResponse
                  ))
                : (this._request = o.request(
                    createRequestOptions(this._url, this._httpHeaders),
                    handleResponse
                  ));
              this._request.on("error", (e) => {
                this._storedError = e;
              });
              this._request.end();
            }
          }
          class PDFNodeStreamFsFullReader extends BaseFullReader {
            constructor(e) {
              super(e);
              let t = decodeURIComponent(this._url.path);
              c.test(this._url.href) && (t = t.replace(/^\//, ""));
              a.lstat(t, (e, n) => {
                if (e) {
                  "ENOENT" === e.code &&
                    (e = new s.MissingPDFException(`Missing PDF "${t}".`));
                  this._storedError = e;
                  this._headersCapability.reject(e);
                } else {
                  this._contentLength = n.size;
                  this._setReadableStream(a.createReadStream(t));
                  this._headersCapability.resolve();
                }
              });
            }
          }
          class PDFNodeStreamFsRangeReader extends BaseRangeReader {
            constructor(e, t, n) {
              super(e);
              let s = decodeURIComponent(this._url.path);
              c.test(this._url.href) && (s = s.replace(/^\//, ""));
              this._setReadableStream(
                a.createReadStream(s, { start: t, end: n - 1 })
              );
            }
          }
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.createResponseStatusError = function createResponseStatusError(
            e,
            t
          ) {
            if (404 === e || (0 === e && t.startsWith("file:")))
              return new s.MissingPDFException('Missing PDF "' + t + '".');
            return new s.UnexpectedResponseException(
              `Unexpected server response (${e}) while retrieving PDF "${t}".`,
              e
            );
          };
          t.extractFilenameFromHeader = function extractFilenameFromHeader(e) {
            const t = e("Content-Disposition");
            if (t) {
              let e = (0, r.getFilenameFromContentDispositionHeader)(t);
              if (e.includes("%"))
                try {
                  e = decodeURIComponent(e);
                } catch (e) {}
              if ((0, a.isPdfFile)(e)) return e;
            }
            return null;
          };
          t.validateRangeRequestCapabilities =
            function validateRangeRequestCapabilities({
              getResponseHeader: e,
              isHttp: t,
              rangeChunkSize: n,
              disableRange: r,
            }) {
              (0, s.assert)(n > 0, "Range chunk size must be larger than zero");
              const a = { allowRangeRequests: !1, suggestedLength: void 0 },
                i = parseInt(e("Content-Length"), 10);
              if (!Number.isInteger(i)) return a;
              a.suggestedLength = i;
              if (i <= 2 * n) return a;
              if (r || !t) return a;
              if ("bytes" !== e("Accept-Ranges")) return a;
              if ("identity" !== (e("Content-Encoding") || "identity"))
                return a;
              a.allowRangeRequests = !0;
              return a;
            };
          t.validateResponseStatus = function validateResponseStatus(e) {
            return 200 === e || 206 === e;
          };
          var s = n(1),
            r = n(25),
            a = n(5);
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.getFilenameFromContentDispositionHeader =
            function getFilenameFromContentDispositionHeader(e) {
              let t = !0,
                n = toParamRegExp("filename\\*", "i").exec(e);
              if (n) {
                n = n[1];
                let e = rfc2616unquote(n);
                e = unescape(e);
                e = rfc5987decode(e);
                e = rfc2047decode(e);
                return fixupEncoding(e);
              }
              n = (function rfc2231getparam(e) {
                const t = [];
                let n;
                const s = toParamRegExp(
                  "filename\\*((?!0\\d)\\d+)(\\*?)",
                  "ig"
                );
                for (; null !== (n = s.exec(e)); ) {
                  let [, e, s, r] = n;
                  e = parseInt(e, 10);
                  if (e in t) {
                    if (0 === e) break;
                  } else t[e] = [s, r];
                }
                const r = [];
                for (let e = 0; e < t.length && e in t; ++e) {
                  let [n, s] = t[e];
                  s = rfc2616unquote(s);
                  if (n) {
                    s = unescape(s);
                    0 === e && (s = rfc5987decode(s));
                  }
                  r.push(s);
                }
                return r.join("");
              })(e);
              if (n) {
                return fixupEncoding(rfc2047decode(n));
              }
              n = toParamRegExp("filename", "i").exec(e);
              if (n) {
                n = n[1];
                let e = rfc2616unquote(n);
                e = rfc2047decode(e);
                return fixupEncoding(e);
              }
              function toParamRegExp(e, t) {
                return new RegExp(
                  "(?:^|;)\\s*" +
                    e +
                    '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',
                  t
                );
              }
              function textdecode(e, n) {
                if (e) {
                  if (!/^[\x00-\xFF]+$/.test(n)) return n;
                  try {
                    const r = new TextDecoder(e, { fatal: !0 }),
                      a = (0, s.stringToBytes)(n);
                    n = r.decode(a);
                    t = !1;
                  } catch (e) {}
                }
                return n;
              }
              function fixupEncoding(e) {
                if (t && /[\x80-\xff]/.test(e)) {
                  e = textdecode("utf-8", e);
                  t && (e = textdecode("iso-8859-1", e));
                }
                return e;
              }
              function rfc2616unquote(e) {
                if (e.startsWith('"')) {
                  const t = e.slice(1).split('\\"');
                  for (let e = 0; e < t.length; ++e) {
                    const n = t[e].indexOf('"');
                    if (-1 !== n) {
                      t[e] = t[e].slice(0, n);
                      t.length = e + 1;
                    }
                    t[e] = t[e].replace(/\\(.)/g, "$1");
                  }
                  e = t.join('"');
                }
                return e;
              }
              function rfc5987decode(e) {
                const t = e.indexOf("'");
                if (-1 === t) return e;
                return textdecode(
                  e.slice(0, t),
                  e.slice(t + 1).replace(/^[^']*'/, "")
                );
              }
              function rfc2047decode(e) {
                return !e.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(e)
                  ? e
                  : e.replace(
                      /=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,
                      function (e, t, n, s) {
                        if ("q" === n || "Q" === n)
                          return textdecode(
                            t,
                            (s = (s = s.replace(/_/g, " ")).replace(
                              /=([0-9a-fA-F]{2})/g,
                              function (e, t) {
                                return String.fromCharCode(parseInt(t, 16));
                              }
                            ))
                          );
                        try {
                          s = atob(s);
                        } catch (e) {}
                        return textdecode(t, s);
                      }
                    );
              }
              return "";
            };
          var s = n(1);
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.PDFNetworkStream = void 0;
          var s = n(1),
            r = n(24);
          class NetworkManager {
            constructor(e, t = {}) {
              this.url = e;
              this.isHttp = /^https?:/i.test(e);
              this.httpHeaders =
                (this.isHttp && t.httpHeaders) || Object.create(null);
              this.withCredentials = t.withCredentials || !1;
              this.getXhr =
                t.getXhr ||
                function NetworkManager_getXhr() {
                  return new XMLHttpRequest();
                };
              this.currXhrId = 0;
              this.pendingRequests = Object.create(null);
            }
            requestRange(e, t, n) {
              const s = { begin: e, end: t };
              for (const e in n) s[e] = n[e];
              return this.request(s);
            }
            requestFull(e) {
              return this.request(e);
            }
            request(e) {
              const t = this.getXhr(),
                n = this.currXhrId++,
                s = (this.pendingRequests[n] = { xhr: t });
              t.open("GET", this.url);
              t.withCredentials = this.withCredentials;
              for (const e in this.httpHeaders) {
                const n = this.httpHeaders[e];
                void 0 !== n && t.setRequestHeader(e, n);
              }
              if (this.isHttp && "begin" in e && "end" in e) {
                t.setRequestHeader("Range", `bytes=${e.begin}-${e.end - 1}`);
                s.expectedStatus = 206;
              } else s.expectedStatus = 200;
              t.responseType = "arraybuffer";
              e.onError &&
                (t.onerror = function (n) {
                  e.onError(t.status);
                });
              t.onreadystatechange = this.onStateChange.bind(this, n);
              t.onprogress = this.onProgress.bind(this, n);
              s.onHeadersReceived = e.onHeadersReceived;
              s.onDone = e.onDone;
              s.onError = e.onError;
              s.onProgress = e.onProgress;
              t.send(null);
              return n;
            }
            onProgress(e, t) {
              const n = this.pendingRequests[e];
              n && n.onProgress?.(t);
            }
            onStateChange(e, t) {
              const n = this.pendingRequests[e];
              if (!n) return;
              const r = n.xhr;
              if (r.readyState >= 2 && n.onHeadersReceived) {
                n.onHeadersReceived();
                delete n.onHeadersReceived;
              }
              if (4 !== r.readyState) return;
              if (!(e in this.pendingRequests)) return;
              delete this.pendingRequests[e];
              if (0 === r.status && this.isHttp) {
                n.onError?.(r.status);
                return;
              }
              const a = r.status || 200;
              if (
                !(200 === a && 206 === n.expectedStatus) &&
                a !== n.expectedStatus
              ) {
                n.onError?.(r.status);
                return;
              }
              const i = (function getArrayBuffer(e) {
                const t = e.response;
                return "string" != typeof t
                  ? t
                  : (0, s.stringToBytes)(t).buffer;
              })(r);
              if (206 === a) {
                const e = r.getResponseHeader("Content-Range"),
                  t = /bytes (\d+)-(\d+)\/(\d+)/.exec(e);
                n.onDone({ begin: parseInt(t[1], 10), chunk: i });
              } else
                i ? n.onDone({ begin: 0, chunk: i }) : n.onError?.(r.status);
            }
            getRequestXhr(e) {
              return this.pendingRequests[e].xhr;
            }
            isPendingRequest(e) {
              return e in this.pendingRequests;
            }
            abortRequest(e) {
              const t = this.pendingRequests[e].xhr;
              delete this.pendingRequests[e];
              t.abort();
            }
          }
          t.PDFNetworkStream = class PDFNetworkStream {
            constructor(e) {
              this._source = e;
              this._manager = new NetworkManager(e.url, {
                httpHeaders: e.httpHeaders,
                withCredentials: e.withCredentials,
              });
              this._rangeChunkSize = e.rangeChunkSize;
              this._fullRequestReader = null;
              this._rangeRequestReaders = [];
            }
            _onRangeRequestReaderClosed(e) {
              const t = this._rangeRequestReaders.indexOf(e);
              t >= 0 && this._rangeRequestReaders.splice(t, 1);
            }
            getFullReader() {
              (0, s.assert)(
                !this._fullRequestReader,
                "PDFNetworkStream.getFullReader can only be called once."
              );
              this._fullRequestReader = new PDFNetworkStreamFullRequestReader(
                this._manager,
                this._source
              );
              return this._fullRequestReader;
            }
            getRangeReader(e, t) {
              const n = new PDFNetworkStreamRangeRequestReader(
                this._manager,
                e,
                t
              );
              n.onClosed = this._onRangeRequestReaderClosed.bind(this);
              this._rangeRequestReaders.push(n);
              return n;
            }
            cancelAllRequests(e) {
              this._fullRequestReader?.cancel(e);
              for (const t of this._rangeRequestReaders.slice(0)) t.cancel(e);
            }
          };
          class PDFNetworkStreamFullRequestReader {
            constructor(e, t) {
              this._manager = e;
              const n = {
                onHeadersReceived: this._onHeadersReceived.bind(this),
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this),
              };
              this._url = t.url;
              this._fullRequestId = e.requestFull(n);
              this._headersReceivedCapability = (0,
              s.createPromiseCapability)();
              this._disableRange = t.disableRange || !1;
              this._contentLength = t.length;
              this._rangeChunkSize = t.rangeChunkSize;
              this._rangeChunkSize ||
                this._disableRange ||
                (this._disableRange = !0);
              this._isStreamingSupported = !1;
              this._isRangeSupported = !1;
              this._cachedChunks = [];
              this._requests = [];
              this._done = !1;
              this._storedError = void 0;
              this._filename = null;
              this.onProgress = null;
            }
            _onHeadersReceived() {
              const e = this._fullRequestId,
                t = this._manager.getRequestXhr(e),
                getResponseHeader = (e) => t.getResponseHeader(e),
                { allowRangeRequests: n, suggestedLength: s } = (0,
                r.validateRangeRequestCapabilities)({
                  getResponseHeader: getResponseHeader,
                  isHttp: this._manager.isHttp,
                  rangeChunkSize: this._rangeChunkSize,
                  disableRange: this._disableRange,
                });
              n && (this._isRangeSupported = !0);
              this._contentLength = s || this._contentLength;
              this._filename = (0, r.extractFilenameFromHeader)(
                getResponseHeader
              );
              this._isRangeSupported && this._manager.abortRequest(e);
              this._headersReceivedCapability.resolve();
            }
            _onDone(e) {
              if (e)
                if (this._requests.length > 0) {
                  this._requests.shift().resolve({ value: e.chunk, done: !1 });
                } else this._cachedChunks.push(e.chunk);
              this._done = !0;
              if (!(this._cachedChunks.length > 0)) {
                for (const e of this._requests)
                  e.resolve({ value: void 0, done: !0 });
                this._requests.length = 0;
              }
            }
            _onError(e) {
              this._storedError = (0, r.createResponseStatusError)(
                e,
                this._url
              );
              this._headersReceivedCapability.reject(this._storedError);
              for (const e of this._requests) e.reject(this._storedError);
              this._requests.length = 0;
              this._cachedChunks.length = 0;
            }
            _onProgress(e) {
              this.onProgress?.({
                loaded: e.loaded,
                total: e.lengthComputable ? e.total : this._contentLength,
              });
            }
            get filename() {
              return this._filename;
            }
            get isRangeSupported() {
              return this._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            get contentLength() {
              return this._contentLength;
            }
            get headersReady() {
              return this._headersReceivedCapability.promise;
            }
            async read() {
              if (this._storedError) throw this._storedError;
              if (this._cachedChunks.length > 0) {
                return { value: this._cachedChunks.shift(), done: !1 };
              }
              if (this._done) return { value: void 0, done: !0 };
              const e = (0, s.createPromiseCapability)();
              this._requests.push(e);
              return e.promise;
            }
            cancel(e) {
              this._done = !0;
              this._headersReceivedCapability.reject(e);
              for (const e of this._requests)
                e.resolve({ value: void 0, done: !0 });
              this._requests.length = 0;
              this._manager.isPendingRequest(this._fullRequestId) &&
                this._manager.abortRequest(this._fullRequestId);
              this._fullRequestReader = null;
            }
          }
          class PDFNetworkStreamRangeRequestReader {
            constructor(e, t, n) {
              this._manager = e;
              const s = {
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this),
              };
              this._url = e.url;
              this._requestId = e.requestRange(t, n, s);
              this._requests = [];
              this._queuedChunk = null;
              this._done = !1;
              this._storedError = void 0;
              this.onProgress = null;
              this.onClosed = null;
            }
            _close() {
              this.onClosed?.(this);
            }
            _onDone(e) {
              const t = e.chunk;
              if (this._requests.length > 0) {
                this._requests.shift().resolve({ value: t, done: !1 });
              } else this._queuedChunk = t;
              this._done = !0;
              for (const e of this._requests)
                e.resolve({ value: void 0, done: !0 });
              this._requests.length = 0;
              this._close();
            }
            _onError(e) {
              this._storedError = (0, r.createResponseStatusError)(
                e,
                this._url
              );
              for (const e of this._requests) e.reject(this._storedError);
              this._requests.length = 0;
              this._queuedChunk = null;
            }
            _onProgress(e) {
              this.isStreamingSupported ||
                this.onProgress?.({ loaded: e.loaded });
            }
            get isStreamingSupported() {
              return !1;
            }
            async read() {
              if (this._storedError) throw this._storedError;
              if (null !== this._queuedChunk) {
                const e = this._queuedChunk;
                this._queuedChunk = null;
                return { value: e, done: !1 };
              }
              if (this._done) return { value: void 0, done: !0 };
              const e = (0, s.createPromiseCapability)();
              this._requests.push(e);
              return e.promise;
            }
            cancel(e) {
              this._done = !0;
              for (const e of this._requests)
                e.resolve({ value: void 0, done: !0 });
              this._requests.length = 0;
              this._manager.isPendingRequest(this._requestId) &&
                this._manager.abortRequest(this._requestId);
              this._close();
            }
          }
        },
        (e, t, n) => {
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.PDFFetchStream = void 0;
          var s = n(1),
            r = n(24);
          function createFetchOptions(e, t, n) {
            return {
              method: "GET",
              headers: e,
              signal: n?.signal,
              mode: "cors",
              credentials: t ? "include" : "same-origin",
              redirect: "follow",
            };
          }
          function createHeaders(e) {
            const t = new Headers();
            for (const n in e) {
              const s = e[n];
              void 0 !== s && t.append(n, s);
            }
            return t;
          }
          t.PDFFetchStream = class PDFFetchStream {
            constructor(e) {
              this.source = e;
              this.isHttp = /^https?:/i.test(e.url);
              this.httpHeaders = (this.isHttp && e.httpHeaders) || {};
              this._fullRequestReader = null;
              this._rangeRequestReaders = [];
            }
            get _progressiveDataLength() {
              return this._fullRequestReader?._loaded ?? 0;
            }
            getFullReader() {
              (0, s.assert)(
                !this._fullRequestReader,
                "PDFFetchStream.getFullReader can only be called once."
              );
              this._fullRequestReader = new PDFFetchStreamReader(this);
              return this._fullRequestReader;
            }
            getRangeReader(e, t) {
              if (t <= this._progressiveDataLength) return null;
              const n = new PDFFetchStreamRangeReader(this, e, t);
              this._rangeRequestReaders.push(n);
              return n;
            }
            cancelAllRequests(e) {
              this._fullRequestReader && this._fullRequestReader.cancel(e);
              for (const t of this._rangeRequestReaders.slice(0)) t.cancel(e);
            }
          };
          class PDFFetchStreamReader {
            constructor(e) {
              this._stream = e;
              this._reader = null;
              this._loaded = 0;
              this._filename = null;
              const t = e.source;
              this._withCredentials = t.withCredentials || !1;
              this._contentLength = t.length;
              this._headersCapability = (0, s.createPromiseCapability)();
              this._disableRange = t.disableRange || !1;
              this._rangeChunkSize = t.rangeChunkSize;
              this._rangeChunkSize ||
                this._disableRange ||
                (this._disableRange = !0);
              "undefined" != typeof AbortController &&
                (this._abortController = new AbortController());
              this._isStreamingSupported = !t.disableStream;
              this._isRangeSupported = !t.disableRange;
              this._headers = createHeaders(this._stream.httpHeaders);
              const n = t.url;
              fetch(
                n,
                createFetchOptions(
                  this._headers,
                  this._withCredentials,
                  this._abortController
                )
              )
                .then((e) => {
                  if (!(0, r.validateResponseStatus)(e.status))
                    throw (0, r.createResponseStatusError)(e.status, n);
                  this._reader = e.body.getReader();
                  this._headersCapability.resolve();
                  const getResponseHeader = (t) => e.headers.get(t),
                    { allowRangeRequests: t, suggestedLength: a } = (0,
                    r.validateRangeRequestCapabilities)({
                      getResponseHeader: getResponseHeader,
                      isHttp: this._stream.isHttp,
                      rangeChunkSize: this._rangeChunkSize,
                      disableRange: this._disableRange,
                    });
                  this._isRangeSupported = t;
                  this._contentLength = a || this._contentLength;
                  this._filename = (0, r.extractFilenameFromHeader)(
                    getResponseHeader
                  );
                  !this._isStreamingSupported &&
                    this._isRangeSupported &&
                    this.cancel(new s.AbortException("Streaming is disabled."));
                })
                .catch(this._headersCapability.reject);
              this.onProgress = null;
            }
            get headersReady() {
              return this._headersCapability.promise;
            }
            get filename() {
              return this._filename;
            }
            get contentLength() {
              return this._contentLength;
            }
            get isRangeSupported() {
              return this._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              await this._headersCapability.promise;
              const { value: e, done: t } = await this._reader.read();
              if (t) return { value: e, done: t };
              this._loaded += e.byteLength;
              this.onProgress &&
                this.onProgress({
                  loaded: this._loaded,
                  total: this._contentLength,
                });
              return { value: new Uint8Array(e).buffer, done: !1 };
            }
            cancel(e) {
              this._reader && this._reader.cancel(e);
              this._abortController && this._abortController.abort();
            }
          }
          class PDFFetchStreamRangeReader {
            constructor(e, t, n) {
              this._stream = e;
              this._reader = null;
              this._loaded = 0;
              const a = e.source;
              this._withCredentials = a.withCredentials || !1;
              this._readCapability = (0, s.createPromiseCapability)();
              this._isStreamingSupported = !a.disableStream;
              "undefined" != typeof AbortController &&
                (this._abortController = new AbortController());
              this._headers = createHeaders(this._stream.httpHeaders);
              this._headers.append("Range", `bytes=${t}-${n - 1}`);
              const i = a.url;
              fetch(
                i,
                createFetchOptions(
                  this._headers,
                  this._withCredentials,
                  this._abortController
                )
              )
                .then((e) => {
                  if (!(0, r.validateResponseStatus)(e.status))
                    throw (0, r.createResponseStatusError)(e.status, i);
                  this._readCapability.resolve();
                  this._reader = e.body.getReader();
                })
                .catch(this._readCapability.reject);
              this.onProgress = null;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              await this._readCapability.promise;
              const { value: e, done: t } = await this._reader.read();
              if (t) return { value: e, done: t };
              this._loaded += e.byteLength;
              this.onProgress && this.onProgress({ loaded: this._loaded });
              return { value: new Uint8Array(e).buffer, done: !1 };
            }
            cancel(e) {
              this._reader && this._reader.cancel(e);
              this._abortController && this._abortController.abort();
            }
          }
        },
      ],
      __webpack_module_cache__ = {};
    function __w_pdfjs_require__(e) {
      var t = __webpack_module_cache__[e];
      if (void 0 !== t) return t.exports;
      var n = (__webpack_module_cache__[e] = { exports: {} });
      __webpack_modules__[e](n, n.exports, __w_pdfjs_require__);
      return n.exports;
    }
    var __webpack_exports__ = {};
    (() => {
      var e = __webpack_exports__;
      Object.defineProperty(e, "__esModule", { value: !0 });
      Object.defineProperty(e, "AnnotationLayer", {
        enumerable: !0,
        get: function () {
          return r.AnnotationLayer;
        },
      });
      Object.defineProperty(e, "AnnotationMode", {
        enumerable: !0,
        get: function () {
          return t.AnnotationMode;
        },
      });
      Object.defineProperty(e, "CMapCompressionType", {
        enumerable: !0,
        get: function () {
          return t.CMapCompressionType;
        },
      });
      Object.defineProperty(e, "GlobalWorkerOptions", {
        enumerable: !0,
        get: function () {
          return a.GlobalWorkerOptions;
        },
      });
      Object.defineProperty(e, "InvalidPDFException", {
        enumerable: !0,
        get: function () {
          return t.InvalidPDFException;
        },
      });
      Object.defineProperty(e, "LoopbackPort", {
        enumerable: !0,
        get: function () {
          return n.LoopbackPort;
        },
      });
      Object.defineProperty(e, "MissingPDFException", {
        enumerable: !0,
        get: function () {
          return t.MissingPDFException;
        },
      });
      Object.defineProperty(e, "OPS", {
        enumerable: !0,
        get: function () {
          return t.OPS;
        },
      });
      Object.defineProperty(e, "PDFDataRangeTransport", {
        enumerable: !0,
        get: function () {
          return n.PDFDataRangeTransport;
        },
      });
      Object.defineProperty(e, "PDFDateString", {
        enumerable: !0,
        get: function () {
          return s.PDFDateString;
        },
      });
      Object.defineProperty(e, "PDFWorker", {
        enumerable: !0,
        get: function () {
          return n.PDFWorker;
        },
      });
      Object.defineProperty(e, "PasswordResponses", {
        enumerable: !0,
        get: function () {
          return t.PasswordResponses;
        },
      });
      Object.defineProperty(e, "PermissionFlag", {
        enumerable: !0,
        get: function () {
          return t.PermissionFlag;
        },
      });
      Object.defineProperty(e, "PixelsPerInch", {
        enumerable: !0,
        get: function () {
          return s.PixelsPerInch;
        },
      });
      Object.defineProperty(e, "RenderingCancelledException", {
        enumerable: !0,
        get: function () {
          return s.RenderingCancelledException;
        },
      });
      Object.defineProperty(e, "SVGGraphics", {
        enumerable: !0,
        get: function () {
          return l.SVGGraphics;
        },
      });
      Object.defineProperty(e, "UNSUPPORTED_FEATURES", {
        enumerable: !0,
        get: function () {
          return t.UNSUPPORTED_FEATURES;
        },
      });
      Object.defineProperty(e, "UnexpectedResponseException", {
        enumerable: !0,
        get: function () {
          return t.UnexpectedResponseException;
        },
      });
      Object.defineProperty(e, "Util", {
        enumerable: !0,
        get: function () {
          return t.Util;
        },
      });
      Object.defineProperty(e, "VerbosityLevel", {
        enumerable: !0,
        get: function () {
          return t.VerbosityLevel;
        },
      });
      Object.defineProperty(e, "XfaLayer", {
        enumerable: !0,
        get: function () {
          return c.XfaLayer;
        },
      });
      Object.defineProperty(e, "build", {
        enumerable: !0,
        get: function () {
          return n.build;
        },
      });
      Object.defineProperty(e, "createPromiseCapability", {
        enumerable: !0,
        get: function () {
          return t.createPromiseCapability;
        },
      });
      Object.defineProperty(e, "createValidAbsoluteUrl", {
        enumerable: !0,
        get: function () {
          return t.createValidAbsoluteUrl;
        },
      });
      Object.defineProperty(e, "getDocument", {
        enumerable: !0,
        get: function () {
          return n.getDocument;
        },
      });
      Object.defineProperty(e, "getFilenameFromUrl", {
        enumerable: !0,
        get: function () {
          return s.getFilenameFromUrl;
        },
      });
      Object.defineProperty(e, "getPdfFilenameFromUrl", {
        enumerable: !0,
        get: function () {
          return s.getPdfFilenameFromUrl;
        },
      });
      Object.defineProperty(e, "getXfaPageViewport", {
        enumerable: !0,
        get: function () {
          return s.getXfaPageViewport;
        },
      });
      Object.defineProperty(e, "isPdfFile", {
        enumerable: !0,
        get: function () {
          return s.isPdfFile;
        },
      });
      Object.defineProperty(e, "loadScript", {
        enumerable: !0,
        get: function () {
          return s.loadScript;
        },
      });
      Object.defineProperty(e, "renderTextLayer", {
        enumerable: !0,
        get: function () {
          return o.renderTextLayer;
        },
      });
      Object.defineProperty(e, "shadow", {
        enumerable: !0,
        get: function () {
          return t.shadow;
        },
      });
      Object.defineProperty(e, "version", {
        enumerable: !0,
        get: function () {
          return n.version;
        },
      });
      var t = __w_pdfjs_require__(1),
        n = __w_pdfjs_require__(4),
        s = __w_pdfjs_require__(5),
        r = __w_pdfjs_require__(18),
        a = __w_pdfjs_require__(12),
        i = __w_pdfjs_require__(3),
        o = __w_pdfjs_require__(21),
        l = __w_pdfjs_require__(22),
        c = __w_pdfjs_require__(20);
      if (i.isNodeJS) {
        const { PDFNodeStream: e } = __w_pdfjs_require__(23);
        (0, n.setPDFNetworkStreamFactory)((t) => new e(t));
      } else {
        const { PDFNetworkStream: e } = __w_pdfjs_require__(26),
          { PDFFetchStream: t } = __w_pdfjs_require__(27);
        (0, n.setPDFNetworkStreamFactory)((n) =>
          (0, s.isValidFetchUrl)(n.url) ? new t(n) : new e(n)
        );
      }
    })();
    return __webpack_exports__;
  })();
});
