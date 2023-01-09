package com.example.apktest

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.JavascriptInterface
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val myWebView: WebView = findViewById(R.id.webview)
        myWebView.settings.javaScriptEnabled = true
        myWebView.webViewClient = WebViewClient()
//        myWebView.loadUrl("file:///android_asset/www/index.html")
        myWebView.loadUrl("http://10.80.100.71:10/")
        myWebView.settings.textZoom = 100
        myWebView.settings.userAgentString = myWebView.settings.userAgentString + " app"
        WebView.setWebContentsDebuggingEnabled(true)
        val swipe = findViewById<SwipeRefreshLayout>(R.id.swiperefreshlayout)
        class WebAppInterface {
            @JavascriptInterface

            fun refreshSetEnabled(state: Boolean) {
                swipe.isEnabled = state !== false
            }
        }
        myWebView.addJavascriptInterface(WebAppInterface(), "Test")

        swipe.setOnRefreshListener {
            myWebView.reload()
            swipe.isRefreshing = false
        }
    }

    override fun onBackPressed() {
        val myWebView: WebView = findViewById(R.id.webview)
        if(myWebView.canGoBack()) {
            myWebView.goBack()
        } else {
            super.onBackPressed()
        }
    }
}
