$(document).foundation();
  $.ajax({
        url: 'proxy.php',
        dataType: 'xml',
        success: function(xml) {
           var json = $.xml2json(xml);
           String.prototype.escapeSpecialChars = function() {
                return this.replace(/\\n/g, "\\n")
               .replace(/\\'/g, "\\'")
               .replace(/\\"/g, '\\"')
               .replace(/\\&/g, "\\&")
               .replace(/\\r/g, "\\r")
               .replace(/\\t/g, "\\t")
               .replace(/\\b/g, "\\b")
               .replace(/\#/g, "a")
               .replace(/\$/g, "S")
               .replace(/\\f/g, "\\f");
            };
            var JSONstring = JSON.stringify(json);
            var JSONstringEsc = JSONstring.escapeSpecialChars();
            console.log(JSONstringEsc);
            //$('#feed').html(JSONstringEsc);


           // $('#feed').html(JSON.stringify(json));
           //$('#feed').html(JSON.json.feed);

            //console.log(JSON.stringify(json));
            $.each(json, function(key, value) {
                // console.log(json.summary[value]);
            	$.each(value, function(date, datedate) {
            		//console.log(datedate);

            	});

            });
        }
      });

var testdata = {
  "#document": {
    "feed": {
      "updated": "2014-09-25T13:49:11.799+02:00",
      "ns2:startIndex": "1",
      "subtitle": {
        "$": {
          "type": "text"
        },
        "_": "Nasjonalbibliotekets general Search API for client applications, results: 1 - 10 of 15274"
      },
      "$": {
        "xmlns:ns2": "http://a9.com/-/spec/opensearch/1.1/",
        "xmlns:ns3": "http://www.w3.org/1999/xhtml",
        "xmlns": "http://www.w3.org/2005/Atom"
      },
      "title": {
        "$": {
          "type": "text"
        },
        "_": "NBSearch"
      },
      "ns2:totalResults": "15274",
      "ns2:Query": {
        "$": {
          "startIndex": "1",
          "role": "request",
          "searchTerms": "hamsun"
        },
        "_": ""
      },
      "link": [
        {
          "$": {
            "href": "http://www.nb.no/services/search/v2/search?q=hamsun",
            "rel": "self"
          },
          "_": ""
        },
        {
          "$": {
            "href": "http://www.nb.no/services/search/v2/search?q=hamsun&startIndex=11",
            "rel": "next"
          },
          "_": ""
        },
        {
          "$": {
            "href": "http://www.nb.no/services/search/v2/search?alt=application/opensearchdescription+xml",
            "type": "application/opensearchdescription+xml",
            "rel": "search"
          },
          "_": ""
        }
      ],
      "ns2:itemsPerPage": "10",
      "entry": [
        {
          "nb:subjecttopic": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Modeller; Isak (litterære karakterer)"
          },
          "nb:date": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "1929-01-01"
          },
          "nb:sesamid": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "78c5f35eea7105cf5cb6cede916a4eb6"
          },
          "nb:namecreator": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Myre, Olav"
          },
          "$": {},
          "nb:contentclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "restricted"
          },
          "title": {
            "$": {
              "type": "text"
            },
            "_": "Hamsun"
          },
          "nb:mainentry": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Myre, Olav"
          },
          "nb:year": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "1929"
          },
          "summary": {
            "$": {
              "type": "text"
            },
            "_": "Olav Myre Om Hamsuns første bøker og om modellen til Isak på Sellanrå"
          },
          "nb:digital": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "false"
          },
          "nb:metadataclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "public"
          },
          "link": [
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/mods/78c5f35eea7105cf5cb6cede916a4eb6",
                "type": "text/xml",
                "rel": "via",
                "title": "MODS metadata"
              },
              "_": ""
            },
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/holdings/78c5f35eea7105cf5cb6cede916a4eb6",
                "type": "text/xml",
                "rel": "related",
                "title": "Holdings"
              },
              "_": ""
            }
          ],
          "nb:mediatype": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Artikler"
          },
          "nb:languages": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "nob"
          },
          "nb:namecreators": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Myre, Olav"
          },
          "id": "http://www.nb.no/services/search/v2/search/78c5f35eea7105cf5cb6cede916a4eb6",
          "nb:subjectname": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Hamsun, Knut"
          }
        },
        {
          "nb:subjecttopic": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Jubileum"
          },
          "nb:date": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "1929-01-01"
          },
          "nb:sesamid": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "896007d769827988434d8c9b25e22ed5"
          },
          "nb:namecreator": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Vegesack, Siegfried von"
          },
          "$": {},
          "nb:contentclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "restricted"
          },
          "title": {
            "$": {
              "type": "text"
            },
            "_": "Hamsun"
          },
          "nb:mainentry": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Vegesack, Siegfried von"
          },
          "nb:year": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "1929"
          },
          "summary": {
            "$": {
              "type": "text"
            },
            "_": "Siegfried von Vegesack Dikt Også trykt i: Flensburger Nachrichten. 1929. 3/8. Opptrykt i: Die Waldhütte 10. Mölln : 1966. S.1"
          },
          "nb:digital": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "false"
          },
          "nb:metadataclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "public"
          },
          "link": [
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/mods/896007d769827988434d8c9b25e22ed5",
                "type": "text/xml",
                "rel": "via",
                "title": "MODS metadata"
              },
              "_": ""
            },
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/holdings/896007d769827988434d8c9b25e22ed5",
                "type": "text/xml",
                "rel": "related",
                "title": "Holdings"
              },
              "_": ""
            }
          ],
          "nb:mediatype": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Artikler"
          },
          "nb:languages": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "ger"
          },
          "nb:namecreators": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Vegesack, Siegfried von"
          },
          "id": "http://www.nb.no/services/search/v2/search/896007d769827988434d8c9b25e22ed5",
          "nb:subjectname": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Hamsun, Knut"
          }
        },
        {
          "nb:date": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "1963-01-01"
          },
          "nb:sesamid": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "40123bf6085752da731ccc887c0af1dc"
          },
          "$": {},
          "nb:contentclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "restricted"
          },
          "title": {
            "$": {
              "type": "text"
            },
            "_": "Hamsun"
          },
          "nb:year": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "1963"
          },
          "summary": {
            "$": {
              "type": "text"
            },
            "_": ""
          },
          "nb:digital": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "false"
          },
          "nb:metadataclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "public"
          },
          "link": [
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/mods/40123bf6085752da731ccc887c0af1dc",
                "type": "text/xml",
                "rel": "via",
                "title": "MODS metadata"
              },
              "_": ""
            },
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/holdings/40123bf6085752da731ccc887c0af1dc",
                "type": "text/xml",
                "rel": "related",
                "title": "Holdings"
              },
              "_": ""
            }
          ],
          "nb:mediatype": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Artikler"
          },
          "nb:languages": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "ger"
          },
          "id": "http://www.nb.no/services/search/v2/search/40123bf6085752da731ccc887c0af1dc",
          "nb:subjectname": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Hamsun, Knut"
          }
        },
        {
          "nb:subjecttopic": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Norsk litteratur; Norske forfattere : Verkanalyser; 1900-tallet; norsk; knut; forf; 1800-tallet; Forfatterskap; hamsun; litteraturhistorie; biografier"
          },
          "nb:isbn": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "8203065708"
          },
          "nb:sesamid": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "5473861c5fd3d1b7c09a1f5b17bbc141; 743b1abd8171aa1ac92c495ddd055afe"
          },
          "nb:namecreator": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Knutsen, Nils M."
          },
          "$": {},
          "nb:contentclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "bokhylla; restricted; jp2"
          },
          "title": {
            "$": {
              "type": "text"
            },
            "_": "Hamsun"
          },
          "nb:urn": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "URN:NBN:no-nb_digibok_2007061104014"
          },
          "nb:mainentry": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Knutsen, Nils M."
          },
          "nb:year": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "1975"
          },
          "summary": {
            "$": {
              "type": "text"
            },
            "_": "Nils M. Knutsen Hamsun-bibliografi s. (6)"
          },
          "nb:digital": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "true"
          },
          "nb:metadataclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "public"
          },
          "link": [
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/mods/5473861c5fd3d1b7c09a1f5b17bbc141",
                "type": "text/xml",
                "rel": "via",
                "title": "MODS metadata"
              },
              "_": ""
            },
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/holdings/5473861c5fd3d1b7c09a1f5b17bbc141",
                "type": "text/xml",
                "rel": "related",
                "title": "Holdings"
              },
              "_": ""
            },
            {
              "$": {
                "href": "http://urn.nb.no/URN:NBN:no-nb_digibok_2007061104014",
                "type": "text/html",
                "rel": "related",
                "title": "Object"
              },
              "_": ""
            },
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/struct/5473861c5fd3d1b7c09a1f5b17bbc141",
                "type": "text/xml",
                "rel": "related",
                "title": "Struct"
              },
              "_": ""
            },
            {
              "$": {
                "href": "http://urn.nb.no/URN:NBN:no-nb_digibok_2007061104014",
                "type": "text/html",
                "rel": "alternate",
                "title": "Digital Content"
              },
              "_": ""
            }
          ],
          "nb:mediatype": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Bøker"
          },
          "nb:languages": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "nob"
          },
          "id": "http://www.nb.no/services/search/v2/search/5473861c5fd3d1b7c09a1f5b17bbc141",
          "nb:namecreators": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Knutsen, Nils M."
          },
          "nb:date": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "1975-01-01"
          },
          "nb:subjectname": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Hamsun, Knut"
          }
        },
        {
          "nb:subjecttopic": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Forfatterskap"
          },
          "nb:date": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "1909-01-01"
          },
          "nb:sesamid": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "25dd56d2b1c378d465300744edfaf379"
          },
          "nb:namecreator": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Gierløff, Christian"
          },
          "$": {},
          "nb:contentclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "restricted"
          },
          "title": {
            "$": {
              "type": "text"
            },
            "_": "Hamsun"
          },
          "nb:subjecttitle": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Samlede Romaner og Fortællinger"
          },
          "nb:mainentry": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Gierløff, Christian"
          },
          "nb:year": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "1909"
          },
          "summary": {
            "$": {
              "type": "text"
            },
            "_": "Kyng"
          },
          "nb:digital": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "false"
          },
          "nb:metadataclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "public"
          },
          "link": [
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/mods/25dd56d2b1c378d465300744edfaf379",
                "type": "text/xml",
                "rel": "via",
                "title": "MODS metadata"
              },
              "_": ""
            },
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/holdings/25dd56d2b1c378d465300744edfaf379",
                "type": "text/xml",
                "rel": "related",
                "title": "Holdings"
              },
              "_": ""
            }
          ],
          "nb:mediatype": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Artikler"
          },
          "nb:languages": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "nob"
          },
          "nb:namecreators": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Gierløff, Christian"
          },
          "id": "http://www.nb.no/services/search/v2/search/25dd56d2b1c378d465300744edfaf379",
          "nb:subjectname": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Hamsun, Knut"
          }
        },
        {
          "nb:subjecttopic": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Norsk litteratur; 1900-tallet; norske; forfattere; 1800-tallet; Forfatterbiografier : Norge; biografier"
          },
          "nb:sesamid": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "20bd70c70136e5093ee637b9d4b1a7a9; 8dc8506814fe3dff3aa67668cabcef68"
          },
          "nb:namecreator": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Kolloen, Ingar Sletten"
          },
          "$": {},
          "nb:contentclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "restricted"
          },
          "title": {
            "$": {
              "type": "text"
            },
            "_": "Hamsun"
          },
          "nb:mediatype": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Bøker"
          },
          "summary": {
            "$": {
              "type": "text"
            },
            "_": "Ingar Sletten Kolloen"
          },
          "nb:digital": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "false"
          },
          "nb:metadataclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "public"
          },
          "link": [
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/mods/20bd70c70136e5093ee637b9d4b1a7a9",
                "type": "text/xml",
                "rel": "via",
                "title": "MODS metadata"
              },
              "_": ""
            },
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/holdings/20bd70c70136e5093ee637b9d4b1a7a9",
                "type": "text/xml",
                "rel": "related",
                "title": "Holdings"
              },
              "_": ""
            }
          ],
          "nb:subjectname": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Hamsun, Knut"
          },
          "nb:languages": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "nob"
          },
          "nb:namecreators": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Kolloen, Ingar Sletten"
          },
          "id": "http://www.nb.no/services/search/v2/search/20bd70c70136e5093ee637b9d4b1a7a9",
          "nb:mainentry": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Kolloen, Ingar Sletten"
          }
        },
        {
          "nb:date": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "1997-01-01"
          },
          "nb:sesamid": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "cc70d93c16eeee2360f8a8bf62806a20"
          },
          "nb:namecreator": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Enquist, Per Olov"
          },
          "$": {},
          "nb:contentclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "restricted"
          },
          "title": {
            "$": {
              "type": "text"
            },
            "_": "Hamsun"
          },
          "nb:mediatype": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Bøker"
          },
          "summary": {
            "$": {
              "type": "text"
            },
            "_": "Per Olov Enquist ; [zo švedskeho originálu preložila Mária Bratová]"
          },
          "nb:digital": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "false"
          },
          "nb:metadataclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "public"
          },
          "link": [
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/mods/cc70d93c16eeee2360f8a8bf62806a20",
                "type": "text/xml",
                "rel": "via",
                "title": "MODS metadata"
              },
              "_": ""
            },
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/holdings/cc70d93c16eeee2360f8a8bf62806a20",
                "type": "text/xml",
                "rel": "related",
                "title": "Holdings"
              },
              "_": ""
            }
          ],
          "nb:year": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "1997"
          },
          "nb:languages": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "und"
          },
          "nb:namecreators": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Enquist, Per Olov"
          },
          "id": "http://www.nb.no/services/search/v2/search/cc70d93c16eeee2360f8a8bf62806a20",
          "nb:mainentry": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Enquist, Per Olov"
          }
        },
        {
          "nb:date": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "1909-01-01"
          },
          "nb:sesamid": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "daf927d142bde735e1f5cd357a5b47d4"
          },
          "nb:namecreator": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Gierløff, Christian"
          },
          "$": {},
          "nb:contentclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "restricted"
          },
          "title": {
            "$": {
              "type": "text"
            },
            "_": "Hamsun"
          },
          "nb:mainentry": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Gierløff, Christian"
          },
          "nb:year": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "1909"
          },
          "summary": {
            "$": {
              "type": "text"
            },
            "_": "av Kyng Petit, russisk interesse"
          },
          "nb:digital": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "false"
          },
          "nb:metadataclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "public"
          },
          "link": [
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/mods/daf927d142bde735e1f5cd357a5b47d4",
                "type": "text/xml",
                "rel": "via",
                "title": "MODS metadata"
              },
              "_": ""
            },
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/holdings/daf927d142bde735e1f5cd357a5b47d4",
                "type": "text/xml",
                "rel": "related",
                "title": "Holdings"
              },
              "_": ""
            }
          ],
          "nb:mediatype": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Artikler"
          },
          "nb:languages": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "nob"
          },
          "nb:namecreators": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Gierløff, Christian"
          },
          "id": "http://www.nb.no/services/search/v2/search/daf927d142bde735e1f5cd357a5b47d4",
          "nb:subjectname": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Hamsun, Knut"
          }
        },
        {
          "nb:subjecttopic": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Samer; Motiver; Samer i litteraturen"
          },
          "nb:date": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "2004-01-01"
          },
          "nb:sesamid": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "50e16e57db1817cae3035c69df586a12"
          },
          "nb:namecreator": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Gustavsen, John"
          },
          "$": {},
          "nb:contentclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "restricted"
          },
          "title": {
            "$": {
              "type": "text"
            },
            "_": "Hamsun"
          },
          "nb:mainentry": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Gustavsen, John"
          },
          "nb:year": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "2004"
          },
          "summary": {
            "$": {
              "type": "text"
            },
            "_": "Om synet på samer i noen av Knut Hamsuns romaner"
          },
          "nb:digital": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "false"
          },
          "nb:metadataclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "public"
          },
          "link": [
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/mods/50e16e57db1817cae3035c69df586a12",
                "type": "text/xml",
                "rel": "via",
                "title": "MODS metadata"
              },
              "_": ""
            },
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/holdings/50e16e57db1817cae3035c69df586a12",
                "type": "text/xml",
                "rel": "related",
                "title": "Holdings"
              },
              "_": ""
            }
          ],
          "nb:mediatype": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Artikler"
          },
          "nb:languages": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "nob"
          },
          "nb:namecreators": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Gustavsen, John"
          },
          "id": "http://www.nb.no/services/search/v2/search/50e16e57db1817cae3035c69df586a12",
          "nb:subjectname": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Hamsun, Knut"
          }
        },
        {
          "nb:subjecttopic": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Samer i litteraturen"
          },
          "nb:sesamid": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "f2c1ac4ae5026ea6fb4e1ce5e2b3e902"
          },
          "nb:namecreator": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Gustavsen, John"
          },
          "$": {},
          "nb:contentclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "public"
          },
          "title": {
            "$": {
              "type": "text"
            },
            "_": "Hamsun"
          },
          "nb:mediatype": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Artikler"
          },
          "summary": {
            "$": {
              "type": "text"
            },
            "_": "Om synet på samer i noen av Knut Hamsuns romaner"
          },
          "nb:digital": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "false"
          },
          "nb:metadataclasses": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "public"
          },
          "link": [
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/mods/f2c1ac4ae5026ea6fb4e1ce5e2b3e902",
                "type": "text/xml",
                "rel": "via",
                "title": "MODS metadata"
              },
              "_": ""
            },
            {
              "$": {
                "href": "http://www.nb.no/services/search/v2/holdings/f2c1ac4ae5026ea6fb4e1ce5e2b3e902",
                "type": "text/xml",
                "rel": "related",
                "title": "Holdings"
              },
              "_": ""
            }
          ],
          "nb:subjectname": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Hamsun, Knut"
          },
          "nb:languages": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "nob"
          },
          "nb:namecreators": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Gustavsen, John"
          },
          "id": "http://www.nb.no/services/search/v2/search/f2c1ac4ae5026ea6fb4e1ce5e2b3e902",
          "nb:mainentry": {
            "$": {
              "xmlns:nb": "http://www.nb.no/xml/search/1.0/"
            },
            "_": "Gustavsen, John"
          }
        }
      ],
      "id": "http://www.nb.no/atomfeed"
    },
    "$": {}
  }
};


      //     $(xml).find('entry').each(function(){
      //       var year = $(this).find("year").text()
      //       console.log(year);
      //       $('#feed').append(year);
      //     });
      //   }
      // });

    // $('.feed').load("proxy.php", function(){
    // // Some callback functions
    // console.info("loaded");
    // });


// var datatest = {
//   // A labels array that can contain any sort of values
//   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
//   // Our series array that contains series objects or in this case series data arrays
//   series: [
//     [5, 2, 4, 2, 0]
//   ]
// };

// In the global name space Chartist we call the Line function to initialize a line chart
// As a first parameter we pass in a selector where we would like to get our chart created
// Second parameter is the actual data object
//Chartist.Line('.ct-chart', datatest);