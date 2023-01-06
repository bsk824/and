package com.example.apktest

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var myWebView: WebView = findViewById(R.id.webview);
        myWebView.settings.javaScriptEnabled = true;
        myWebView.webViewClient = WebViewClient();
//        myWebView.loadUrl("file:///android_asset/www/index.html");
        myWebView.loadUrl("http://10.80.100.90:10/");
        myWebView.getSettings().setTextZoom(100);
        myWebView.getSettings().setUserAgentString(myWebView.getSettings().getUserAgentString() + " app");
        WebView.setWebContentsDebuggingEnabled(true);

        var swipe = findViewById<SwipeRefreshLayout>(R.id.swiperefreshlayout)
        swipe.setOnRefreshListener {
            myWebView.reload()
            swipe.isRefreshing = false
        }
    }

    override fun onBackPressed() {
        var myWebView: WebView = findViewById(R.id.webview);
        if(myWebView.canGoBack()) {
            myWebView.goBack()
        } else {
            super.onBackPressed()
        }
    }
}